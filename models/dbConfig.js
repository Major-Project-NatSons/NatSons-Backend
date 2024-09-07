const databaseConfig = require('../config');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = databaseConfig.getClient();

sequelize.authenticate()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

const countryModel = require('./countryModel')(sequelize,DataTypes)

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