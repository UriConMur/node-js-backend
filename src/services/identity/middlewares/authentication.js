const jwt = require('jsonwebtoken');

const { UsersModel } = require('../models/');

module.exports = (req, res, next) => {
  const token = req.cookies[process.env.AUTH_COOKIE_NAME];
  const secret = process.env.JWT_IDENTITY_SECRET;
  if (req.cookies[process.env.AUTH_COOKIE_NAME]) {
    const validUser = jwt.verify(token, secret);
    if (validUser) {
      UsersModel.findById(validUser.id)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch(() => res.status(401).send());
    }
  }
};
