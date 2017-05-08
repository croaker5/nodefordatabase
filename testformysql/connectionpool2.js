var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 3,
  host: 'localhost',
  user: 'root',
  password: 'wj6171951',
  database: 'mynode'
});

function startQuery(){
  pool.getConnection(function (err, connection) {
    if (err) throw err;

    var value = 'jia';
    var query = connection.query('SELECT * FROM user WHERE name=?', value, function (err, ret) {
      if (err) throw err;

      console.log(ret);
      setTimeout(function () {
        connection.release();  //设置了连接释放时长
        }, 1000);
    });
    console.log(query.sql);
  });
}

for (var i = 0; i < 10; i++) {
  startQuery();
}
