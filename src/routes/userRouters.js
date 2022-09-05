const express = require('express');

const tokenValidator = require('../midlewares/tokenMiddleware');
const userValidate = require('../midlewares/userValidator');
const { userValidator, userControllerGet } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/', userValidate, userValidator);
userRoute.get('/', tokenValidator, userControllerGet);

module.exports = userRoute;