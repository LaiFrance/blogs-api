const express = require('express');
const loginRoute = require('./loginRouters');
const userRoute = require('./userRouters');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/user', userRoute);

module.exports = router;