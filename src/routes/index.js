const express = require('express');
const loginRoute = require('./loginRouters');
const userRoute = require('./userRouters');
const userMiddleware = require('../midlewares/index');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/user', userMiddleware, userRoute);

module.exports = router;