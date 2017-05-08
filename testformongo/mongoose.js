var mongoose = require('mongoose');

var connection = mongoose.createConnection('mongodb://localhost:27017/mynode', function (err) {
  if (err) throw err;
});
var Schema = mongoose.Schema;
var schema = new Schema({
  name: String,
  passwd: String
});
connection.model('user',schema);//使用mongoose向数据库中添加的数据会自动在指定collection名称
                                //后加s并将其变成小写，这经常会造成在数据库中新建一个collection
var user = connection.model('user');

var u = new user({
  name: 'WANG2',
  passwd: 'abc',
});
u.save(function (err, ret) {
  if (err) throw err;
  console.log(ret);
});


user.find({},function (err, ret) {
  if (err) throw err;
  console.log(ret);
  connection.close();
});