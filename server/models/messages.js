var db = require('../db');

module.exports = {
  getAll: function (callback) {

    var queryStr = 'select messages.id, messages.text, messages.roomname, users.username from messages \
    left outer join users on (messages.userid = users.id) \
    order by messages.id desc';
    db.connection.query(queryStr, function(err, results) {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log('Results in getAll messages', results);
        callback(results);
      }

    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryStr = 'insert into messages(text, userid, roomname) \
    values (?, (select id from users where username = ? limit 1), ?)';
    db.connection.query(queryStr, function(err, results) {
      console.log('Results in Create messages', results);
      callback(results);
    });
  }

};
