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
    let queryStr = 'INSERT INTO users (username) VALUES (?)';
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
