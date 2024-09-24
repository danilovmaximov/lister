# Use the Maven image to build the project
FROM maven:3.9.8-amazoncorretto-17-al2023 AS build
LABEL authors="danilmaksimov"

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file and the source code to the working directory
COPY pom.xml .
COPY src ./src

# Package the application
RUN mvn clean package

# Use the OpenJDK image to run the application
FROM amazoncorretto:17.0.12-al2023
LABEL authors="danilmaksimov"

# Copy the packaged jar file from the build stage
COPY --from=build /app/target/tasks-service-0.0.1-SNAPSHOT.jar tasks-service-0.0.1-SNAPSHOT.jar

# Set up environment properties
ENV SPRING_PROFILES_ACTIVE=docker

# Set the entry point to run the jar file
ENTRYPOINT ["java", "-jar", "tasks-service-0.0.1-SNAPSHOT.jar"]
