const Sequelize = require('sequelize');
const config = require('config');
const configDB = require('../config/database');
const logger = require('../utils/logger');

const environment = config.get('NODE_ENV');

const {
  database,
  dialect,
  host,
  maxpool,
  minpool,
  password,
  port,
  username,
} = configDB[environment];

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  define: {
    paranoid: true,
    rejectOnEmpty: false,
  },
  operatorsAliases: false,
  pool: {
    max: maxpool,
    min: minpool,
    acquire: 30000,
    idle: 10000,
  },
});

const Identity = {
  User: sequelize.import('./models/user'),
};

Object.keys(Identity).forEach((model) => {
  if (Identity[model].associate) {
    Identity[model].associate(Identity);
  }
});

const Database = {
  authenticate() {
    sequelize.authenticate()
      .then(() => logger.info('Succesfully authenticated with DB'))
      .catch(err => logger.error(`Error with DB Connection ${err}`));
  },
  sync() {
    sequelize.sync()
      .then(() => logger.info('Succesfully sync with DB'))
      .catch(err => logger.error(`Error with Sync DB Connection ${err}`));
  },
  schema: Identity,
};

module.exports = Database;
