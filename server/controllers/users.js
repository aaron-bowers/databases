var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log(req);
    models.users.getAll((err, users) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.writeHead(200);
        res.write(JSON.stringify(users));
      }
    });
  },
  post: function (req, res) {
    console.log(req.body.username);
    let username = req.body.username;
    models.users.create(username, (err, newUser) => {
      if (err) {
        console.log(err);
      } else {
        console.log(newUser);
      }
    });
    res.writeHead(200);
    res.end();
  }
};
