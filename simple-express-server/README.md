# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile            # Dockerfile to build the application image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore by Git
├── package.json          # npm configuration file
├── nodemon.json          # Configuration for nodemon
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-g1hqz8d5.git
   cd Anythink-Market-g1hqz8d5/express-server
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the server:**
   ```
   yarn start
   ```

   The server will start and listen on port 8001.

## Docker Instructions

To build and run the Docker container:

1. **Build the Docker image:**
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001`.

## Usage

This project currently does not define any endpoints. You can extend it by adding routes in the `src/server.js` file as needed.