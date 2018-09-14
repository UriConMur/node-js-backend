require('babel-register');
const express = require('express');
const path = require('path');
const config = require('config');
const cors = require('cors');
const yargs = require('./utils/yargs');
const logger = require('./utils/logger');

const routes = require('./routes');
const middleware = require('./middlewares');

const port = yargs.port || config.get('PORT');
const environment = config.get('NODE_ENV');

const app = express();

app.disable('x-powered-by');

app.set('baseUrl', '/');
app.set('port', port);
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './views'));

app.use(cors());
app.use(middleware());
app.use(routes());

app.listen(app.get('port'), () => {
  logger.info(`Server running on ${environment} in port ${port}`);
});

module.exports = app;
