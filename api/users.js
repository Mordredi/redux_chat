var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.post('/login', passport.authenticate('local'), function(req, res){
  console.log(req.user);
  res.json({user: req.user});
});

router.post('/register', function(req, res) {
  User.register(new User( {username: req.body.username}), req.body.password, function(err, user) {
    passport.authenticate('local')(req, res, function() {
      res.json({user: req.user})
    })
  })
})

router.post('/user/:id/follow/:showId', function(req, res) {
  var userId = req.params.id;
  var showId = req.params.showId;
  console.log(userId, showId);

  // User.findByIdAndUpdate(
  //   req.params.id
  // )
})

module.exports = router;