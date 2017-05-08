var redis = require('redis');

var client = redis.createClient(6379, '121.42.207.156');

client.set('abc', 123, function (err, ret) {
  if (err) throw err;
  console.log(ret);
  client.quit();
});

client.get('abc', function (err, ret) {
  if (err) throw err;
  console.log(ret);
  client.quit();
});
