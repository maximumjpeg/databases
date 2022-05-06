var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      if (err) {
        console.log('There was an error with messages get call', err);
      } else {
        res.json(results);
        res.status(200);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // console.log(req.body);
    var params = [req.body['message'], req.body['username'], req.body['roomname']];
    models.messages.create(params, function(err, results) {
      if (err) {
        console.log(err);
      } else {
        // console.log('Passed the create test');
        res.status(201);
        res.json(results);
      }
    });
  } // a function which handles posting a message to the database
};
