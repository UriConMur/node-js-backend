module.exports = {
  up: queryInterface => (
    queryInterface.bulkInsert('users', [{
      id: 'e6806440-b24d-11e8-8408-593a699cfe00',
      username: 'admin',
      email: 'admin@dev.com',
      password: '$2a$10$jRsNUoufMRCHQZ.X7Zp/VuZNMB6ecX3cbqoDsmYS2iF62jwqgV45q',
      id_creator: 'e6806440-b24d-11e8-8408-593a699cfe00',
    },
    {
      id: '886d0c80-b178-11e8-8fe4-03d0d89a0395',
      username: 'vender',
      email: 'vender@dev.com',
      password: '$2a$10$jRsNUoufMRCHQZ.X7Zp/VuZNMB6ecX3cbqoDsmYS2iF62jwqgV45q',
      id_creator: 'e6806440-b24d-11e8-8408-593a699cfe00',
    }], {})
  ),

  down: queryInterface => (
    queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {})
      .then(queryInterface.bulkDelete('users', null, {}))
      .then(queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {}))
  ),
};
