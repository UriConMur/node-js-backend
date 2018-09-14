const config = require('config');
const { createLogger, format, transports } = require('winston');

const environment = config.get('NODE_ENV');
const logLevel = config.get('LOGGER.LEVEL');

const getLogFormat = (info) => {
  const details = {
    environment,
    ...info,
  };
  delete details.level;
  return (
    `${info.level}: ${JSON.stringify(details, null, 2)}`
  );
};

const consoleTransport = new (transports.Console)({
  format: format.combine(
    format.colorize(),
    format.json(),
    format.timestamp(),
    format.printf(getLogFormat),
  ),
  level: logLevel,
});

const fileTransport = new (transports.File)({
  format: format.combine(
    format.timestamp(),
    format.printf(getLogFormat),
  ),
  filename: config.get('LOGGER.FILE_NAME'),
  level: logLevel,
});

const transportList = [];
switch (environment) {
  case 'development':
    transportList.push(consoleTransport);
    transportList.push(fileTransport);
    break;
  case 'production':
  case 'testing':
    transportList.push(fileTransport);
    break;
  default:
    transportList.push(consoleTransport);
}

const logger = createLogger({ transports: transportList });
logger.environment = environment;
module.exports = logger;
