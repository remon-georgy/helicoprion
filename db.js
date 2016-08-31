var movements = require('./data').movements;
var workouts = require('./data').workouts;
var r = require('rethinkdb');
var _ = require('lodash');
var movementsArray = _.values(movements);
var workoutsArray = _.values(workouts);
var p = r.connect({db: 'wodmeup'});

p.then(function(conn) {
  // Movements
  r.tableCreate('movements').run(conn, function() {
    r.table('movements').insert(movementsArray).run(conn, function(err, result) {
      console.log(err);
      console.log(result);
    });
  });
  
  // Workouts
  r.tableCreate('workouts').run(conn, function() {
    r.table('workouts').insert(workoutsArray).run(conn, function(err, result) {
      console.log(err);
      console.log(result);
    });
  });
}).error(function(err){
  console.log(err);
});