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

module.exports = router;