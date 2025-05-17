# Project Overview: NatSons Backend API

## Purpose
This project is a backend API server for the NatSons application. It provides RESTful endpoints to manage and retrieve data related to countries, states, homes, plots, users, and related documents. The API supports CRUD operations and serves as the data layer for the NatSons frontend or other clients.

## Technology Stack
- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **Sequelize**: ORM (Object-Relational Mapping) for interacting with a PostgreSQL database.
- **PostgreSQL**: Relational database for persistent data storage.
- **dotenv**: For managing environment variables.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Other dependencies**: Various npm packages for middleware and utilities.

## Project Structure

```
NatSons_backend/
├── app.js                  # Main entry point of the server
├── config.js               # Database configuration using Sequelize
├── controllers/            # Contains controller files handling business logic
│   ├── countryController.js
│   ├── stateController.js
│   ├── homeController.js
│   ├── plotController.js
│   ├── userController.js
│   ├── homeDocController.js
│   └── CDNController.js
├── models/                 # Sequelize models and database setup
│   ├── dbConfig.js         # Initializes Sequelize, imports models, defines relationships
│   ├── countryModel.js
│   ├── stateModel.js
│   ├── homeDataModel.js
│   ├── plotDataModel.js
│   ├── userModel.js
│   └── homeDocModel.js
├── routers/                # Express routers defining API routes
│   ├── countryRouter.js
│   ├── stateRouter.js
│   ├── homeRouter.js
│   ├── plotRouter.js
│   ├── userRouter.js
│   ├── homeDocRouter.js
│   └── CDNRouter.js
├── uploads/                # Static files served by the server
├── utils/                  # Utility functions (if any)
├── package.json            # Project dependencies and scripts
├── package-lock.json
└── docker-compose.yml      # Docker configuration (if used)
```

## Key Components

### app.js
- Sets up the Express server.
- Applies middleware for CORS, JSON parsing, and serving static files.
- Imports and mounts routers for different API endpoints.
- Starts the server on a specified port.

### config.js
- Configures and exports a Sequelize client connected to PostgreSQL using environment variables.

### models/dbConfig.js
- Initializes Sequelize with the database client.
- Imports all Sequelize models.
- Defines relationships between models (one-to-many, one-to-one).
- Syncs the database schema.

### Routers
- Define API endpoints and map them to controller functions.
- Organized by resource type (countries, states, homes, plots, users, documents, CDN).

### Controllers
- Contain business logic for handling requests.
- Interact with Sequelize models to perform database operations.
- Send appropriate HTTP responses with data or error messages.

## Database Relationships
- Countries have many States.
- Countries and States have many Homes.
- Countries and States have many Plots.
- Homes have one HomeDoc.
- Relationships are defined using Sequelize associations with foreign keys.

## How to Run
1. Set environment variables in a `.env` file (database credentials, PORT, etc.).
2. Install dependencies using `npm install`.
3. Start the server using `node app.js` or a process manager.
4. The API will be available at `http://localhost:<PORT>/api/...`.

## Extending the Project
- Add new models in the `models/` folder and define relationships in `dbConfig.js`.
- Create corresponding controllers and routers for new resources.
- Add middleware or utilities as needed in the `utils/` or `middleware/` folders.
- Maintain consistent naming conventions and folder structure.

## Summary
This project is a well-structured Node.js backend API using Express and Sequelize, designed for scalability and maintainability. It cleanly separates concerns between routing, business logic, and data access, making it easy to extend and maintain.
