const express = require('express');

const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/', userController);

module.exports = userRoute;