# Animal Troove Project

## Prerequisites

Before building and running the `animal-troove` Docker image, ensure you have docker engine. (Check installation with `docker --version`)

## Building the Docker Image

To build the Docker image for the `animal-troove` application, navigate to the root directory of the project where the `Dockerfile` is located and run the following command:

docker build -t animal-troove .

Once the image is built, you can run the container using the following command:

docker run -p 8080:8080 animal-troove

This will start a container instance of the animal-troove application. The application will be accessible via localhost:8080 on your host machine.