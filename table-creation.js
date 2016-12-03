/**
 * @flow
 */

const movements = require('./data').movements;
const workouts = require('./data').workouts;
const equipments = require('./data').equipments;
const tags = require('./data').tags;

const r = require('rethinkdb');
const _ = require('lodash');
const movementsArray = _.values(movements);
const workoutsArray = _.values(workouts);
const p = r.connect();

p.then(function(conn) {
  r.dbDrop('wodmeup').run(conn, function() {
    r.dbCreate('wodmeup').run(conn, function() {
      conn.use('wodmeup');

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

      r.tableCreate('equipments').run(conn, function() {
        r.table('equipments').insert(equipments).run(conn, function(err, result) {
          console.log(err);
          console.log(result);
        });
      });

      r.tableCreate('tags').run(conn, function() {
        r.table('tags').insert(tags).run(conn, function(err, result) {
          console.log(err);
          console.log(result);
        });
      });
      return;
    });
  });
  
}).error(function(err){
  console.log(err);
});