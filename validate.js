var data = require('./data');

var equipmentSchema = {
  'id': '/Equipment',
  'enum': ['bodyweight', 'barbell', 'dumbell', 'kettlebell', 'jump-rope', 'rope', 'abmat', 'rings', 'pull-up-rig', 'box', 'bench', 'rower', 'sled', 'yoke', 'tire', 'parallettes', 'plates', 'rack', 'elastic-bands', 'medicine-ball', 'weighted-vest', 'ghd', 'assault-bike']
};


var aspectSchema = {
  'id': '/Aspect',
  'enum': ['load', 'distance', 'height', 'reps', 'calories', 'damping']
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
  'required': ['movement', 'rx'],
  'additionalProperties': false,
  'properties': {
    'movement': {$ref: '/Movement'},
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
    'units': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Unit'}
    }
  }
};

var FixedWorkVariableTimeSchema = {
  'id': '/FixedWorkVariableTime',
  'properties': {
    'type': {'enum': ['FixedWorkVariableTime']},
    'name': {'type': 'string'},
    'restBetweenRounds': {'type': 'integer'}
  }
};

var FixedTimeVariableWorkSchema = {
  'id': '/FixedTimeVariableWork',
  'required': ['timeCap'],
  'properties': {
    'type': {'enum': ['FixedTimeVariableWork']},
    'name': {'type': 'string'},
    'aspect': {'enum': ['rounds', 'aspects', 'reps']},
    'timeCap': {'type': 'integer'},
    'restBetweenRounds': {'type': 'integer'}
  }
};

var VariableTimeVariableWorkSchema = {
  'id': '/VariableTimeVariableWork',
  'required': ['aspects'],
  'properties': {
    'type': {'enum': ['VariableTimeVariableWork']},
    'rounds': {'type': 'integer', 'default': 1},
    'name': {'type': 'string'},
    'aspects': {
      'type': 'array',
      'items': {'$ref': '/Aspect'}
    },
  }
};
var FixedIntervalSchema = {
  'id': '/FixedInterval',
  'required': ['intervalWork', 'intervals'],
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
    
    'name': {'type': 'string'},
    'scoring': {
      'type': 'object',
      'oneOf': [
        {'$ref': '/FixedWorkVariableTime'},
        {'$ref': '/FixedTimeVariableWork'},
        {'$ref': '/VariableTimeVariableWork'},
        {'$ref': '/FixedInterval'},
      ]
    },
    'clusters': {
      'type': 'array',
      'minItems': 1,
      'items': {'$ref': '/Cluster'}
    },
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
v.addSchema(VariableTimeVariableWorkSchema, '/VariableTimeVariableWork');
v.addSchema(FixedIntervalSchema, '/FixedInterval');


var show = true;
data.workouts.forEach(function(workout) {
  var ret = v.validate(workout, workoutSchema);
  if (ret.errors) {
    console.log(ret.errors);
    show = false;
  }
});

