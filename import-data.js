const PouchDB = require('pouchdb');
const _ = require('lodash');

let movements = require('./data').movements;
let equipmentsArray = require('./data').equipments;
let tagsArray = require('./data').tags;
let workoutsArray = require('./data').workouts;

// TODO specify backend.
const db = PouchDB('wodmeup');

let movementsArray = _.values(movements);
movementsArray = movementsArray.map((movement) => {
  movement.type = 'movement';
  return movement;
});
tagsArray = tagsArray.map((tag) => {
  tag.type = 'tag';
  return tag;
});
equipmentsArray = equipmentsArray.map((equipment) => {
  equipment.type = 'equipment';
  return equipment;
});
workoutsArray = workoutsArray.map((workout) => {
  workout.type = 'workout';
  return workout;
});

db.bulkDocs([...equipmentsArray, ...tagsArray, ...movementsArray, ...workoutsArray], (err, res) => {
  console.log(err, res);
});