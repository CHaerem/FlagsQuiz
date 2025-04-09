# FlagsQuiz

https://chaerem.github.io/FlagsQuiz/

## Docker Instructions

### Build the Docker Image

To build the Docker image, run the following command in the root directory of the repository:

```sh
docker build -t flagsquiz .
```

### Run the Docker Container

To run the Docker container, use the following command:

```sh
docker run -d -p 80:80 flagsquiz
```

This will start the container and map port 80 of the host to port 80 of the container, allowing you to access the application in your web browser at `http://localhost`.
