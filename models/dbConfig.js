const databaseConfig = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with the database configuration
const sequelize = databaseConfig.getClient();

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Create an empty object to store models
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import the models
const countryModel = require('./countryModel')(sequelize, DataTypes);
const stateModel = require('./stateModel')(sequelize, DataTypes);


// Define the One-to-Many relationship between Country and State
countryModel.hasMany(stateModel, {
  foreignKey: 'country_id', // The foreign key in the State table
  as: 'states'             // Optional: alias for the relation
});
stateModel.belongsTo(countryModel, {
  foreignKey: 'country_id',
  as: 'country'
});

// Sync the models (create tables and define relationships)
sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

module.exports = {
  db,
  sequelize
};
