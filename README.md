# Full-stack Template

# Full Stack App with Auth0 User Authentication

This is a full stack app scaffolded with create-react-app and using auth0 for user authentication.

## Installation

To install this app, follow these steps:

1. Clone this repository.
2. Install Node.js and npm globally on your machine.
3. Run npm install to install the dependencies.

## Usage

To run the app, follow these steps:

1. Run npm start to start the development server.
2. Open your browser and navigate to http://localhost:3000.

## Authentication

This app uses auth0 for user authentication. To set up auth0, follow these steps:

1. Create an account on auth0.com.
2. Create a new application in the auth0 dashboard.
3. Set the Allowed Callback URLs, Allowed Logout URLs, and Allowed Web Origins to http://localhost:3000.
4. Create a .env file in the /frontend directory.
5. Make sure .env is in your .gitignore
6. In your .env file, make two variables: REACT_APP_AUTH0_DOMAIN and REACT_APP_AUTH0_CLIENT_ID
7. Copy the Domain and Client ID from the auth0 dashboard .env file for the respective variable.
8. Run `npm start` from /frontend to start the development server.

## Technologies Used

This project was built using the following technologies:

- React
- Node.js
- Express
- MongoDB
- Auth0

## Linting, formatting and committing

- husky
- eslint
- prettier

## Included libraries for backend

    Dependencies:
    	"cors": "^2.8.5",
    	"crypto-js": "^4.1.1",
    	"dotenv": "^16.0.3",
    	"express": "^4.18.2",
    	"express-rate-limit": "^6.7.0",
    	"xss": "^1.0.14"

    Dev dependencies:
    	"@commitlint/cli": "^17.7.1",
    	"@commitlint/config-conventional": "^17.7.0",
    	"@types/cors": "^2.8.13",
    	"@types/crypto-js": "^4.1.1",
    	"@types/express": "^4.17.17",
    	"@types/node": "^18.15.11",
    	"@typescript-eslint/eslint-plugin": "^6.4.0",
    	"@typescript-eslint/parser": "^6.4.0",
    	"eslint-config-standard": "^17.1.0",
    	"eslint-config-prettier": "^9.0.0",
    	"eslint-plugin-import": "^2.28.0",
    	"eslint-plugin-n": "^16.0.1",
    	"eslint-plugin-promise": "^6.1.1",
    	"nodemon": "^2.0.22",
    	"prettier": "3.0.2",
    	"pretty-quick": "^3.1.3",
    	"rimraf": "^5.0.0",
    	"ts-node": "^10.9.1",
    	"typescript": "^5.0.3"

## Included libraries for frontend

**Chakra is the UI library of choice**

    Dependencies:
    	"@chakra-ui/react": "^2.8.0",
    	"@emotion/react": "^11.11.1",
    	"@emotion/styled": "^11.11.0",
    	"@auth0/auth0-react": "^2.2.1",
    	"@testing-library/jest-dom": "^5.17.0",
    	"@testing-library/react": "^13.4.0",
    	"@testing-library/user-event": "^13.5.0",
    	"@types/jest": "^27.5.2",
    	"@types/node": "^16.18.41",
    	"@types/react": "^18.2.20",
    	"@types/react-dom": "^18.2.7",
    	"framer-motion": "^10.16.1",
    	"react": "^18.2.0",
    	"react-dom": "^18.2.0",
    	"react-scripts": "5.0.1",
    	"typescript": "^4.9.5",
    	"web-vitals": "^2.1.4"

    Dev dependencies:
