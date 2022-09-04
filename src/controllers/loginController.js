const { createJwt } = require('../jwt/index');
const { User } = require('../database/models');

const loginValidator = async (_request, response) => {
  const { email, password } = _request.body;

  if (!email || !password) {
    return response.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'password', 'image'],
    where: { email, password },
  });

  if (!user) {
    return response.status(400).json({ message: 'Invalid fields' });
  }
  const token = createJwt({ id: user.id,
     displayName: user.displayName,
     email: user.email, 
    image: user.image });
    response.status(200).json({ token });
};

module.exports = loginValidator;