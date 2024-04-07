// database.js
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const db = new Sequelize({
  dialect: 'sqlite', // Change this to your database dialect (e.g., postgres, mysql)
  storage: 'database.sqlite', // Change this to your database file path or connection URL
  logging: false,
});

module.exports = db;
