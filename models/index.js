require('dotenv');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DB_ADAPTER,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  });


  module.exports = sequelize