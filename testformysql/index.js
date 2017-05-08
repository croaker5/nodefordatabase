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




  connection.connect(function (err) {
          if (err) throw err;
          var username = 'zhang';
          md5password = '123';
          var query =  connection.query('insert into users values("' + username +' "," '+  md5password +'")', function (err, ret) {
          if (err) throw err;
          console.log(ret);
          connection.end();
  });

  console.log(query.sql);
});

   connection.connect(function (err) {
          if (err) throw err;
          var query =  connection.query('insert into notes values("' + req.body.title +' "," '+
            req.session.user.username +' "," '+req.body.tag+' "," '+ req.body.content +'")', function (err, ret) {
          if (err) throw err;
          console.log(ret);
          connection.end();
  });

  console.log(query.sql);
});

connection.connect(function (err) {
  if (err) throw err;

  var query =  connection.query('SELECT * FROM user where name="'+username+'"', function (err, ret) {
    if (err) {
      console.log(err);
      return res.render('register',{
        user:req.session.user,
        username:username,
        password:password,
        passwordRepeat:passwordRepeat,
        err:'内部错误，请重试！',
        title:'注册'
      });
    };
    if(ret){
    console.log('用户名已存在！');
      return res.render('register',{
        user:req.session.user,
        username:username,
        password:password,
        passwordRepeat:passwordRepeat,
        err:'该用户名已被注册！',
        title:'注册'
      });
    }
    connection.end();
  });
       
console.log(query.sql);
});

    var md5=crypto.createHash('md5'),
    md5password=md5.update(password).digest('hex');
    console.log(ret);

connection.connect(function (err) {
          if (err) throw err;
          var query =  connection.query('insert into users values("' + username +' "," '+  md5password +'")', function (err, ret) {
          if (err) throw err;
          console.log(ret);
          connection.end();
  });

  console.log(query.sql);
});
console.log('用户'+username+'注册成功');
      return res.redirect('/login');
