var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'mynode',
  password: '123456',
  database: 'mynode'
});

connection.connect(function (err) {
  if (err) throw err;

  var value = 'zhang" OR "1"="1';
  var query =  connection.query('SELECT * FROM user where name=?',value, function (err, ret) {
    if (err) throw err;//使用这种方式避免了sql注入的情况，？是占位符，使用时函数会对传到？位置的参数进行解析，由于这里
                      //name是一个字符串，所以会自动对""''等加入\进行转义，从而避免了sql注入的情况

    console.log(ret);
    connection.end();
  });

  console.log(query.sql);
});