var db = require('../db');

module.exports = {
  getAll: function (callback) {

    var queryStr = 'select messages.id, messages.text, messages.roomname, users.username from messages \
    left outer join users on (messages.username = users.id) \
    order by messages.id desc';
    db.connection.query(queryStr, function(err, results) {
      if (err) {
        console.log('Error in getAll messages.js', err);
        callback(err);
      } else {
        // console.log('Results in getAll messages', results);
        callback(null, results);
      }

    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryStr = 'insert into messages(text, username, roomname) \
    values (?, (select id from users where username = ? limit 1), ?)';
    db.connection.query(queryStr, params, function(err, results) {
      if (err) {
        callback(err);
      } else {
        // console.log('This is the queryStr', queryStr);
        // console.log('This is the params', params);
        callback(null, results);
      }
    });
  }

};
