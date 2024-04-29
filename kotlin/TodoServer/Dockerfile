FROM gradle:jdk17 as build

COPY build.gradle.kts .
COPY gradle.properties .
COPY src ./src

RUN gradle installDist

FROM openjdk:17
RUN mkdir /app
RUN microdnf install findutils
COPY --from=build /home/gradle/build/install/gradle /app/
WORKDIR /app/bin
CMD ["./gradle"]
