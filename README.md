[![Build and Publish Docker Image](https://github.com/appreciated/survey-ui-prototype-wrapper/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/appreciated/survey-ui-prototype-wrapper/actions/workflows/docker-publish.yml)

# Minimalist Web Application with Iframe Path Configuration

This project delivers a minimalist web application containerized using Docker. It uses React for the UI and features an iframe whose content path can be specified via URL query parameters, while the hostname remains constant. This setup is ideal for testing and demonstration purposes, ensuring the application environment is controlled and secure.

## Features

- **Dynamic Content**: Titles, instructions, and the path of the iframe content can be controlled via URL query parameters.
- **Iframe Integration**: Incorporates an iframe that loads content from a predefined hostname based on the specified path.
- **Responsive Design**: Optimized for various screen sizes, ensuring usability on both desktop and mobile devices.
- **Security**: Ensures that the hostname cannot be manipulated via external inputs, maintaining a secure application environment.

## Prerequisites

To run this project locally, you will need:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/<Your_GitHub_Username>/my-app.git
cd my-app
```
2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```
The application will be accessible at http://localhost:3000.

## Using the Application

To dynamically specify the iframe's content path, use the path query parameter along with title and instructions. Format the URL as follows:

```bash
http://localhost:3000?title=Your+Title&instructions=Your+Instructions&path=/your-path
```

Example:
```bash
http://localhost:3000/?title=Testing+Environment&instructions=Please+review+the+document&path=/test
```

This URL sets:
- title as "Testing Environment"
- instructions as "Please review the document"
- path as "/documents/test-document", which loads content from the specified path on the constant hostname.

Docker Deployment

    Build the Docker image:

```bash
docker build -t my-app .
```

Start the container:

```bash
 docker run -p 3000:3000 my-app
```

The application will then be available at http://localhost:3000.

## Security Measures

The application restricts hostname modifications to prevent security vulnerabilities, such as cross-site scripting (XSS) or unauthorized data access. Always validate and sanitize paths derived from user inputs.
Support and Contributions

For support, feature requests, or bug reporting, please use the Issues section of this GitHub repository. Contributions are welcomed; please open a pull request for improvements or new features.
