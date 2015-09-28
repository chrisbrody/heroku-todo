// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'production',
  db: {
    host: 'my.production.mongo.host', //add mongolab host here
    port: 27105, //add mongolab port number here
    name: 'my-db', //add mongolab username here
    credentials: {
      username: 'username', //add mongolab username here, can use variable to hide username
      password: 'password' //add mongolab password here, can use variable to hide password
    }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});