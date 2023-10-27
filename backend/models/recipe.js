/**
 * models/recipe.js
 * 
 * contains code which defines the schema for the recipes DB table
 */
const {DataTypes} = require('sequelize');
const db = require('../orm/db_config');
const User = require('./user');


const Recipe = db.define('recipe', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'New Recipe'
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ingredients: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

// Create One-to-Many association between the users and recipes
User.hasMany(Recipe, {
  foreignKey: {
    name: "authorId"
  },
  onDelete: 'CASCADE'
});
Recipe.belongsTo(User);

module.exports = Recipe;