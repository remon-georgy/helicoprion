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
    'notes': {type: 'array'},
    'rx': {
      'type': 'object',
    }
  }
};


var TimingSchema = {
  'id': '/Timing',
  'required': ['type'],
  'properties': {
    'type': {'enum': ['rounds']}
  }
};

var FITimingSchema = {
  'id': '/FITiming',
  'required': ['type'],
  'additionalProperties': false,
  'properties': {
    type: {'enum': ['FixedInterval']},
    count: {type: 'integer'},
    deathBy: {type: 'boolean', 'default': false},
    length: {type: 'integer', 'default':60},
    rest: {type: 'integer', 'default':0},
    work: {type: 'integer'}
  }
};

var AMRAPTimingSchema = {
  'id': '/AMRAPTiming',
  'required': ['type', 'timeCap'],
  'additionalProperties': false,
  'properties': {
    type: {'enum': ['AMRAP']},
    timeCap: {'type': 'integer'}
  }
};

var TRTimingSchema = {
  'id': '/TRTiming',
  'required': ['type'],
  'additionalProperties': false,
  'properties': {
    type: {'enum': ['TimedRounds']},
    rounds: {type: 'integer'},
    length: {type: 'integer', 'default':60},
  }
};

var RepSchemeExprSchema = {
  id: '/RepSchemeExpr',
  'enum': [
    '50-10*$round', // 50-40-30-20-10
    '21-$round*6', // 21-15-9
    '15-$round*3', // 15-12-9
    '10-$round', // 10-9-8-7-6-5-4-3-2-1
    '9-$round*2', // 9-7-5
  ]
};

var RepSchemeArraySchema = {
  id: '/RepSchemeArray',
  type: 'array',
  'minItems': 1,
};

var ClusterSchema = {
  'id': '/Cluster',
  'required': ['units'],
  'additionalProperties': false,
  'properties': {
    'name': {'type': 'string'},
    'rounds': {'type': 'integer', 'default': 1},
    'restBetweenRounds': {'type': 'integer'},
    'notes': {type: 'array'},
    'timing': {
      'type': 'object',
      'oneOf': [
        {'$ref': '/FITiming'},
        {'$ref': '/AMRAPTiming'},
        {'$ref': '/TRTiming'},
      ]
    },
    // TODO change this into a regex that parses tokens.
    'repScheme': {
      'oneOf': [
        {'$ref': '/RepSchemeExpr'},
        {'$ref': '/RepSchemeArray'},
      ]
    },
    'units': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Unit'}
    }
  }
};

var workoutSchema = {
  'id': '/Workout',
  'type': 'object',
  'required': ['name', 'scoring', 'clusters', 'type', 'scoring'],
  'additionalProperties': false,
  'properties': {
    'id': {'type': 'string'},
    'name': {'type': 'string'},
    'scoring': {
      'enum': ['time', 'load', 'reps', 'rounds']
    },
    'type': {
      'enum': ['FixedInterval', 'FixedWorkVariableTime', 'FixedTimeVariableWork', 'VariableWorkVariableTime']
    },
    'clusters': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Cluster'}
    },
    'equipments': {type: 'array'},
    'movements': {type: 'array'},
    'notes': {type: 'array'},
  }
};

var Validator = require('jsonschema').Validator;
var v = new Validator();
v.addSchema(unitSchema, '/Unit');
v.addSchema(aspectSchema, '/Aspect');
v.addSchema(movementSchema, '/Movement');
v.addSchema(equipmentSchema, '/Equipment');
v.addSchema(ClusterSchema, '/Cluster');
v.addSchema(FITimingSchema, '/FITiming');
v.addSchema(AMRAPTimingSchema, '/AMRAPTiming');
v.addSchema(TRTimingSchema, '/TRTiming');
v.addSchema(RepSchemeExprSchema, '/RepSchemeExpr');
v.addSchema(RepSchemeArraySchema, '/RepSchemeArray');

var model = new Model((error) => {
  if (error)
    throw new Error(error.message);
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