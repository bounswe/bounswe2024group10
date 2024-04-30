# Stage 1: Build the Java application
FROM maven:latest AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src src
RUN mvn package -DskipTests

# Stage 2: Initialize MySQL and SQL Server
FROM mysql:latest AS mysql_init
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=animaltroove
COPY src/DB.sql /docker-entrypoint-initdb.d/

# Stage 3: Run the MySQL Server
FROM mysql:latest AS mysql_server
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=animaltroove
# Expose the MySQL port
EXPOSE 3306

# Stage 4: Run the Java application
FROM openjdk:21-jdk AS java_app
# Set working directory
WORKDIR /app
# Copy the JAR file
COPY --from=build /app/target/animaltroove-0.0.1-SNAPSHOT.jar .
# Expose the port for the Java application
EXPOSE 8080
# Command to run the Java application
CMD ["java", "-jar", "animaltroove-0.0.1-SNAPSHOT.jar", "--spring.datasource.url=jdbc:mysql://mysql_server:3306/animaltroove", "--spring.datasource.username=root", "--spring.datasource.password=root"]