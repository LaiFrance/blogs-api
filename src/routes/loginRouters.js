const express = require('express');

const loginControllers = require('../controllers/loginController');

const loginRoute = express.Router();

loginRoute.post('/', loginControllers);

module.exports = loginRoute;