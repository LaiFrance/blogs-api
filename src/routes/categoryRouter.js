const express = require('express');
const categoryValidate = require('../midlewares/categoryMiddleware');
const ValidateToken = require('../midlewares/tokenMiddleware');
const { categoryControllersPost, 
    categoryControllersGet } = require('../controllers/categoryController');

const categoryRoute = express.Router();

categoryRoute.post('/', ValidateToken, categoryValidate, categoryControllersPost);
categoryRoute.get('/', ValidateToken, categoryControllersGet);

module.exports = categoryRoute;