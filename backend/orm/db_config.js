/**
 * orm/db_config.js
 * 
 * connects to the database
 */
require('dotenv').config();
const {Sequelize} = require('sequelize');

const _ = process.env;
const db = new Sequelize(
  `${_.DB_DIALECT}://${_.DB_USER}:${_.DB_PASS}@${_.DB_HOST}/${_.DB_NAME}`
);

module.exports = db;
