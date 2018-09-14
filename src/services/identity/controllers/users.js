const { UsersModel } = require('../models');
const {
  hasRequiredValues,
  getUserAttributes,
} = require('../utils/users');

class User {
  static getMe(req, res) {
    res.status(200).send(req.user);
  }

  static deleteMyToken(req, res) {
    const { id } = req.user;
    UsersModel.removeTokenById(id)
      .then((user) => {
        res.clearCookie(process.env.AUTH_COOKIE_NAME);
        res.status(204).send(user);
      })
      .catch(err => res.status(401).send(err));
  }

  static login(req, res) {
    const { body } = req;
    if (hasRequiredValues(body, 'login')) {
      const { email, password } = req.body;
      UsersModel.findByCredentials(email, password)
        .then((loggedUser) => {
          res.cookie(process.env.AUTH_COOKIE_NAME, loggedUser.token, { httpOnly: true });
          res.status(200).send(getUserAttributes(loggedUser));
        })
        .catch((err) => {
          res.status(401).send({ err });
        });
    } else {
      res.status(400).send('Missing credentials');
    }
  }

  static post(req, res) {
    const { body } = req;
    if (hasRequiredValues(body, 'post')) {
      UsersModel.create(body)
        .then((user) => {
          res.cookie(process.env.AUTH_COOKIE_NAME, user.token, { httpOnly: true });
          res.status(201).send(getUserAttributes(user));
        })
        .catch((err) => {
          res.status(400).send({ err });
        });
    } else {
      res.status(400).send('Missing fields');
    }
  }
}

module.exports = User;
