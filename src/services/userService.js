const { User } = require('../database/models');

const findAll = () =>
  User.findAll({
    attributes: {
      exclude: ['password'],
    },
});

module.exports = { findAll };