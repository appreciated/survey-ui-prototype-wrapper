[![Build and Publish Docker Image](https://github.com/appreciated/survey-ui-prototype-wrapper/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/appreciated/survey-ui-prototype-wrapper/actions/workflows/docker-publish.yml)

# Minimalist Web Application with Iframe Path Configuration

This project delivers a minimalist web application containerized using Docker. It provides a partly configurable iframe url, title, description via URL query parameters.
This makes placing a ui prototype into a survey simple while still giving guidance to the participant. 

# Screenshot
![grafik](https://github.com/appreciated/survey-ui-prototype-wrapper/assets/1729845/9aded587-68a8-41b4-99f6-09ce47a45363)

## Features

- **Dynamic Content**: Titles, instructions, and the path of the iframe content can be controlled via URL query parameters.
- **Iframe Integration**: Incorporates an iframe that loads content from a predefined hostname based on the specified path.
- **Responsive Design**: Optimized for various screen sizes, ensuring usability on both desktop and mobile devices.
- **Security**: Ensures that the hostname cannot be manipulated via external inputs, maintaining a secure application environment.

## Using the Application

To dynamically specify the iframe's content path, use the path query parameter along with title and instructions. Format the URL as follows:
Example:
```bash
[http://localhost:3000/?title=Testing+Environment&instructions=Please+review+the+document&path=/test](http://localhost:3000/?title=Some+Custom+Title&instructions=Please+test+this+App!&path=/test)
```

This URL sets:
- title as "Testing Environment"
- instructions as "Please review the document"
- path as "/documents/test-document", which loads content from the specified path on the constant hostname.

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


## Docker Deployment

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
