var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let queryStr = 'SELECT messages.id, messages.messages FROM messages \
                    left outer join users on (messages.id_users = users.id_user) \
                    order by messages.id desc';
    db.query(queryStr, (err, message) => {
      if (err) {
        callback(err);
      } else {
        callback(null, message);
      }
    });
  }, // a function which produces all the messages
  create: function (postData, callback) {
    let queryStr = 'INSERT INTO messages (message_text, roomname, id_users) VALUES (?, ?, (select id from users where username = ? limit 1))';
    db.query(queryStr, postData, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
