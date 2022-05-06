var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'select * from users';
    db.connection.query(queryString, function(err, results) {
      callback(results);
    });
  },
  create: function (params, callback) {
    var queryString = 'insert into users(username) values (?)';
    // console.log('this is db', db);
    db.connection.query(queryString, params, function(err, results) {
      console.log('the fridge gave me back result', results);
      callback(results);
    });
  }
};

