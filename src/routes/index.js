const { Router } = require('express');
const services = require('./services');
const version = require('./version');

module.exports = () => {
  const router = Router();
  router.use('/api/v1/', services);
  router.use('/_version', version);
  router.all('*', (req, res) => {
    res.status(404);
    res.render('index', {
      title: 'App Services',
      message: 'Content not found',
    });
  });
  return router;
};
