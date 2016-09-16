const _ = require('lodash');
// var Model = require('./db');
// let model = new Model(() => {
//   model.getWorkouts('Annie', (wod) => {
//     console.log(wod);
//   });
// });

/**

*/

var wod = {'clusters':[{'rounds':5,'units':[{'movement':{'aspects':['reps','load'],'equipment':['barbell'],'id':'/movement/bench-press','name':'Bench Press'},'movementID':'/movement/bench-press','rx':{'load':'$BW','reps':'$MAX'}},{'movement':{'aspects':['reps','load'],'equipment':['pull-up-rig'],'id':'/movement/pull-up','name':'Pull up'},'movementID':'/movement/pull-up','rx':{'reps':'$MAX'}}]}],'equipments':['barbell','pull-up-rig'],'id':'d8dcfba6-b823-45fb-bb12-c1cd0b2d062e','movements':['/movement/bench-press','/movement/pull-up'],'name':'Lynne','scoring':{'aspect':'reps','type':'VariableWorkVariableTime'}}
;

wod.clusters.forEach((cluster) => {
  const rounds = cluster.rounds || 1;
  for (let r = 0; r < rounds; r++) {
    let reps = 1;
    if (cluster.repScheme) {
      let $round = r;
      reps = eval(cluster.repScheme);
    }
    cluster.units.forEach((unit) => {
      reps = _.get(unit, 'rx.reps') || reps;
      if (typeof unit.rx.reps == 'string' && unit.rx.reps == '$MAX') {
        reps = 1;
        // TODO reps = this.getProfileMaxReps(movement);
      }
      for (let rep = 0; rep < reps; rep++) {
        console.log(rep, unit.movement.name, unit.rx);
      }
    });
  }
});