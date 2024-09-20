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
db.countryModel = require('./countryModel')(sequelize, DataTypes);
db.stateModel = require('./stateModel')(sequelize, DataTypes);
db.homeModel = require('./homeDataModel')(sequelize,DataTypes);
db.plotData = require('./plotDataModel')(sequelize,DataTypes);

// Define the One-to-Many relationship between Country and State
db.countryModel.hasMany(db.stateModel, {
  foreignKey: 'country_id', 
  as: 'states'             
});
db.stateModel.belongsTo(db.countryModel, {
  foreignKey: 'country_id',
  as: 'country'
});

//Define one to many relation between home and country table along with home and state table.
db.countryModel.hasMany(db.homeModel,{
  foreignKey: 'country_id',
  as: 'HomeData'
});
db.homeModel.belongsTo(db.countryModel,{
  foreignKey: 'country_id',
  as: 'country'
});

db.stateModel.hasMany(db.homeModel,{
  foreignKey: 'state_id',
  as: 'HomeData'
});
db.homeModel.belongsTo(db.stateModel,{
  foreignKey: 'state_id',
  as: 'state'
});

//Define one to many relation between plots data and country table along with home and state table.
db.countryModel.hasMany(db.plotData,{
  foreignKey: 'country_id',
  as: 'PlotData'
});
db.plotData.belongsTo(db.countryModel,{
  foreignKey: 'country_id',
  as: 'country'
});

db.stateModel.hasMany(db.plotData,{
  foreignKey: 'state_id',
  as: 'PLotData'
});
db.plotData.belongsTo(db.stateModel,{
  foreignKey: 'state_id',
  as: 'state'
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
