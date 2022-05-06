var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        // console.log(err);
        let statusCode = 404;
        res.writeHead(statusCode);
      } else {
        let statusCode = 200;
        res.writeHead(statusCode); // not needed using .json below
        res.write(JSON.stringify(data)); // switch out with res.json(data);
      }
      res.end();
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // console.log(req.body);
    // let postData = [req.body.username, req.body.message];
    models.messages.create(req.body.message, (err, data) => {
      if (err) {
        // console.log(err);
      } else {
        // console.log(data);
        res.writeHead(200);
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
