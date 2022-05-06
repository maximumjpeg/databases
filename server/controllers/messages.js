var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      res.json(results);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body[text], req.body[username], req.body[roomname]];
    models.messages.create(params, function(err, results) {
      console.log(results);
      res.json(results);
    });
  } // a function which handles posting a message to the database
};

// call the models
// if get request send back data
// if post enter data into the database

var testpost = function (req, res) {
  var params = [req.body[text], req.body[username], req.body[roomname]];
  models.messages.create(params, function(err, results) {
    console.log(results);
    res.json(results);
  });
};