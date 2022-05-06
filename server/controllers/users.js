var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(err, results) {
      //TODO: handle err
      res.json(results);
    });
  },
  post: function (req, res) {
    var params = [ req.body['username'] ];
    console.log('I am body', params);
    models.users.create(params, function(err, results) {
      // TODO: handle err
      res.status(201);
    });
  }
};
