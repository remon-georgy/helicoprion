/**
 * @flow
 */

///////////////////////////////////////////////////////////////////////
// The Girls
// http://www.crossfit.com/cf-info/faq.html
///////////////////////////////////////////////////////////////////////


var movements = {
  '/movement/pull-up': {
    'id': '/movement/pull-up',
    'name': 'Pull up',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  '/movement/push-up': {
    'id': '/movement/push-up',
    'name': 'Push up',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/sit-up': {
    'id': '/movement/sit-up',
    'name': 'Sit up',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/run': {
    'id': '/movement/run',
    'name': 'Run',
    'equipment': ['bodyweight'],
    'aspects': ['distance', 'load'],
  },
  '/movement/shuttle-sprint': {
    'id': '/movement/shuttle-sprint',
    'name': 'Shuttle Sprint',
    'equipment': ['bodyweight'],
    'aspects': ['distance', 'load', 'reps'],
  },
  '/movement/snatch': {
    'id': '/movement/snatch',
    'name': 'Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/snatch-squat': {
    'id': '/movement/snatch-squat',
    'name': 'Squat Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean': {
    'id': '/movement/clean',
    'name': 'Clean',
    'equipment': ['barbell', 'dumbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-air': {
    'id': '/movement/squat-air',
    'name': 'Air Squat',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-back': {
    'id': '/movement/squat-back',
    'name': 'Back Squat',
    'parent': '/movement/squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-overhead': {
    'id': '/squat-overhead',
    'parent': '/movement/squat',
    'name': 'Overhead Squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-front': {
    'id': '/movement/squat-front',
    'parent': '/movement/squat',
    'name': 'Front Squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/pistol': {
    'id': '/movement/pistol',
    'parent': '/movement/squat',
    'name': 'Pistol',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-squat': {
    'id': '/movement/clean-squat',
    'name': 'Squat Clean',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/deadlift': {
    'id': '/movement/deadlift',
    'name': 'Deadlift',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/bench-press': {
    'id': '/movement/bench-press',
    'name': 'Bench Press',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/handstand-push-up': {
    'id': '/movement/handstand-push-up',
    'name': 'Handstand Push Up',
    'equipment': ['bodyweight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/ring-dips': {
    'id': '/movement/ring-dips',
    'name': 'Ring Dips',
    'equipment': ['rings'],
    'aspects': ['reps', 'load'],
  },
  '/movement/thruster': {
    'id': '/movement/thruster',
    'name': 'Thruster',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-and-jerk': {
    'id': '/movement/clean-and-jerk',
    'name': 'Clean and Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/jerk': {
    'id': '/movement/jerk',
    'name': 'Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/kettlebell-swing': {
    'id': '/movement/kettlebell-swing',
    'name': 'Kettlebell Swing',
    'equipment': ['kettlebell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/row': {
    'id': '/movement/row',
    'name': 'Row',
    'equipment': ['rower'],
    'aspects': ['distance', 'damping'],
  },
  '/movement/wall-ball-shot': {
    'id': '/movement/wall-ball-shot',
    'name': 'Wall Ball Shot',
    'equipment': ['medicine-ball'],
    'aspects': ['reps', 'load', 'height'],
  },
  '/movement/jump-rope': {
    'id': '/movement/jump-rope',
    'name': 'Jump Rope',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
  },
  '/movement/jump-rope-du': {
    'id': '/movement/jump-rope-du',
    'name': 'Double Under',
    'parent': '/movement/jump-rope',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
  },
  '/movement/box-jump': {
    'id': '/movement/box-jump',
    'name': 'Box Jump',
    'equipment': ['box'],
    'aspects': ['reps', 'height'],
  },
  '/movement/muscle-up': {
    'id': '/movement/muscle-up',
    'name': 'Muscle up',
    'equipment': ['rings'],
    'aspects': ['reps'],
  },
  '/movement/burpee': {
    'id': '/movement/burpee',
    'name': 'Burpee',
    'equipment': ['bodyweight'],
    'aspects': ['reps'],
  },
  '/movement/rest': {
    'id': '/movement/burpee',
    'name': 'Rest',
    'aspects': ['time'],
  },
};

var workouts = [
  // For time
  //
  // 100 Pull-ups
  // 100 Push-ups
  // 100 Sit-ups
  // 100 Squats
  {
    name: 'Angie',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      // missing '' means that time is unlimited
      'units': [
        {
          movementID: movements['/movement/pull-up'].id,
          rx: {reps: 100}
        }, {
          movementID: movements['/movement/push-up'].id,
          rx: {reps: 100}
        }, {
          movementID: movements['/movement/sit-up'].id,
          rx: {reps: 100}
        }, {
          movementID: movements['/movement/squat-air'].id,
          rx: {reps: 100}
        }
      ]
    }]
  },
  // Barbara
  //
  // 5X
  // 20 Pull-ups
  // 30 Push-ups
  // 40 Sit-ups
  // 50 Squats
  // Rest precisely three minutes between each round.
  {
    name: 'Barbara',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    clusters: [{
      rounds: 5,
      restBetweenRounds: 180,
      units: [{
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 20}
      },{
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 30}
      }, {
        movementID: movements['/movement/sit-up'].id,
        rx: {reps: 40}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 50}
      }]
    }]
  },
  // Chelsea
  //
  // Each min on the min for 30 min
  // 5 Pull-ups
  // 10 Push-ups
  // 15 Squats
  {
    name: 'Chelsea',
    scoring: 'rounds',
    type: 'FixedInterval',
    clusters: [{
      timing: {
        type: 'FixedInterval',
        count: 30,
        deathBy: true,
        length: 60,
        // TODO optional
        // work: 60, // no included rest.
      },
      units: [{
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 5}
      },{
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 10}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Cindy
  //
  // 5 Pull-ups
  // 10 Push-ups
  // 15 Squats
  //
  // As many rounds as possible in 20 min
  {
    name: 'Cindy',
    type: 'FixedTimeVariableWork',
    scoring: 'rounds',
    clusters: [{
      timing: {
        type: 'AMRAP',
        timeCap: 1200
      },
      units: [{
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 5}
      },{
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 10}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Diane
  //
  // Deadlift 225/155 lbs
  // Handstand push-ups
  //
  // 21-15-9 reps, for time
  {
    name: 'Diane',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    clusters: [{
      rounds: 3,
      repScheme: '21-$round*6',
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {'load': [225, 155]}
      }, {
        movementID: movements['/movement/handstand-push-up'].id,
      }]
    }]
  },
  // Elizabeth
  //
  // 21-15-9 reps, for time
  //
  // Clean 135/95 lbs
  // Ring Dips
  {
    name: 'Elizabeth',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 3,
      repScheme: '21-$round*6',
      units: [{
        movementID: movements['/movement/clean-squat'].id,
        rx: {'load': [135, 95]}
      }, {
        movementID: movements['/movement/ring-dips'].id,
      }]
    }]
  },
  // Fran
  //
  // Thruster 95/65 lbs
  // Pull-ups
  //
  // 21-15-9 reps, for time
  {
    name: 'Fran',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 3,
      repScheme: '21-$round*6',
      units: [{
        movementID: movements['/movement/thruster'].id,
        rx: {'load': [95, 65]}
      }, {
        movementID: movements['/movement/pull-up'].id,
      }]
    }]
  },
  // Grace
  //
  // Clean and Jerk 135/95 lbs
  //
  // 30 reps for time
  {
    name: 'Grace',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 3,
      repScheme: '21-$round*6',
      units: [{
        movementID: movements['/movement/clean-and-jerk'].id,
        rx: {'load': [135, 95], reps: 30}
      }]
    }]
  },
  // Helen
  //
  // 3X
  // 400 meter run
  // 1.5 pood Kettlebell swing x 21
  // Pull-ups 12 reps
  {
    name: 'Helen',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400}
      }, {
        movementID: movements['/movement/kettlebell-swing'].id,
        rx: {'load': [53, 35], 'reps': 21}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {'reps': 12}
      }]
    }]
  },
  // Isabel
  //
  // Snatch 135/95 pounds
  //
  // 30 reps for time
  {
    name: 'Isabel',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      units: [{
        movementID: movements['/movement/snatch'].id,
        rx: {'load': [135, 95], 'reps': 30}
      }]
    }]
  },
  // Jackie
  //
  // 1000 meter row
  // Thruster 45 lbs (50 reps)
  // Pull-ups (30 reps)
  {
    name: 'Jackie',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {'distance': 1000}
      }, {
        movementID: movements['/movement/thruster'].id,
        rx: {'load': 45, reps: 50}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {'reps': 30}
      }]
    }]
  },
  // Karen
  //
  // Wall-ball 150 shots
  {
    name: 'Karen',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      units: [{
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {reps: 150, load: [20, 14]}
      }]
    }]
  },
  // Linda
  //
  // Deadlift 1 1/2 BW
  // Bench BW
  // Clean 3/4 BW
  //
  // 10/9/8/7/6/5/4/3/2/1 rep
  // rounds for time
  {
    name: 'Linda',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 10,
      repScheme: '10-$round',
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {'load': '1.5 * $BW'}
      }, {
        movementID: movements['/movement/bench-press'].id,
        rx: {'load': '$BW'}
      }, {
        movementID: movements['/movement/clean-squat'].id,
        rx: {'load': '0.75 * $BW'}
      }]
    }]
  },
  // Mary
  //
  // 5 Handstand push-ups
  // 10 1-legged squats
  // 15 Pull-ups
  //
  // As many rounds as possible in 20 min
  {
    name: 'Mary',
    type: 'FixedTimeVariableWork',
    scoring: 'rounds',
    clusters: [{
      timing: {
        type: 'AMRAP',
        timeCap: 1200,
      },
      units: [{
        movementID: movements['/movement/handstand-push-up'].id,
        rx: {reps: 5}
      }, {
        movementID: movements['/movement/pistol'].id,
        rx: {reps: 10}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Nancy
  //
  // 400 meter run
  // Overhead squat 95/65 lbs x 15
  //
  // 5 rounds for time
  {
    name: 'Nancy',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400}
      }, {
        movementID: movements['/movement/squat-overhead'].id,
        rx: {reps: 15, load: [95, 65]}
      }]
    }]
  },
  // Annie
  //
  // Double-unders
  // Sit-ups
  //
  // 50-40-30-20 and10 rep rounds; for time
  {
    name: 'Annie',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 5,
      repScheme: '50-10*$round',
      units: [{
        movementID: movements['/movement/jump-rope-du'].id,
      }, {
        movementID: movements['/movement/sit-up'].id,
      }]
    }]
  },
  // Eva
  //
  // Run 800 meters
  // 2 pood KB swing, 30 reps
  // 30 pullups
  //
  // 5 rounds for time
  {
    name: 'Eva',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 800}
      }, {
        movementID: movements['/movement/kettlebell-swing'].id,
        rx: {reps: 30, load: 70}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 30}
      }]
    }]
  },
  // Kelly
  //
  // Run 400 meters
  // 30 box jump, 24 inch box
  // 30 Wall ball shots, 20 pound ball
  //
  // 5 rounds for time
  {
    name: 'Kelly',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 800}
      }, {
        movementID: movements['/movement/box-jump'].id,
        rx: {reps: 30, height: [24, 20]}
      }, {
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {reps: 30, load: [20, 14]}
      }]
    }]
  },
  // Lynne
  // TODO perhaps declare there's no timing. This way it looks like a "For time" wod. But
  // this is very edgy wod anyway.
  //
  // Bodyweight bench press (e.g., same amount on bar as you weigh)
  // pullups
  //
  // 5 rounds for max reps. There is NO time component to this WOD, although some versions Rx the movements as a couplet.
  {
    name: 'Lynne',
    type: 'VariableWorkVariableTime',
    scoring: 'reps',
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/bench-press'].id,
        rx: {reps: '$MAX', load: '$BW'}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: '$MAX'}
      }]
    }]
  },
  // Nicole
  //
  // Run 400 meters
  // Max rep Pull-ups
  //
  // As many rounds as possible in 20 minutes.
  // Note number of pull-ups completed for each round.
  {
    name: 'Nicole',
    type: 'FixedTimeVariableWork',
    scoring: 'reps',
    clusters: [{
      timing: {
        type: 'AMRAP',
        timeCap: 1200,
      },
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: '$MAX'}
      }]
    }]
  },
  // Amanda
  // 9-7-5 Reps For Time
  // Muscle-Ups
  // Snatches (135/95 lbs)
  {
    name: 'Amanda',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    clusters: [{
      rounds: 3,
      repScheme: '9-$round*2',
      units: [{
        movementID: movements['/movement/muscle-up'].id,
      }, {
        movementID: movements['/movement/snatch-squat'].id,
        rx: {load: [135, 95]}
      }]
    }]
  },
  // Christine
  // 3 Rounds for Time
  // 500 meter Row
  // 12 Deadlifts (Bodyweight)
  // 21 Box Jumps (24/20 in)
  {
    name: 'Christine',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {distance: 500}
      }, {
        movementID: movements['/movement/deadlift'].id,
        rx: {reps: 12, 'load': '$BW'}
      }, {
        movementID: movements['/movement/box-jump'].id,
        rx: {reps: 21}
      }]
    }]
  },
  // GWEN
  // 15-12-9 Reps
  // Clean-and-Jerk
  {
    name: 'Gwen',
    type: 'VariableWorkVariableTime',
    scoring: 'load',
    clusters: [{
      repScheme: '15-$round*3',
      units: [{
        movementID: movements['/movement/clean-and-jerk'].id,
        rx: {load: '$MAX'}
      }]
    }]
  },
  // DONNY
  // 21-15-9-9-15-21 Reps For Time
  // Deadlifts (225/155 lbs)
  // Burpees
  //
  // * Added because of the irregular repScheme
  {
    name: 'Donny',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    clusters: [{
      repScheme: [21, 15, 9, 9, 15, 21],
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {'load': [225, 155]}
      }, {
        movementID: movements['/movement/burpee'].id,
      }]
    }]
  },
  // SANTORA
  //
  // 3 Round For Reps
  // 1 Minute Squat Cleans (155 lbs)
  // 1 Minute Shuttle Sprints (20 ft foward, 20 ft backwards = 1 rep)
  // 1 Minute Deadlifts (245 lbs)
  // 1 Minute Burpees
  // 1 Minute Jerks (155 lbs)
  // 1 Minute Rest
  //
  // * Added because it's a timed rounds workout
  {
    name: 'Santora',
    scoring: 'reps',
    type: 'FixedTimeVariableWork',
    clusters: [{
      rounds: 3,
      timing: {
        type: 'TimedRounds',
        rounds: 3,
        length: 60,
      },
      units: [{
        movementID: movements['/movement/clean-squat'].id,
        rx: {reps: '$MAX', load: 155}
      },{
        movementID: movements['/movement/shuttle-sprint'].id,
        rx: {reps: '$MAX'}
      }, {
        movementID: movements['/movement/deadlift'].id,
        rx: {reps: '$MAX'}
      }, {
        movementID: movements['/movement/burpee'].id,
        rx: {reps: '$MAX'}
      }, {
        movementID: movements['/movement/jerk'].id,
        rx: {reps: '$MAX', load: 155}
      }, {
        movementID: movements['/movement/rest'].id,
      }]
    }]
  },
];

module.exports = {
  'workouts': workouts,
  'movements': movements,
};
