
# Simple HTTP Server with Docker

## Description
This project is a simple HTTP server built with Node.js and Express, designed to handle GET requests for fetching specific lines or entire contents from large text files. The server is dockerized for ease of deployment and consistency across different systems.

## Features
- Fetch entire file content or specific lines via HTTP GET requests.
- Dockerized setup for straightforward deployment.
- Compatible with both ARM and x86 architectures.
- Resource-efficient, with limits set for RAM and CPU usage.

## Prerequisites
- Docker installed on your machine.

## Installation and Setup
1. **Clone the Repository**
   ```
   git clone [Repository URL]
   cd [Repository Name]
   ```

2. **Build the Docker Image**
   ```
   docker build -t headout .
   ```

3. **Run the Docker Container**
   ```
   docker run -p 8080:8080 --memory=1500m --cpus=2 -v /path/to/DumpData:/tmp/data headout
   ```
   Replace `/path/to/DumpData` with your data files path on the host machine.

## Usage
- **Fetching File Content**
  - Access `http://localhost:8080/data?n=filename` for the entire file.
  - Use `http://localhost:8080/data?n=filename&m=line_number` for a specific line.

- **Testing with Curl**
  ```
  curl "http://localhost:8080/data?n=filename"
  curl "http://localhost:8080/data?n=filename&m=line_number"
  ```

## Generating Sample Data Files
Run `generateData.js` to generate 100MB sample data files containing multiple lines.

## Docker Details
- **Base Image**: Node.js `current-slim`.
- **Exposed Port**: 8080.
- **Resource Limits**: 1500 MB RAM and 2 CPU cores.

## Optimizations

### Asynchronous File Handling

- **Description**: Utilizing Node.js's non-blocking I/O model.
- **Benefit**: Ensures high throughput and efficient handling of file operations, especially under heavy load.

### Stream-Based File Reading

- **Description**: Implementing stream-based reading for large files.
- **Benefit**: Minimizes memory usage and improves response times, crucial for large file handling.

### Docker Containerization

- **Multi-Architecture Support**:
  - **Description**: Building the Docker image to support both ARM and x86 architectures.
  - **Benefit**: Ensures wide compatibility across different platforms and hardware.
- **Resource Limits**:
  - **Description**: Configuring the Docker container with specific resource limits (1500 MB RAM and 2 CPU cores).
  - **Benefit**: Optimizes resource usage and prevents over-allocation in shared environments.

### Error Handling

- **Description**: Implementing comprehensive error handling.
- **Benefit**: Gracefully manages file not found errors, out-of-range line requests, and invalid input scenarios, enhancing the server's reliability.

### Endpoint Optimization

- **Description**: Optimizing the `/data` endpoint for query parameter handling.
- **Benefit**: Ensures quick parsing and efficient retrieval of file content, improving overall endpoint performance.

## Contact
- Yash Sancheti
- [yashsancheti24@gmail.com](mailto:yashsancheti24@gmail.com)
- [Project Repository URL](https://github.com/Onyx2406/Headout_Assignment)
