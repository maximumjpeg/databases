var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(err, results) {
      //TODO: handle err
      if (err) {
        console.log(err);
      } else {
        res.json(results);
        // console.log(results);
      }
    });
  },
  post: function (req, res) {
    var params = [ req.body['username'] ];
    // console.log('I am body', params);
    models.users.create(params, function(err, results) {
      // TODO: handle err
      if (err) {
        console.log(err);
      } else {
        res.status(201);
        res.json(results);
      }
    });
  }
};
