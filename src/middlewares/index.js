const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { Router } = require('express');

module.exports = () => {
  const router = Router();
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(cookieParser());
  return router;
};
