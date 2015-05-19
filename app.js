// Module dependencies go here
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// Use default 'views' directory name
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.send('Hello world');
});

http.createServer(app).listen(8888, function() {
  console.log('Express server listening at http://localhost:8888');
});