var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate')

var ChatRoom = new Schema({
  _id: { type: Number },
  name: String,
  messages: [{
    message: String,
    username: String
  }]
});

ChatRoom.plugin(findOrCreate);

module.exports = mongoose.model('ChatRoom', ChatRoom);