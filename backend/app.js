'use strict';
/**
 * app.js 
 * 
 * Contains main API code.
 */
const express = require('express');
require('./orm/db_config');
const UserRouter = require('./routes/user');
const RecipeRouter = require('./routes/recipe');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(UserRouter);
app.use(RecipeRouter);


app.listen(3000, () => {
  console.log('Server up and running at port 3000')
  // console.log(process.env.NODE_ENV);
});
