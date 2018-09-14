const yargs = require('yargs');

const { argv } = yargs
  .command('run', 'Run node server.', {
    port: {
      describe: 'Port to be used',
      alias: 'p',
    },
  })
  .help();

module.exports = argv;
