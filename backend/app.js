'use strict';
/**
 * app.js 
 * 
 * Contains main API code.
 */
require('dotenv').config();
const express = require('express');
const {Sequelize, DataTypes} = require('sequelize');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setting up the connection to the database
const _ = process.env;
const db = new Sequelize(
  `${_.DB_DIALECT}://${_.DB_USER}:${_.DB_PASS}@${_.DB_HOST}/${_.DB_NAME}`
);

// Testing out the connection to the DB at this point.
db.authenticate()
.then(() => {
  console.log('Connection to DB established Successfully');
})
.catch((err) => {
  console.log(`Unable to connect to DB:\nReason: ${err}`);
});

// Defining all tables in this app.

// Use table
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
    allowNull: false
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

// Actually creating the table
// User.sync()
// .then(() => {
//   console.log('Table users created successfully');
// })
// .catch((err) => {
//   console.log(`Unable to create Table: ${err}`);
// });


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



db.sync()
.then(() => {
  console.log('All tables created successfully');
})
.catch((err) => {
  console.log(`Unable to create table: ${err}`);
});

app.get('/', (req, res) => {
  res.status(200).send({Greetings: 'Hello User'});
});

app.listen(3000, () => {
  console.log('Server up and running at port 3000')
});