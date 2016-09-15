/**
 * @flow
 */

var r = require('rethinkdb');

module.exports = class Model {
  constructor(cb) {
    var p = r.connect({db: 'wodmeup'});
    p.then((conn) => {
      this.conn = conn;
      cb();
    }).error(function(err) {
      console.error(err);
      cb(err);
    });
  }
  
  getWorkouts(cb) {
    r.db('wodmeup').table('workouts')
    // Cache movements
    .map(function(workout) {
      return workout.merge(function(workout) {
        return {'clusters': workout('clusters').map(function(cluster) {
          return cluster.merge(function(cluster){
            return {'units': cluster('units').map(function(unit) {
              return unit.merge({
                movement: r.db('wodmeup').table('movements').get(unit('movementID')),
                rx:{}
              });
            })};
          });
        })};
      });
    })
    // Cache equipments
    .map(function(workout) {
      return workout.merge({
        'movements': workout('clusters').concatMap(function(cluster) {
          return cluster('units').map(function(unit) {
            return unit('movementID');
          });
        }),
        'equipments': workout('clusters').concatMap(function(cluster) {
          return cluster('units').concatMap(function(unit) {
            return unit('movement')('equipment');
          });
        }).distinct()
      });
    })
    // Order
    .orderBy('name')
    .run(this.conn, (err, cursor) => {
      if (err) throw err;
      cursor.toArray((err, result) => {
        cb(result);
      });
    });
  }
};