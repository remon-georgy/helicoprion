/**
 * @flow
 */

const r = require('rethinkdb');
const express = require('express');
const app = express();
const Model = require('./db');

app.use(function(req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/workouts', function(req, res) {
  const model = new Model((error) => {
    if (error) {
      console.error('error:', error);
    }
    model.getWorkouts((workouts) => {
      res.json(workouts);
    });
  });
});

app.listen(8800, function () {
  console.log('Wodmeup listening on port 8800!');
});