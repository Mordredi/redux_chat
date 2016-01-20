var express = require('express');
var app = express();
var router = express.Router();
var ChatRoom = require('../models/chatRooms');

router.post('/chat', function(req, res){
  ChatRoom.findOrCreate({_id: Number(req.body.id)}, {name: req.body.name}, function(err, chatRoom) {
    res.json({chatRoom: chatRoom})
  })
});

router.get('/chat/:id', function(req, res){
  var chatId = Number(req.params.id)
  ChatRoom.findOne({
    _id: chatId
  }, function(err, chatRoom){
    res.json({chatRoom: chatRoom})
  });
})

router.post('/chat/:id', function(req, res){
  var message = req.body.message;
  var username = req.body.username;
  var chatId = Number(req.params.id);
  ChatRoom.findByIdAndUpdate(
    chatId,
    {$push: {'messages': {message: message, username: username}}},
    {safe: true, new: true},
    function(err, chatRoom){
      res.json(chatRoom);
    })
})

module.exports = router;