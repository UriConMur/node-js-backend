require('dotenv').config();

module.exports = {
  database: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    maxpool: process.env.DB_MAX_POOL || 25,
    minpool: process.env.DB_MIN_POOL || 5,
    dialect: 'mysql',
  },
  dev: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    maxpool: process.env.DB_MAX_POOL || 25,
    minpool: process.env.DB_MIN_POOL || 5,
    dialect: 'mysql',
  },
};
