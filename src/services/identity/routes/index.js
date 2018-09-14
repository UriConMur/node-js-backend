const { Router } = require('express');
const userRoutes = require('./users');

module.exports = () => {
  const router = Router();
  router.use('/users', userRoutes.collection);
  router.use('/user', userRoutes.single);
  router.all('*', (req, res) => {
    res.status(404).send({ message: 'Not found' });
  });
  return router;
};
