const express = require('express');

const tokenValidator = require('../midlewares/tokenMiddleware');
const userValidate = require('../midlewares/userValidator');
const { userValidator, userControllerGet, getUser } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/', userValidate, userValidator);
userRoute.get('/', tokenValidator, userControllerGet);
userRoute.get('/:id', tokenValidator, getUser);
module.exports = userRoute;