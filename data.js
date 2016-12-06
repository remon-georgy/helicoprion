/**
 * @flow
 */

///////////////////////////////////////////////////////////////////////
// The Girls
// http://www.crossfit.com/cf-info/faq.html
///////////////////////////////////////////////////////////////////////
const tags = [
  { id: 'cfg-open',name: 'CrossFit Games Open' },
  { id: 'girls', name: 'The Girls' },
  { id: 'hero', name: 'The Heros' },
  { id: 'competition', name: 'Competitions' },
];

const equipments = [
  { id: 'body-weight', name: 'Body-weight' },
  { id: 'barbell', name: 'Barbell' },
  { id: 'dumbbell', name: 'Dumbbell' },
  { id: 'kettlebell', name: 'Kettlebell' },
  { id: 'jump-rope', name: 'Jump Rope' },
  { id: 'rope', name: 'Rope' },
  { id: 'abmat', name: 'Abmat' },
  { id: 'rings', name: 'Rings' },
  { id: 'pull-up-rig', name: 'Pull-Up Rig' },
  { id: 'box', name: 'Box' },
  { id: 'bench', name: 'Bench' },
  { id: 'rower', name: 'Rower' },
  { id: 'sled', name: 'Sled' },
  { id: 'yoke', name: 'Yoke' },
  { id: 'tire', name: 'Tire' },
  { id: 'parallettes', name: 'Parallettes' },
  { id: 'plates', name: 'Plates' },
  { id: 'rack', name: 'Rack' },
  { id: 'elastic-band', name: 'Elastic Band' },
  { id: 'medicine-ball', name: 'Medicine Ball' },
  { id: 'weight-vest', name: 'Weight Vest' },
  { id: 'ghd', name: 'GHD' },
  { id: 'assault-bike', name: 'Assaut Bike' }
];

