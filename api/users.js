var express = require('express');
var app = express();
var User = require('../models/user');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');
var bcrypt = require('bcryptjs');

app.set('superSecret', config.secret);

router.post('/login', function(req, response){
  User.findOne({
    username: req.body.username
  }, function(err, user){
    if (err) throw err;
    console.log(user);
    if (!user) {
      response.json({ success: false, message: 'Authentication failed. User not found', });
    } else if (user) {
      bcrypt.compare(req.body.password, user.password, function(err, res) {
        if (res === false) {
          response.json({ success: false, message: 'Incorrect password'})
        } else {
          var token  = jwt.sign(user, app.get('superSecret'), {
            expiresInMinutes: 1440
          });
          console.log(res);
          response.json({
            success: true,
            token: token,
            user: user
          });
        }
      });
    }
  });
});

router.post('/register', function(req, res) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash){
      var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      });
      user.save(function(err, user) {
        if (err) throw err;
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440
        });

        res.json({
          success: true,
          token: token,
          user: user
        });
      });
    });
  });
});

// router.use(function(req, res, next){
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];

//   if (token) {
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//       if (err) {
//         res.json({success: false, message: 'Authentication failed. Please login'});
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.status(403).send({
//       success: false,
//       message: 'No token provided'
//     });
//   }
// });

router.post('/follow/:showId', function(req, res) {
  var userId = req.body._id;
  var showId = req.params.showId;
  User.findByIdAndUpdate(
    userId,
    {$push: {'shows': showId}},
    {safe: true, new: true},
  function(err, user){
    res.json(user);
  })
});

router.post('/watch/:episodeId', function(req, res) {
  var userId = req.body._id;
  var episodeId = req.params.episodeId;
  User.findByIdAndUpdate(
    userId,
    {$push: {'episodes': episodeId}},
    {safe: true, new: true},
   function(err, user) {
    res.json(user);
  })
});

module.exports = router;