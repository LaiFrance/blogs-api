const express = require('express');
const loginRoute = require('./loginRouters');
const userRoute = require('./userRouters');
const categoryRoute = require('./categoryRouter');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/user', userRoute);
router.use('/categories', categoryRoute);

module.exports = router;