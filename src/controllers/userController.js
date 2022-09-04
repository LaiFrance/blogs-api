const { User } = require('../database/models');
const { createJwt } = require('../jwt/index');

const userValidator = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) return res.status(409).json({ message: 'User already registered' });

    await User.create({ displayName, email, password, image });

    const token = createJwt({ email, password });

    return res.status(201).json({ token });
};

module.exports = userValidator;