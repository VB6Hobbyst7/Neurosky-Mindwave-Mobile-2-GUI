const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


setInterval(() => {
  io.emit('data received', {
    attention: Math.random(),
    meditation: Math.random(),
  });
}, 1000);


http.listen(3000, function(){
  console.log('listening on *:3000');
});
