const { Router } = require('express');

const router = Router();
const packJson = require('./../../package.json');

router.get('/', (req, res) => {
  const data = {
    app: packJson.name || 'Node App',
    sha: process.env.COMMIT || '',
    stack: process.env.NODE_ENV || '',
    version: packJson.version || '',
  };
  res.status(200).json(data);
});

module.exports = router;
