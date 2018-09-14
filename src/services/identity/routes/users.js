const { Router } = require('express');
const { UsersController } = require('../controllers');
const Authentication = require('../middlewares/authentication');

const user = Router();
const users = Router();

users.post('/', UsersController.post);
users.post('/login', UsersController.login);

user.get('/me', Authentication, UsersController.getMe);
user.delete('/me/token', Authentication, UsersController.deleteMyToken);

module.exports = { single: user, collection: users };
