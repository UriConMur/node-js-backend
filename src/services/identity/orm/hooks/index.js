const bcrypt = require('bcryptjs');

module.exports = {
  beforeCreate: user => (
    new Promise((resolve, reject) => {
      const currentUser = user;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(currentUser.password, salt, (error, hash) => {
          if (hash) {
            currentUser.password = hash;
            resolve(currentUser);
          } else {
            reject();
          }
        });
      });
    })
  ),
};
