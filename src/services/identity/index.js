const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');


const service = express();
service.disable('x-powered-by');
service.set('baseUrl', '/');
service.use(middlewares());
service.use(routes());

module.exports = service;
