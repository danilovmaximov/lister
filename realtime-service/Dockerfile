# Use the Maven image to build the project
FROM maven:3.8.7-openjdk-18 AS build
LABEL authors="danilmaksimov"

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file and the source code to the working directory
COPY pom.xml .
COPY src ./src

# Package the application
RUN mvn clean package

# Use the OpenJDK image to run the application
FROM openjdk:17-jdk-alpine
LABEL authors="danilmaksimov"

# Copy the packaged jar file from the build stage
COPY --from=build /app/target/realtime-service-0.0.1-SNAPSHOT.jar realtime-service-0.0.1-SNAPSHOT.jar

# Set the entry point to run the jar file
ENTRYPOINT ["java", "-jar", "realtime-service-0.0.1-SNAPSHOT.jar"]
