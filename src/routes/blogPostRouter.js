const express = require('express');
const ValidateToken = require('../midlewares/tokenMiddleware');
const getAllblogPost = require('../controllers/blogpostController');

const blogPost = express.Router();

blogPost.get('/', ValidateToken, getAllblogPost);

module.exports = blogPost;