var data = require('./data');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/helicoprion';
MongoClient.connect(url, function(err, db) {
  var workoutsCollection = db.collection('workouts');
  workoutsCollection.insertMany(data.workouts, function(err, result) {
    console.log(err);
    console.log(result);
  });
  
  db.close();
});