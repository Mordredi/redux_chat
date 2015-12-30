var express = require('express');
var app = express();
var http = require('http').Server(app);
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api/user', function(req, res){
  res.json({hello: 'world'});
})

http.listen(3000, function(){
  console.log('listening on port 3000');
});