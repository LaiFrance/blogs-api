const userValidate = (req, res, next) => {
    const { displayName, email, password } = req.body;
  
    const authEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  
    const nameError = '"displayName" length must be at least 8 characters long';
    const emailError = '"email" must be a valid email';
    const passwordError = '"password" length must be at least 6 characters long';
  
    if (displayName.length < 8) {
      return res.status(400)
      .json({ message: nameError });
    }
  
    if (!authEmail.test(email)) {
      return res.status(400)
      .json({ message: emailError });
    }
  
    if (password.length < 6) {
      return res.status(400)
      .json({ message: passwordError }); 
  }
    next();
  };
  
  module.exports = userValidate;