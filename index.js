const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const thinkgear = require('node-thinkgear-sockets');
const client = thinkgear.createClient({ enableRawOutput: false });


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


client.on('data',function(data){
  console.log(data);

  io.emit('data received', {
    attention: data.eSense.attention,
    meditation: data.eSense.meditation,
    delta: data.eegPower.delta,
    theta: data.eegPower.theta,
    lowAlpha: data.eegPower.lowAlpha,
    highAlpha: data.eegPower.highAlpha,
    lowBeta: data.eegPower.lowBeta,
    highBeta: data.eegPower.highBeta,
    lowGamma: data.eegPower.lowGamma,
    highGamma: data.eegPower.highGamma,
 });
});


client.connect();

http.listen(3000, function(){
  console.log('listening on *:3000');
});
