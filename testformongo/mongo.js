var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/mynode';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  console.log("Connected correctly to server");

  db.collection('user').save({name:'wang',passwd:'12'},function(err,ret){
        if(err) throw err;
        console.log(ret);
  });
});

