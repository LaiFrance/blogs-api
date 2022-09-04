const { User } = require('../database/models');
const tokenGenerator = require('../jwt');

const login = async (email, password) => {
  const userFound = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'password', 'image'],
    where: { email, password },
  });
  const token = await tokenGenerator(JSON.stringify(userFound));

  if (!userFound) {
    return new Error('Invalid fields');
  }
  return token;
};

module.exports = login;