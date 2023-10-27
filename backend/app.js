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

// app.get('/', (req, res) => {
//   res.status(200).send({Greetings: 'Hello User'});
// });

/**
 * What do I want:
 * 
 * For users:
 * POST /user -> create a new user
 * 
 * PUT /user/:id -> update a particular user
 * 
 * DELETE /user/:id -> Delete a particular user
 * 
 * For recipes:
 * 
 * POST /recipe/:user_id -> create a new recipe
 * 
 * PUT /recipe/:id -> update a particular recipe
 * 
 * DELETE /recipe/:id -> Delete a particular recipe
 * 
 * GET /recipe/:user_id -> Get all recipes created by a given user
 * 
 * GET /recipe/:id -> Get a particular recipe 
 */

// USER

// POST /user
app.post('/user', async (req, res) => {
  const data = req.body;
  try {
    const user = await User.create(data);
    res.status(201).send({user});
  } catch (err) {
    res.status(500).send({error: 'Something went wrong'});
  }
});

// PUT /user/:id 
app.put('/user/:id', async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    await User.update(data, {
      where: {
        id
      }
    });
    res.status(200).send({message: 'Successfully updated'});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
});

// DELETE /user/:id
app.delete('/user/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await User.destroy({
      where: {
        id
      }
    });
    res.status(200).send({message: 'Successfully deleted'});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
});

// GET /user/:id
app.get('/user/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: {
        id
      }
    });
    if (user === null) {
      return res.status(404).send({message: "User not found"});
    }
    res.status(200).send({user});
  } catch (err) {
    res.status(500).send({error: 'Something went wrong'});
  }
});


// RECIPE

// POST /recipe/:user_id -> create a new recipe
app.post('/recipe/:user_id', async (req, res) => {
  const data = req.body;
  const userId = req.params.user_id;
  try {
    const recipe = await Recipe.create(data);
    const author = await User.findOne({
      where: {
        id: userId
      }
    });
    // Connect the recipe to the user.
    await author.addRecipe(recipe);
    res.status(200).send({recipe});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
}); 

// PUT /recipe/:id -> update a particular recipe
app.put('/recipe/:id', async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const recipe = await Recipe.update(data, {
      where: {
        id
      }
    });
    if (recipe === 0) return res.status(404).send({message:'Updated Nothing'});
    res.status(200).send({message: 'Successfully updated'});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
});

// DELETE /recipe/:id -> Delete a particular recipe
app.delete('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await Recipe.destroy({
      where: {
        id
      }
    });
    if (recipe === 0) return res.status(404).send({message:'Deleted Nothing'});
    res.status(200).send({message: 'Successfully deleted'});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
});

// GET /recipe/:user_id -> Get all recipes created by a given user
app.get('/recipe/user/:user_id', async (req, res) => {
  const authorId = req.params.user_id;
  try {
    const author = await User.findOne({
      where: {
        id: authorId
      }
    });
    if (!author) {
      return res.status(404).send({message: 'Author with that ID not found'});
    }
    const recipes = await author.getRecipes();
    res.status(200).send({recipes});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
});

// GET /recipe/:id -> Get a particular recipe 
app.get('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await Recipe.findOne({
      where: {
        id
      }
    });
    if (recipe === null) {
      return res.status(404).send({message: 'Recipe not found'});
    }
    res.status(200).send({recipe});
  } catch (err) {
    res.status(500).send({message: 'Something went wrong'});
  }
});

app.listen(3000, () => {
  console.log('Server up and running at port 3000')
});