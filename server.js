const express = require('express');
const app = express();
const Model = require('./db');
const equipments = require('./data').equipments;
const tags = require('./data').tags;

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

app.get('/sync', function(req, res) {
  const model = new Model((error) => {
    if (error) {
      console.error('error:', error);
    }
    let ret = {
      tags: tags,
      equipments: equipments,
    };
    model.getWorkouts((workouts) => {
      ret.workouts = workouts;
      model.getMovements((movements) => {
        ret.movements = movements;
        res.json(ret);
      });
    });
  });
});

app.listen(8800, function () {
  console.log('Wodmeup listening on port 8800!');
});