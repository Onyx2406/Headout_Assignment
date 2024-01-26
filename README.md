# Headout_Assignment

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

## Contact
- Yash Sancheti
- [yashsancheti24@gmail.com](mailto:yashsancheti24@gmail.com)
- [Project Repository URL](https://github.com/yourusername/your-repo)
