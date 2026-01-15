# Python Server

# Node.js Server

This project contains a Node.js server that has been migrated from Python. It provides routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `src/main.js`: This file contains the implementation of the Node.js server with routes for managing tasks. It handles adding a task to a list and retrieving the list.

- `src/`: This directory contains the source code for the Node.js server.

- `package.json`: This file lists the dependencies required for the Node.js server.

- `Dockerfile`: This file is used to build a Docker image for the Node.js server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the Node.js server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Node.js server and start the containers defined in the `docker-compose.yml` file.

- The Node.js server should now be running. You can access it at port `8000`.

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

## Migration from Python

This server was previously implemented in Python using FastAPI. It has been rewritten in Node.js to improve performance and developer experience.