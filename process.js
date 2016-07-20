var data = require('./data');

console.log(data);

var scoringSchema = {
  'id': 'Scoring',
  'type': 'object',
  
};

var workoutSchema = {
  'id': 'Workout',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string',
    },
    'units': {
      'type': 'array',
    },
    'scoring': {
      '$ref': '/Scoring'
    }
  }
};


data.wods.forEach(function(wod) {
  var comparison = compareJSON(wodSchema, wod);
  if (comparison !== true) {
    console.log(comparison);
    console.log(wod);
  }
});