const movements = {
  '/movement/pull-up': {
    'id': '/movement/pull-up',
    'name': 'Pull-Up',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  '/movement/chest-to-bar': {
    'id': '/movement/chest-to-bar',
    'name': 'Chest-to-Bar Pull-up',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  '/movement/toes-to-bar': {
    'id': '/movement/toes-to-bar',
    'name': 'Toes-to-Bar',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  '/movement/push-up': {
    'id': '/movement/push-up',
    'name': 'Push-Up',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/sit-up': {
    'id': '/movement/sit-up',
    'name': 'Sit-Up',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/run': {
    'id': '/movement/run',
    'name': 'Run',
    'equipment': ['body-weight'],
    'aspects': ['distance', 'load'],
  },
  '/movement/shuttle-sprint': {
    'id': '/movement/shuttle-sprint',
    'name': 'Shuttle Sprint',
    'equipment': ['body-weight'],
    'aspects': ['distance', 'load', 'reps'],
  },
  '/movement/snatch': {
    'id': '/movement/snatch',
    'name': 'Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/push-jerk': {
    'id': '/movement/push-jerk',
    'name': 'Push Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/push-press': {
    'id': '/movement/push-press',
    'name': 'Push Press',
    'equipment': ['barbell'],
  },
  '/movement/snatch-hang-squat': {
    'id': '/movement/snatch-hang-squat',
    'name': 'Hang Squat Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean': {
    'id': '/movement/clean',
    'name': 'Clean',
    'equipment': ['barbell', 'dumbbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-air': {
    'id': '/movement/squat-air',
    'name': 'Air Squat',
    'equipment': ['body-weight'],
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
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-squat': {
    'id': '/movement/clean-squat',
    'name': 'Squat Clean',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-power': {
    'id': '/movement/clean-power',
    'name': 'Power Clean',
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
    'name': 'Handstand Push-Up',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  '/movement/ring-dip': {
    'id': '/movement/ring-dip',
    'name': 'Ring Dip',
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
    'name': 'Clean-and-Jerk',
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
    'name': 'Wall-Ball Shot',
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
    'name': 'Double-Under',
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
  '/movement/box-jump-over': {
    'id': '/movement/box-jump-over',
    'name': 'Box Jump Over',
    'equipment': ['box'],
    'aspects': ['reps', 'height'],
  },
  '/movement/muscle-up': {
    'id': '/movement/muscle-up',
    'name': 'Muscle-Up',
    'equipment': ['rings'],
    'aspects': ['reps'],
  },
  '/movement/burpee': {
    'id': '/movement/burpee',
    'name': 'Burpee',
    'equipment': ['body-weight'],
    'aspects': ['reps'],
  },
  '/movement/burpee-over-bar': {
    'id': '/movement/burpee-over-bar',
    'name': 'Over the Bar Burpee',
    'equipment': ['body-weight'],
    'aspects': ['reps'],
  },
  '/movement/burpee-facing-bar': {
    'id': '/movement/burpee-facing-bar',
    'name': 'Bar Facing Burpee',
    'equipment': ['body-weight'],
    'aspects': ['reps'],
  },
  '/movement/rest': {
    'id': '/movement/rest',
    'name': 'Rest',
    'equipment': ['body-weight'],
    'aspects': ['time'],
  },
};

const workouts = [
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
    tags: ['girls'],
    clusters: [{
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
    tags: ['girls'],
    clusters: [{
      rounds: 5,
      restBetweenRounds: {value: 3, unit: 'mins'},
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
    type: 'FixedWorkFixedTime',
    tags: ['girls'],
    clusters: [{
      timing: {
        alias: 'EMOM 30',
        type: 'FixedIntervals',
        intervals: 30,
        deathBy: true,
        time: 60,
        // work: 60, // defaults to time
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
    tags: ['girls'],
    clusters: [{
      timing: {
        type: 'Capped',
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
    tags: ['girls'],
    clusters: [{
      repScheme: [21, 15, 9],
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {'load': [225, 155], unit: 'lb'}
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
    tags: ['girls'],
    clusters: [{
      repScheme: [21, 15, 9],
      units: [{
        movementID: movements['/movement/clean-squat'].id,
        rx: {'load': [135, 95], unit: 'lb'}
      }, {
        movementID: movements['/movement/ring-dip'].id,
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
    tags: ['girls'],
    clusters: [{
      repScheme: [21, 15, 9],
      units: [{
        movementID: movements['/movement/thruster'].id,
        rx: {'load': [95, 65], unit: 'lb'}
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
    tags: ['girls'],
    clusters: [{
      units: [{
        movementID: movements['/movement/clean-and-jerk'].id,
        rx: {'load': [135, 95], unit: 'lb', reps: 30}
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
    tags: ['girls'],
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400, unit: 'm'}
      }, {
        movementID: movements['/movement/kettlebell-swing'].id,
        rx: {'load': [53, 35], 'reps': 21, unit: 'lb'}
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
    tags: ['girls'],
    clusters: [{
      units: [{
        movementID: movements['/movement/snatch'].id,
        rx: {'load': [135, 95], 'reps': 30, unit: 'lb'}
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
    tags: ['girls'],
    clusters: [{
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {'distance': 1000, unit: 'm'}
      }, {
        movementID: movements['/movement/thruster'].id,
        rx: {'load': 45, reps: 50, unit: 'lb'}
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
    tags: ['girls'],
    clusters: [{
      units: [{
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {reps: 150, load: [20, 14], unit: 'lb'}
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
    tags: ['girls'],
    clusters: [{
      repScheme: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
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
    tags: ['girls'],
    clusters: [{
      timing: {
        type: 'Capped', alias:'AMRAP 20 minutes',
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
    tags: ['girls'],
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400, unit: 'm'}
      }, {
        movementID: movements['/movement/squat-overhead'].id,
        rx: {reps: 15, load: [95, 65], unit: 'lb'}
      }]
    }]
  },
  // Annie
  //
  // Double-unders
  // Sit-ups
  //
  // 50-40-30-20 and 10 rep rounds; for time
  {
    name: 'Annie',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    tags: ['girls'],
    clusters: [{
      repScheme: [50, 40, 30, 20, 10],
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
    tags: ['girls'],
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 800, unit: 'm'}
      }, {
        movementID: movements['/movement/kettlebell-swing'].id,
        rx: {reps: 30, load: 2, unit: 'pood'}
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
  // 30 Wall-ball Shots, 20 pound ball
  //
  // 5 rounds for time
  {
    name: 'Kelly',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    tags: ['girls'],
    clusters: [{
      rounds: 5,
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400, unit: 'm'}
      }, {
        movementID: movements['/movement/box-jump'].id,
        rx: {reps: 30, height: [24, 20], unit: 'in'}
      }, {
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {reps: 30, load: [20, 14], unit: 'lb'}
      }]
    }]
  },
  // Lynne
  //
  // body-weight bench press (e.g., same amount on bar as you weigh)
  // Pullups
  //
  // 5 rounds for max reps. There is NO time component to this WOD, although some versions Rx the movements as a couplet.
  {
    name: 'Lynne',
    type: 'VariableWorkVariableTime',
    scoring: 'reps',
    tags: ['girls'],
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
  // Score is total of un-broken Pull-Ups completed each round.
  {
    name: 'Nicole',
    type: 'FixedTimeVariableWork',
    scoring: 'reps',
    tags: ['girls'],
    notes: ['Score is total of un-broken Pull-Ups completed each round.'],
    clusters: [{
      timing: {
        type: 'Capped', alias:'AMRAP 20 minutes',
        timeCap: 1200,
      },
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {'distance': 400, unit: 'm'}
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
    tags: ['girls'],
    clusters: [{
      repScheme: [9, 7, 5],
      units: [{
        movementID: movements['/movement/muscle-up'].id,
      }, {
        movementID: movements['/movement/snatch'].id,
        rx: {load: [135, 95], unit: 'lb'}
      }]
    }]
  },
  // Christine
  // 3 Rounds for Time
  // 500 meter Row
  // 12 Deadlifts (body-weight)
  // 21 Box Jumps (24/20 in)
  {
    name: 'Christine',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    tags: ['girls'],
    clusters: [{
      rounds: 3,
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {distance: 500, unit: 'm'}
      }, {
        movementID: movements['/movement/deadlift'].id,
        rx: {reps: 12, 'load': '$BW'}
      }, {
        movementID: movements['/movement/box-jump'].id,
        rx: {reps: 21, height: [24, 20], unit: 'in'}
      }]
    }]
  },
  // GWEN
  // 15-12-9 Reps
  // Clean-and-Jerk
  //
  // Score is weight used for all three UNBROKEN sets.
  {
    name: 'Gwen',
    type: 'VariableWorkVariableTime',
    scoring: 'load',
    tags: ['girls'],
    clusters: [{
      repScheme: [15, 12, 9],
      units: [{
        movementID: movements['/movement/clean-and-jerk'].id,
        rx: {load: '$MAX'}
      }]
    }],
    notes: ['Score is weight used for all three UNBROKEN sets.']
  },
  // DONNY
  // 21-15-9-9-15-21 Reps For Time
  // Deadlifts (225/155 lbs)
  // Burpees
  //
  // *ref* irregular repScheme
  {
    name: 'Donny',
    type: 'FixedWorkVariableTime',
    scoring: 'time',
    tags: ['hero'],
    clusters: [{
      repScheme: [21, 15, 9, 9, 15, 21],
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {'load': [225, 155], unit: 'lb'}
      }, {
        movementID: movements['/movement/burpee'].id,
      }]
    }]
  },
  // SANTORA
  //
  // 3 Round For Reps
  //
  // 1 Minute Squat Cleans (155 lbs)
  // 1 Minute Shuttle Sprints (20 ft foward, 20 ft backwards = 1 rep)
  // 1 Minute Deadlifts (245 lbs)
  // 1 Minute Burpees
  // 1 Minute Jerks (155 lbs)
  // 1 Minute Rest
  //
  // *ref* Added because it's a timed units workout
  {
    name: 'Santora',
    scoring: 'reps',
    type: 'FixedTimeVariableWork',
    tags: ['hero'],
    clusters: [{
      rounds: 3,
      restBetweenRounds: {value: 1, unit: 'min'},
      timing: {
        type: 'TimedUnits',
        time: 60,
      },
      units: [{
        movementID: movements['/movement/clean-squat'].id,
        rx: {reps: '$MAX', load: 155, unit: 'lb'}
      },{
        movementID: movements['/movement/shuttle-sprint'].id,
        rx: {reps: '$MAX'},
        notes: ['20 ft foward, 20 ft backwards = 1 rep'],
      }, {
        movementID: movements['/movement/deadlift'].id,
        rx: {reps: '$MAX', load: 245, unit: 'lb'}
      }, {
        movementID: movements['/movement/burpee'].id,
        rx: {reps: '$MAX'}
      }, {
        movementID: movements['/movement/jerk'].id,
        rx: {reps: '$MAX', load: 155, unit: 'lb'}
      }]
    }]
  },
  // DEL
  //
  // For Time
  //
  // 25 Burpees
  // 400 Meter Run (20 lbs/14 lbs medicine ball)
  // 25 Weighted Pull-Ups (20 lbs/15 lbs dumbbell)
  // 400 Meter Run (20 lbs/14 lbs medicine ball)
  // 25 Handstand Push-Ups
  // 400 Meter Run (20 lbs/14 lbs medicine ball)
  // 25 Chest-to-Bar Pull-Ups
  // 400 Meter Run (20 lbs/14 lbs medicine ball)
  // 25 Burpees
  //
  // *ref* loaded movements.
  {
    name: 'DEL',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    tags: ['hero'],
    clusters: [{
      units: [{
        movementID: movements['/movement/burpee'].id,
        rx: {reps: 25},
      }, {
        movementID: movements['/movement/run'].id,
        rx: {'distance':400, unit: 'm', load: [20, 14]},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 25, load: [20, 15], unit: 'lb'},
        notes: ['20 lbs/15 lbs dumbbell']
      }, {
        movementID: movements['/movement/run'].id,
        rx: {'distance':400, unit: 'm'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movementID: movements['/movement/handstand-push-up'].id,
        rx: {reps: 25},
      }, {
        movementID: movements['/movement/run'].id,
        rx: {'distance':400, unit: 'm'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movementID: movements['/movement/chest-to-bar'].id,
        rx: {reps: 25},
      }, {
        movementID: movements['/movement/run'].id,
        rx: {'distance':400, unit: 'm'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movementID: movements['/movement/burpee'].id,
        rx: {reps: 25},
      }]
    }]
  },
  // The Chief
  // AMRAP in 19 minutes
  // 5 Cycles of 3 Minutes Each
  //
  // 3 Power Cleans (135/95 lbs)
  // 6 Push-Ups
  // 9 Air Squats
  // Rest 1 Minute Between Each 3-Minute Cycle
  // Post rounds completed for each of the 5 cycles.
  // TODO broken
  {
    name: 'The Chief',
    scoring: 'rounds',
    type: 'FixedTimeVariableWork',
    tags: ['hero'],
    clusters: [{
      rounds: 3,
      restBetweenRounds: {unit: 'minute', value: 1},
      timing: {
        type: 'FixedIntervals',
        intervals: 3,
        time: 180,
      },
      units: [{
        movementID: movements['/movement/clean-power'].id,
        rx: {reps: 3, load: [135, 95], unit: 'lb'}
      }, {
        movementID: movements['/movement/push-up'].id,
        rx: {reps: 6}
      }, {
        movementID: movements['/movement/squat-air'].id,
        rx: {reps: 9}
      }, ]
    }]
  },
  // Open 15.5
  // 27-21-15-9 Reps for Time
  // Row (calories)
  // Thrusters (95/65 lbs)
  //
  // *ref* Added to tackle calories representation in a repSchemed wod.
  {
    name: 'Open 15.5',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    tags: ['cfg-open', 'competition'],
    clusters: [{
      repScheme: [27, 21, 15, 9],
      units: [{
        movementID: movements['/movement/row'].id,
        // NOTE this is an experimental
        rx: {calories: '../repScheme', reps:'./calories', unit: 'cal'}
      }, {
        movementID: movements['/movement/thruster'].id,
        rx: {load: [95, 65], unit: 'lb'}
      }]
    }]
  },
  // VIOLA
  //
  // As Many Rounds as Possible (AMRAP) in 25 minutes
  // 3, 6, 9, 12, 15, 18 Reps and so on
  // Thrusters (95 lbs/65 lbs)
  // Pull-ups
  // Over the Bar Burpees
  //
  // *ref* repSchemed AMRAP (vs. usual repschemed 'for time')
  {
    name: 'Viola',
    scoring: 'rounds',
    type: 'FixedTimeVariableWork',
    tags: ['hero'],
    clusters: [{
      timing: {
        type: 'Capped',
        timeCap: 25*60,
        alias:'AMRAP',
      },
      //'($round+3)*3',
      repScheme: {
        init: 3,
        step: 3,
      },
      units: [{
        movementID: movements['/movement/thruster'].id,
        rx: {load: [95, 65], unit: 'lb'},
      }, {
        movementID: movements['/movement/pull-up'].id,
      }, {
        movementID: movements['/movement/burpee-over-bar'].id,
      }]
    }]
  },
  // MOOSE
  //
  // For Time
  //
  // 1,000 meter Row
  //
  // Then 10 Rounds of:
  // 7 Bar Facing Burpees
  // 3 Thrusters (95/65 lbs)
  //
  // 1,200 Meter Run (with med ball (20/14 lbs))
  //
  // *ref* multiple clusters
  {
    name: 'Moose',
    scoring: 'time',
    type: 'FixedWorkVariableTime',
    tags: ['hero'],
    clusters: [{
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {distance: 1000, unit: 'm'}
      }]
    }, {
      rounds: 10,
      units: [{
        movementID: movements['/movement/burpee-facing-bar'].id,
        rx: {reps: 7}
      }, {
        movementID: movements['/movement/thruster'].id,
        rx: {reps: 3, load: [95, 65], unit: 'lb'}
      }]
    }, {
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {distance: 1200, unit: 'm'}
      }]
    }]
  },
  // THREE WISE MEN
  //
  // Three 4-Minute AMRAPs in 16 minutes
  //
  // "Jeremy Wise"
  // As Many Rounds & Reps as Possible (AMRAP) in 4 Minutes
  // 5 Hang Squat Snatch (135/95 lbs)
  // 10 Bar-Facing Burpees
  //
  // "Ben Wise"
  // AMRAP in 4 Minutes
  // 10 Power Cleans (135/95 lbs)
  // 20 Pull-Ups
  //
  // "Beau Wise"
  // AMRAP in 4 Minutes
  // 15 Box Jump-Overs (24/20 in)
  // 30 Wall Ball Shots (20/14 lbs)
  //
  // *ref* named clusters
  {
    name: 'Three Wise Men',
    scoring: 'reps',
    type: 'FixedTimeVariableWork',
    tags: ['hero'],
    notes: ['Complete all three parts of the workout (“Jeremy,” “Ben,” and “Beau”). Rest 2 Minutes between each part. Score is the total number of reps completed for all three parts.'],
    clusters: [{
      name: 'Jeremy Wise',
      timing: {
        type: 'Capped', alias:'AMRAP 4 minutes',
        timeCap: 240,
      },
      units: [{
        movementID: movements['/movement/snatch-hang-squat'].id,
        rx: {load: [135, 95], reps: 5, unit: 'lb'}
      }, {
        movementID: movements['/movement/burpee-facing-bar'].id,
        rx: {reps: 10}
      }]
    }, {
      name: 'Ben Wise',
      timing: {
        type: 'Capped', alias:'AMRAP 4 minutes',
        timeCap: 240,
      },
      units: [{
        movementID: movements['/movement/clean-power'].id,
        rx: {load: [135, 95], reps: 10, unit: 'lb'}
      }, {
        movementID: movements['/movement/pull-up'].id,
        rx: {reps: 20}
      }]
    }, {
      name: 'Beau Wise',
      timing: {
        type: 'Capped', alias:'AMRAP 4 minutes',
        timeCap: 240,
      },
      units: [{
        movementID: movements['/movement/box-jump-over'].id,
        rx: {reps: 15, height: [24, 20], unit: 'in'}
      }, {
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {load: [20, 14], reps: 30, unit: 'lb'}
      }]
    }]
  },
  // TEST 3
  //
  // For Reps in 8 minutes
  // Tabata Air Squats
  // Max Muscle Ups
  //
  // *ref* an embedded Tabata
  {
    name: 'Test 3',
    scoring: 'reps',
    type: 'FixedTimeVariableWork',
    tags: ['hero'],
    clusters: [{
      timing: {
        type:'FixedIntervals',
        work: 20,
        rest: 10,
        time: 30,
        intervals: 8,
      },
      units: [{
        movementID: movements['/movement/squat-air'].id
      }]
    }, {
      units: [{
        movementID: movements['/movement/muscle-up'].id,
        rx: {reps: '$MAX'}
      }]
    }]
  },
  // Open Workout 12.2
  //
  // AMRAP 10 mins
  // 30 Snatches (75, 45)
  // 30 Snatches (135, 75)
  // 30 Snatches (165, 100)
  // As many reps as possible (210, 120)
  //
  // *ref* amrap movement
  {
    name: 'Open 12.2',
    scoring: 'reps',
    type: 'FixedTimeVariableWork',
    tags: ['cfg-open', 'competition'],
    clusters: [{
      timing: {
        type: 'Capped', alias:'AMRAP 10 minutes',
        timeCap: 600
      },
      units: [{
        movementID: movements['/movement/snatch'].id,
        rx: {reps: 30, load: [75, 45], unit: 'lb'}
      }, {
        movementID: movements['/movement/snatch'].id,
        rx: {reps: 30, load: [135, 75], unit: 'lb'}
      }, {
        movementID: movements['/movement/snatch'].id,
        rx: {reps: 30, load: [165, 100], unit: 'lb'}
      }, {
        movementID: movements['/movement/snatch'].id,
        rx: {reps: '$MAX', load: [210, 120], unit: 'lb'}
      }]
    }]
  },
  // Open 12.5
  //
  // Complete as many reps as possible in 7 minutes following the rep scheme below:
  // 100 pound Thruster, 3 reps
  // 3 Chest to bar Pull-ups
  // 100 pound Thruster, 6 reps
  // 6 Chest to bar Pull-ups
  // 100 pound Thruster, 9 reps
  // This is a timed workout. If you complete the round of 9, go on to 12.
  //If you complete 12, go on to 15, etc.
  //
  // *ref* time capped, rep schemed wod
  // *ref* i.e infinite repScheme
  {
    name: 'Open 12.5',
    scoring: 'reps',
    type: 'FixedTimeVariableWork',
    tags: ['cfg-open', 'competition'],
    clusters: [{
      repScheme: {
        init: 3,
        step: 3,
      },
      timing: {
        type: 'Capped', alias:'AMRAP 7 minutes',
        timeCap: 420,
      },
      units: [{
        movementID: movements['/movement/chest-to-bar'].id,
      }, {
        movementID: movements['/movement/thruster'].id,
        rx: {load: 100, unit: 'lb'}
      }]
    }]
  },
  // 14.4
  //
  // Complete as many rounds and repetitions as possible in 14 minutes of:
  // 60-calorie row
  // 50 toes-to-bar
  // 40 wall-ball shots, 20/14 lb. to 10/9-foot target
  // 30 cleans, 135/95 lb.
  // 20 muscle-ups
  //
  // *ref* calories again
  {
    name: 'Open 14.4',
    scoring: 'rounds',
    type: 'FixedTimeVariableWork',
    tags: ['cfg-open', 'competition'],
    clusters: [{
      timing: {
        type: 'Capped', alias:'AMRAP',
        timeCap: 1020,
      },
      units: [{
        movementID: movements['/movement/row'].id,
        rx: {reps: './calories', calories: 60, unit: 'cal'}
      }, {
        movementID: movements['/movement/toes-to-bar'].id,
        rx: {reps: 50}
      }, {
        movementID: movements['/movement/wall-ball-shot'].id,
        rx: {load: [20, 14], height: [10 ,9], unit: 'lb'}
      }, {
        movementID: movements['/movement/clean'].id,
        rx: {load: [135, 95], unit: 'lb'}
      }, {
        movementID: movements['/movement/muscle-up'].id,
        rx: {reps: 20}
      }]
    }]
  },
  // Open 14.2
  //
  // From 0:00-3:00
  //    2 rounds of:
  //    10 overhead squats
  //    10 chest-to-bar pull-ups
  //
  // From 3:00-6:00
  //    2 rounds of:
  //    12 overhead squats
  //    12 chest-to-bar pull-ups
  //
  // From 6:00-9:00
  //    2 rounds of:
  //    14 overhead squats
  //    14 chest-to-bar pull-ups
  //
  // Etc., following same pattern until you fail to complete both rounds
  //
  // *ref* scoring by intervals
  // *ref* 2 rounds of each interval
  {
    name: 'Open 14.2',
    scoring: 'intervals',
    type: 'VariableWorkVariableTime',
    tags: ['cfg-open', 'competition'],
    clusters:[{
      // NOTE experimental
      // NOTE intervals here are unlimited
      rounds: 2,
      repScheme: '10+$interval*2',
      timing: {
        type: 'FixedIntervals',
        deathBy: true,
        time: 180,
      },
      units: [{
        movementID: movements['/movement/squat-overhead'].id,
        rx: {load: [95, 65], unit: 'lb'}
      }, {
        movementID: movements['/movement/chest-to-bar'].id,
      }]
    }]
  },
  // Open 13.5
  // As Many Reps as Possible in 4 minutes
  // 15 Thrusters (100/65 lbs)
  // 15 Chest-to-Bar Pull-ups
  // If 90 reps (3 rounds) are completed in under 4 minutes, time extends to 8 minutes.
  // If 180 reps (6 rounds) are completed in under 8 minutes, time extends to 12 minutes. Etc.
  //
  // *ref* repeatable AMRAP. Because there's not AMRAP'ed Fixedinterval!
  {
    name: 'Open 13.5',
    scoring: 'rounds',
    type: 'FixedWorkVariableTime',
    tags: ['cfg-open', 'competition'],
    clusters: [{
      rounds: 3,
      timing: {
        type: 'Capped', alias:'AMRAP',
        timeCap: 240,
        repeatable: true,
      },
      units: [{
        movementID: movements['/movement/thruster'].id,
        rx: {reps: 15, load: [100, 65], unit: 'lb'}
      }, {
        movementID: movements['/movement/chest-to-bar'].id,
        rx: {reps: 15}
      }]
    }]
  },
  // Dragon
  //
  // For time:
  // Run 5k
  // 4 minutes to find 4 rep max Deadlift
  // Run 5k
  // 4 minutes to find 4 rep max Push jerk
  //
  // *ref* find max load
  // *ref* confusing score
  // *ref* timeCapped but not an AMPAP, actually as much load
  {
    name: 'Dragon',
    scoring: 'load',
    type: 'VariableWorkVariableTime',
    tags: ['hero'],
    clusters: [{
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {distance: 5, unit: 'km'}
      }]
    }, {
      timing: {
        type: 'Capped',
        timeCap: 240,
      },
      units: [{
        movementID: movements['/movement/deadlift'].id,
        rx: {load: '$MAX', unit: 'lb'},
      }],
      notes: ['Find 4RM'],
    }, {
      units: [{
        movementID: movements['/movement/run'].id,
        rx: {distance: 5, unit: 'km'}
      }]
    }, {
      timing: {
        type: 'Capped',
        timeCap: 240,
      },
      units: [{
        movementID: movements['/movement/push-jerk'].id,
        rx: {load: '$MAX', unit: 'lb'},
      }],
      notes: ['Find 4RM'],
    }]
  }
];

module.exports = {
  'workouts': workouts,
  'movements': movements,
  'equipments': equipments,
  'tags': tags
};
