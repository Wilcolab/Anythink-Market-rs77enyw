# Anythink Market Server

This project is an Express server that listens on port 8001. It is set up for automatic code reloading using Nodemon.

## Project Structure

```
anythink-market-server
├── src
│   └── index.js          # Entry point of the application
├── Dockerfile             # Dockerfile to build the server image
├── package.json           # Project metadata and dependencies
├── .gitignore             # Files and directories to ignore by Git
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- Docker installed if you want to run the server in a container.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-rs77enyw.git
   cd Anythink-Market-rs77enyw/anythink-market-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t anythink-market-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 anythink-market-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.