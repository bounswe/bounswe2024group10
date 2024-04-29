FROM maven:latest
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src src
RUN mvn package -DskipTests
FROM openjdk:21-jdk
WORKDIR /app
COPY --from=0 /app/target/animaltroove-0.0.1-SNAPSHOT.jar .
CMD ["java", "-jar", "animaltroove-0.0.1-SNAPSHOT.jar"]