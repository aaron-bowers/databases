var db = require('../db');
let dbConnection = require('../db/index.js');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM users', (err, users) => {
      if (err) {
        callback(err);
      } else {
        callback(null, users);
      }
    });
  },
  create: function (username, callback) {
    db.query(
      `INSERT INTO users (username) VALUES ('${username}')`, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
  }
};
