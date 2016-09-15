/**
 * @flow
 */

var data = require('./data');
var Model = require('./db');

var equipmentSchema = {
  'id': '/Equipment',
  'enum': ['bodyweight', 'barbell', 'dumbell', 'kettlebell', 'jump-rope', 'rope', 'abmat', 'rings', 'pull-up-rig', 'box', 'bench', 'rower', 'sled', 'yoke', 'tire', 'parallettes', 'plates', 'rack', 'elastic-bands', 'medicine-ball', 'weighted-vest', 'ghd', 'assault-bike']
};


var aspectSchema = {
  'id': '/Aspect',
  'enum': ['load', 'distance', 'height', 'reps', 'calories', 'damping', 'rounds']
};

var movementSchema = {
  'id': '/Movement',
  'type': 'object',
  'required': ['id', 'name', 'aspects'],
  'additionalProperties': false,
  'properties': {
    'id': {'type': 'string'},
    'name': {'type': 'string'},
    'parent': {'parent': 'Object'},
    'aspects': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Aspect'}
    },
    'equipment': {
      'type': 'array',
      'items': {'$ref': '/Equipment'}
    }
  }
};

// @todo rounds
var unitSchema = {
  'id': '/Unit',
  'required': ['rx'],
  'additionalProperties': false,
  'properties': {
    'movement': {$ref: '/Movement'},
    'movementID': {type: 'string'},
    'rx': {
      'type': 'object',
    }
  }
};

var ClusterSchema = {
  'id': '/Cluster',
  'required': ['units'],
  'additionalProperties': false,
  'properties': {
    'name': {'type': 'string'},
    'rounds': {'type': 'integer', 'default': 1},
    'restBetweenRounds': {'type': 'integer'},
    'repScheme': {'enum': [
      '50-10*$round', // 50-40-30-20-10
      '21-$round*6', // 21-15-9
      '15-$round*3', // 15-12-9
      '10-$round', // 10-9-8-7-6-5-4-3-2-1
      '9-$round*2', // 9-7-5
    ]},
    'units': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Unit'}
    }
  }
};

var FixedWorkVariableTimeSchema = {
  'id': '/FixedWorkVariableTime',
  'required': ['type'],
  'additionalProperties': false,
  'properties': {
    'type': {'enum': ['FixedWorkVariableTime']},
    'name': {'type': 'string'},
  }
};

var FixedTimeVariableWorkSchema = {
  'id': '/FixedTimeVariableWork',
  'required': ['timeCap', 'aspect', 'type'],
  'additionalProperties': false,
  'properties': {
    'type': {'enum': ['FixedTimeVariableWork']},
    'name': {'type': 'string'},
    'aspect': {'$ref': '/Aspect'},
    'timeCap': {'type': 'integer'},
    'restBetweenRounds': {'type': 'integer'}
  }
};

var VariableWorkVariableTimeSchema = {
  'id': '/VariableWorkVariableTime',
  'required': ['aspect', 'type'],
  'additionalProperties': false,
  'properties': {
    'type': {'enum': ['VariableWorkVariableTime']},
    'rounds': {'type': 'integer', 'default': 1},
    'name': {'type': 'string'},
    'aspect': {'$ref': '/Aspect'},
  }
};
var FixedIntervalSchema = {
  'id': '/FixedInterval',
  'required': ['intervalWork', 'intervals'],
  'additionalProperties': false,
  'properties': {
    'name': {'type': 'string'},
    'type': {'enum': ['FixedInterval']},
    'intervals': {'type': 'integer'},
    'intervalWork': {'type': 'integer'},
    'intervalRest': {'type': 'integer'}
  }
};


var workoutSchema = {
  'id': '/Workout',
  'type': 'object',
  'required': ['name', 'scoring', 'clusters'],
  'additionalProperties': false,
  'properties': {
    'id': {'type': 'string'},
    'name': {'type': 'string'},
    'scoring': {
      'type': 'object',
      'oneOf': [
        {'$ref': '/FixedWorkVariableTime'},
        {'$ref': '/FixedTimeVariableWork'},
        {'$ref': '/VariableWorkVariableTime'},
        {'$ref': '/FixedInterval'},
      ]
    },
    'clusters': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Cluster'}
    },
    'equipments': {type: 'array'},
    'movements': {type: 'array'},
  }
};

var Validator = require('jsonschema').Validator;
var v = new Validator();
v.addSchema(unitSchema, '/Unit');
v.addSchema(aspectSchema, '/Aspect');
v.addSchema(movementSchema, '/Movement');
v.addSchema(equipmentSchema, '/Equipment');
v.addSchema(ClusterSchema, '/Cluster');
v.addSchema(FixedWorkVariableTimeSchema, '/FixedWorkVariableTime');
v.addSchema(FixedTimeVariableWorkSchema, '/FixedTimeVariableWork');
v.addSchema(VariableWorkVariableTimeSchema, '/VariableWorkVariableTime');
v.addSchema(FixedIntervalSchema, '/FixedInterval');

var model = new Model((error) => {
  model.getWorkouts((workouts) => {
    workouts.forEach(function(workout) {
      var ret = v.validate(workout, workoutSchema);
      if (ret.errors.length > 0) {
        console.log(ret.errors);
        console.log(workout);
        console.log('==============================');
      }
    });
  });
});