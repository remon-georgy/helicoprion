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
  'enum': [
    // Non-iterable
    'load', 'height', 'damping',
    // Iterable
    'distance', 'reps', 'calories', 'rounds', 'time', 'intervals']
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

var NoTimingSchema = {
  'id': '/NoTiming',
  'required': ['type'],
  'additionalProperties': false,
  'properties': {
    type: {'enum': ['NoTiming']},
  }
};

var FixedIntervalsTimingSchema = {
  'id': '/FixedIntervalsTiming',
  'required': ['type'],
  'additionalProperties': false,
  'properties': {
    name: {type: 'string'},
    type: {'enum': ['FixedIntervals']},
    intervals: {type: 'integer'},
    deathBy: {type: 'boolean', 'default': false},
    time: {type: 'integer', 'default':60},
    rest: {type: 'integer', 'default':0},
    work: {type: 'integer'}
  }
};

var CappedTimingSchema = {
  'id': '/CappedTiming',
  'required': ['type', 'timeCap'],
  'additionalProperties': false,
  'properties': {
    name: {type: 'string'},
    type: {'enum': ['Capped']},
    timeCap: {'type': 'integer'},
    repeatable: {'type': 'boolean', 'default': false}
  }
};

var TimedUnitsTimingSchema = {
  'id': '/TimedUnitsTiming',
  'required': ['type'],
  'additionalProperties': false,
  'properties': {
    name: {type: 'string'},
    type: {'enum': ['TimedUnits']},
    rounds: {type: 'integer'},
    time: {type: 'integer', 'default':60},
  }
};



var RepSchemeExprSchema = {
  id: '/RepSchemeExpr',
  'enum': [
    '50-10*$round', // 50-40-30-20-10
    '27-6*$round', // 27-21-15-9
    '21-$round*6', // 21-15-9
    '15-$round*3', // 15-12-9
    '10-$round', // 10-9-8-7-6-5-4-3-2-1
    '9-$round*2', // 9-7-5
    '($round+3)*3', // 3-6-9...etc
    '10+$round*2', // 10-12-14..etc
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
        {'$ref': '/FixedIntervalsTiming'},
        {'$ref': '/CappedTiming'},
        {'$ref': '/TimedUnitsTiming'},
        {'$ref': '/NoTiming'},
      ],
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
    'weighted': {type: ['array', 'integer']},
    'scoring': {'$ref': '/Aspect'},
    'type': {
      'enum': ['FixedWorkFixedTime', 'FixedWorkVariableTime', 'FixedTimeVariableWork', 'VariableWorkVariableTime']
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
v.addSchema(FixedIntervalsTimingSchema, '/FixedIntervalsTiming');
v.addSchema(CappedTimingSchema, '/CappedTiming');
v.addSchema(TimedUnitsTimingSchema, '/TimedUnitsTiming');
v.addSchema(NoTimingSchema, '/NoTiming');
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