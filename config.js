const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports.getClient = () => {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  });

  return sequelize;
};