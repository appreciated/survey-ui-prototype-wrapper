[![Build and Publish Docker Image](https://github.com/appreciated/survey-ui-prototype-wrapper/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/appreciated/survey-ui-prototype-wrapper/actions/workflows/docker-publish.yml)

# Embed your UI prototypes seamlessly in Surveys

This web application streamlines the process of embedding UI prototypes into surveys. You can adjust the iframe URL, title, and description easily through URL query parameters. This tool is engineered for seamless integration of UI prototypes and provides straightforward guidance to participants without needing to modify the UI prototypes.

# Screenshots
![grafik](https://github.com/appreciated/survey-ui-prototype-wrapper/assets/1729845/6599e7ed-672c-4fa2-b6ac-be7955af593e)

![grafik](https://github.com/appreciated/survey-ui-prototype-wrapper/assets/1729845/35e9c515-ddd2-4bfd-9ef3-527cbd739308)

## Features

- **Dynamic Content**: Control titles, instructions, and the iframe's content path directly through URL query parameters.
- **Iframe Integration**: Loads content in an iframe from a predefined hostname, based on the specified path.
- **Responsive Design**: The design is optimized for different screen sizes, enhancing usability on both desktop and mobile devices.
- **Security**: Prevents the manipulation of the hostname through external inputs to maintain a secure application environment.

## Using the Application

Dynamically set the iframe's content path, title, and instructions by formatting the URL as shown below:
Example:
```bash
http://localhost:3000/?title=Some+Custom+Title&instructions=Please+test+this+App!&path=/test
```

This URL sets:
- ~title as "Some Custom Title"~
- ~instructions as "Please test this App!"~
- path as "/test", which loads content from the specified path on the constant hostname.

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
Use the [docker-compose-production.yml](https://github.com/appreciated/survey-ui-prototype-wrapper/blob/main/docker-compose-production.yml) to deploy the automatically built Docker images.

## Security Measures

The application includes safeguards against hostname manipulation to prevent issues like cross-site scripting (XSS) and unauthorized data access.

## Support and Contributions
For support, to request features, or to report bugs, please utilize the Issues section of this GitHub repository. Contributions are welcome; to suggest improvements or introduce new features, please submit a pull request.
