/**
 * routes/user.js
 * 
 * contains code which defines the CRUD commands on the User entity
 */
const express = require('express');
const User = require('../models/user');

router = express.Router();

// POST /user
router.post('/user', async (req, res) => {
  const data = req.body;
  try {
    const user = await User.create(data);
    res.status(201).send({user});
  } catch (err) {
    res.status(500).send({error: 'Something went wrong'});
  }
});

// PUT /user/:id 
router.put('/user/:id', async (req, res) => {
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
router.delete('/user/:id', async (req, res) => {
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
router.get('/user/:id', async (req, res) => {
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

module.exports = router;
