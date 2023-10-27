/**
 * models/user.js
 * 
 * contains code which defines the schema for the users DB table.
 */
require('dotenv').config();
const {DataTypes} = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('../orm/db_config');

const _ = process.env;

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      delete this.getDataValue('password');
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    get() {
      const createdAt = new Date(this.getDataValue('createdAt'));
      return createdAt.toDateString();
    }
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    get() {
      const updatedAt = new Date(this.getDataValue('updatedAt'));
      return updatedAt.toDateString();
    }
  }
});

// Creating a hook to intercept user creation.
User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt(Number(_.SALT_ROUNDS));
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

module.exports = User;
