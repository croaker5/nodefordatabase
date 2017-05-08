var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wj6171951',
  database: 'mynode'
});

connection.connect(function (err) {
  if (err) throw err;

  var value = 'zhang';
  var query =  connection.query('SELECT * FROM user where name="'+value+'"', function (err, ret) {
    if (err) throw err;

    console.log(ret);
    connection.end();
  });

  console.log(query.sql);
});
