const { User } = require('../database/models');
const { createJwt } = require('../jwt/index');
const userServices = require('../services/userService');

const userValidator = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) return res.status(409).json({ message: 'User already registered' });

    await User.create({ displayName, email, password, image });

    const token = createJwt({ email, password });

    return res.status(201).json({ token });
};

const userControllerGet = async (req, res) => {
  try {
    const user = await userServices.findAll();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(
    {
      id: user.id,
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    },
  );
};

module.exports = { 
userValidator,
userControllerGet,
getUser,
};