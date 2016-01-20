var express = require('express');
var app = express();
var http = require('http').Server(app);
var favicon = require('serve-favicon');
var logger = require('morgan');
var io = require('socket.io')(http);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./api/users');
var chatRooms = require('./api/chatRooms')
var User = require('./models/user');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(users);
app.use(chatRooms);


mongoose.connect('mongodb://localhost/react_tv_chat');

io.on('connection', function(socket) {
  socket.on('join room', function(data){
    var room = data.id;
    socket.join(room)
  });
  socket.on('leave room', function(data){
    var room = data.id;
    socket.leave(room)
  })
  socket.on('send message', function(data){
    var room = data.id;
    io.to(room).broadcast('message sent')
  })
})

http.listen(3000, function(){
  console.log('listening on port 3000');
});