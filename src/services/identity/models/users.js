const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Database = require('../orm');
const { publicUserAttributes } = require('../utils/users');

const {
  User,
} = Database.schema;

const authenticate = (user, password) => (
  new Promise((resolve, reject) => {
    bcrypt.compare(password, user.dataValues.password, (err, equal) => {
      if (equal) {
        return resolve(user);
      }
      return reject();
    });
  })
);

const createToken = user => (
  new Promise((resolve, reject) => {
    const tokenizedUser = user;
    const access = 'auth';
    const secretKey = process.env.JWT_IDENTITY_SECRET;
    const token = jwt.sign({
      id: user.id,
      access,
    }, secretKey).toString();
    tokenizedUser.token = token;
    tokenizedUser.updateAttributes({ token: tokenizedUser.token })
      .then(updatedUser => resolve(updatedUser))
      .catch(err => reject(err));
  })
);

class Users {
  static findByCredentials(email, password) {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { email } })
        .then(user => authenticate(user, password))
        .then(authenticatedUser => createToken(authenticatedUser))
        .then(loggedUser => resolve(loggedUser))
        .catch(err => reject(err));
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: { id },
        attributes: publicUserAttributes,
      })
        .then(user => resolve(user))
        .catch(err => reject(err));
    });
  }

  static removeTokenById(id) {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { id } })
        .then(user => user.updateAttributes({ token: null }))
        .then(updatedUser => resolve(updatedUser))
        .catch(err => reject(err));
    });
  }

  static create(userInfo) {
    return new Promise((resolve, reject) => {
      User.create(userInfo)
        .then(user => createToken(user))
        .then(createdUser => resolve(createdUser))
        .catch(err => reject(err));
    });
  }
}

module.exports = Users;
