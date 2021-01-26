# react-typescript-starter-app

A basic react app with Typescript, Material-UI and back-end support

This repository supports running a React app with node backend written using express.

### Setup

```
git clone git@github.com:Alcumus/react-typescript-starter-app.git
cd react-typescript-starter-app
npm install
npm run build
npm start # or npm run start:dev
```

Visit http://localhost:3000 to view app in browser.

Hit http://localhost:3001/home to get test server endpoint response.

### Database

Need to work with a database? You can do that with this starter app.

-   Make sure you have docker installed and is running
-   Open a terminal window, locate to the starter app directory
-   You can edit docker-compose.yml to edit environment variables
-   To bring up database, run `npm run docker:up`
-   To bring down database, run `npm run docker:down` # This will also clear database
