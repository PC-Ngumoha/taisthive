/**
 * routes/recipe.js
 * 
 * Contains the code which defines the CRUD commands on the recipe entity.
 */
const express = require('express');
const User = require('../models/user');
const Recipe = require('../models/recipe');

const router = express.Router();

// POST /recipe/:user_id -> create a new recipe
router.post('/recipe/:user_id', async (req, res) => {
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
router.put('/recipe/:id', async (req, res) => {
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
router.delete('/recipe/:id', async (req, res) => {
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
router.get('/recipe/user/:user_id', async (req, res) => {
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
router.get('/recipe/:id', async (req, res) => {
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

module.exports = router;
