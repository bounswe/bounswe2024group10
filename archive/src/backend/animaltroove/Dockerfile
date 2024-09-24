FROM maven:latest as builder

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM openjdk:21-slim

COPY --from=builder /app/target/*.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
