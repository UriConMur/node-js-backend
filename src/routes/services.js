const { Router } = require('express');
const {
  Identity,
} = require('../services');

const router = Router();

router.use('/identity', Identity);

module.exports = router;
