var r = require('rethinkdb');
var express = require('express');
var app = express();
var Model = require('./db');

app.use(function(req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/workouts', function(req, res) {
  var model = new Model((error) => {
    console.log('error:', error);
    model.getWorkouts((workouts) => {
      res.json(workouts);
    });
  });
});

app.listen(8800, function () {
  console.log('Wodmeup listening on port 8800!');
});