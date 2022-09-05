require('dotenv').config();

const jwt = require('jsonwebtoken');

const authToken = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createJwt = (payload) => jwt.sign(payload, process.env.JWT_SECRET, authToken);

const validaJwt = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { createJwt, validaJwt };
