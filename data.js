/**
 * @flow
 */

///////////////////////////////////////////////////////////////////////
// The Girls
// http://www.crossfit.com/cf-info/faq.html
///////////////////////////////////////////////////////////////////////
const tags = [
  { _id: 'cfg-open',name: 'CrossFit Games Open' },
  { _id: 'girls', name: 'The Girls' },
  { _id: 'hero', name: 'The Heros' },
  { _id: 'competition', name: 'Competitions' },
];

const equipments = [
  { _id: 'body-weight', name: 'Body-weight' },
  { _id: 'barbell', name: 'Barbell' },
  { _id: 'dumbbell', name: 'Dumbbell' },
  { _id: 'kettlebell', name: 'Kettlebell' },
  { _id: 'jump-rope', name: 'Jump Rope' },
  { _id: 'rope', name: 'Rope' },
  { _id: 'abmat', name: 'Abmat' },
  { _id: 'rings', name: 'Rings' },
  { _id: 'pull-up-rig', name: 'Pull-Up Rig' },
  { _id: 'box', name: 'Box' },
  { _id: 'bench', name: 'Bench' },
  { _id: 'rower', name: 'Rower' },
  { _id: 'sled', name: 'Sled' },
  { _id: 'yoke', name: 'Yoke' },
  { _id: 'tire', name: 'Tire' },
  { _id: 'parallettes', name: 'Parallettes' },
  { _id: 'plates', name: 'Plates' },
  { _id: 'rack', name: 'Rack' },
  { _id: 'elastic-band', name: 'Elastic Band' },
  { _id: 'medicine-ball', name: 'Medicine Ball' },
  { _id: 'weight-vest', name: 'Weight Vest' },
  { _id: 'ghd', name: 'GHD' },
  { _id: 'assault-bike', name: 'Assaut Bike' }
];

const movements = {
  'pull-up': {
    '_id': 'pull-up',
    'name': 'Pull-Up',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  'chest-to-bar': {
    '_id': 'chest-to-bar',
    'name': 'Chest-to-Bar Pull-up',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  'toes-to-bar': {
    '_id': 'toes-to-bar',
    'name': 'Toes-to-Bar',
    'equipment': ['pull-up-rig'],
    'aspects': ['reps', 'load'],
  },
  'push-up': {
    '_id': 'push-up',
    'name': 'Push-Up',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  'sit-up': {
    '_id': 'sit-up',
    'name': 'Sit-Up',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  'run': {
    '_id': 'run',
    'name': 'Run',
    'equipment': ['body-weight'],
    'aspects': ['distance', 'load'],
  },
  'shuttle-sprint': {
    '_id': 'shuttle-sprint',
    'name': 'Shuttle Sprint',
    'equipment': ['body-weight'],
    'aspects': ['distance', 'load', 'reps'],
  },
  'snatch': {
    '_id': 'snatch',
    'name': 'Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'push-jerk': {
    '_id': 'push-jerk',
    'name': 'Push Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'push-press': {
    '_id': 'push-press',
    'name': 'Push Press',
    'equipment': ['barbell'],
  },
  'snatch-hang-squat': {
    '_id': 'snatch-hang-squat',
    'name': 'Hang Squat Snatch',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'clean': {
    '_id': 'clean',
    'name': 'Clean',
    'equipment': ['barbell', 'dumbbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  'squat-air': {
    '_id': 'squat-air',
    'name': 'Air Squat',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  'squat-back': {
    '_id': 'squat-back',
    'name': 'Back Squat',
    'parent': 'squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'squat-overhead': {
    '_id': 'squat-overhead',
    'parent': 'squat',
    'name': 'Overhead Squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'squat-front': {
    '_id': 'squat-front',
    'parent': 'squat',
    'name': 'Front Squat',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'pistol': {
    '_id': 'pistol',
    'parent': 'squat',
    'name': 'Pistol',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  'clean-power': {
    '_id': 'clean-power',
    'name': 'Power Clean',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'deadlift': {
    '_id': 'deadlift',
    'name': 'Deadlift',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'bench-press': {
    '_id': 'bench-press',
    'name': 'Bench Press',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'handstand-push-up': {
    '_id': 'handstand-push-up',
    'name': 'Handstand Push-Up',
    'equipment': ['body-weight'],
    'aspects': ['reps', 'load'],
  },
  'ring-dip': {
    '_id': 'ring-dip',
    'name': 'Ring Dip',
    'equipment': ['rings'],
    'aspects': ['reps', 'load'],
  },
  'thruster': {
    '_id': 'thruster',
    'name': 'Thruster',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'clean-and-jerk': {
    '_id': 'clean-and-jerk',
    'name': 'Clean-and-Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'jerk': {
    '_id': 'jerk',
    'name': 'Jerk',
    'equipment': ['barbell'],
    'aspects': ['reps', 'load'],
  },
  'kettlebell-swing': {
    '_id': 'kettlebell-swing',
    'name': 'Kettlebell Swing',
    'equipment': ['kettlebell'],
    'aspects': ['reps', 'load'],
  },
  'row': {
    '_id': 'row',
    'name': 'Row',
    'equipment': ['rower'],
    'aspects': ['distance', 'damping'],
  },
  'wall-ball-shot': {
    '_id': 'wall-ball-shot',
    'name': 'Wall-Ball Shot',
    'equipment': ['medicine-ball'],
    'aspects': ['reps', 'load', 'height'],
  },
  'jump-rope': {
    '_id': 'jump-rope',
    'name': 'Jump Rope',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
  },
  'jump-rope-du': {
    '_id': 'jump-rope-du',
    'name': 'Double-Under',
    'parent': 'jump-rope',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
  },
  'box-jump': {
    '_id': 'box-jump',
    'name': 'Box Jump',
    'equipment': ['box'],
    'aspects': ['reps', 'height'],
  },
  'box-jump-over': {
    '_id': 'box-jump-over',
    'name': 'Box Jump Over',
    'equipment': ['box'],
    'aspects': ['reps', 'height'],
  },
  'muscle-up': {
    '_id': 'muscle-up',
    'name': 'Muscle-Up',
    'equipment': ['rings'],
    'aspects': ['reps'],
  },
  'burpee': {
    '_id': 'burpee',
    'name': 'Burpee',
    'equipment': ['body-weight'],
    'aspects': ['reps'],
  },
  'burpee-over-bar': {
    '_id': 'burpee-over-bar',
    'name': 'Over the Bar Burpee',
    'equipment': ['body-weight'],
    'aspects': ['reps'],
  },
  'burpee-facing-bar': {
    '_id': 'burpee-facing-bar',
    'name': 'Bar Facing Burpee',
    'equipment': ['body-weight'],
    'aspects': ['reps'],
  },
  'rest': {
    '_id': 'rest',
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
          movement: 'pull-up',
          rx: {reps: 100}
        }, {
          movement: 'push-up',
          rx: {reps: 100}
        }, {
          movement: 'sit-up',
          rx: {reps: 100}
        }, {
          movement: 'squat-air',
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
      builtinRest: {value: 3, unit: 'mins', between: 'rounds'},
      units: [{
        movement: 'pull-up',
        rx: {reps: 20}
      },{
        movement: 'push-up',
        rx: {reps: 30}
      }, {
        movement: 'sit-up',
        rx: {reps: 40}
      }, {
        movement: 'squat-air',
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
        type: 'FixedCycles',
        cycles: 30,
        deathBy: true,
        time: 60,
        // work: 60, // defaults to time
      },
      units: [{
        movement: 'pull-up',
        rx: {reps: 5}
      },{
        movement: 'push-up',
        rx: {reps: 10}
      }, {
        movement: 'squat-air',
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
        time: 1200
      },
      units: [{
        movement: 'pull-up',
        rx: {reps: 5}
      },{
        movement: 'push-up',
        rx: {reps: 10}
      }, {
        movement: 'squat-air',
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
        movement: 'deadlift',
        rx: {'load': [225, 155], unit: 'lbs'}
      }, {
        movement: 'handstand-push-up',
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
        movement: 'clean',
        rx: {'load': [135, 95], unit: 'lbs'}
      }, {
        movement: 'ring-dip',
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
        movement: 'thruster',
        rx: {'load': [95, 65], unit: 'lbs'}
      }, {
        movement: 'pull-up',
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
        movement: 'clean-and-jerk',
        rx: {'load': [135, 95], unit: 'lbs', reps: 30}
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
        movement: 'run',
        rx: {'distance': 400, unit: 'meters'}
      }, {
        movement: 'kettlebell-swing',
        rx: {'load': [53, 35], 'reps': 21, unit: 'lbs'}
      }, {
        movement: 'pull-up',
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
        movement: 'snatch',
        rx: {'load': [135, 95], 'reps': 30, unit: 'lbs'}
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
        movement: 'row',
        rx: {'distance': 1000, unit: 'meters'}
      }, {
        movement: 'thruster',
        rx: {'load': 45, reps: 50, unit: 'lbs'}
      }, {
        movement: 'pull-up',
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
        movement: 'wall-ball-shot',
        rx: {reps: 150, load: [20, 14], unit: 'lbs'}
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
        movement: 'deadlift',
        rx: {'load': '1.5 * $BW'}
      }, {
        movement: 'bench-press',
        rx: {'load': '$BW'}
      }, {
        movement: 'clean',
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
        time: 1200,
      },
      units: [{
        movement: 'handstand-push-up',
        rx: {reps: 5}
      }, {
        movement: 'pistol',
        rx: {reps: 10}
      }, {
        movement: 'pull-up',
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
        movement: 'run',
        rx: {'distance': 400, unit: 'meters'}
      }, {
        movement: 'squat-overhead',
        rx: {reps: 15, load: [95, 65], unit: 'lbs'}
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
        movement: 'jump-rope-du',
      }, {
        movement: 'sit-up',
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
        movement: 'run',
        rx: {'distance': 800, unit: 'meters'}
      }, {
        movement: 'kettlebell-swing',
        rx: {reps: 30, load: 2, unit: 'pood'}
      }, {
        movement: 'pull-up',
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
        movement: 'run',
        rx: {'distance': 400, unit: 'meters'}
      }, {
        movement: 'box-jump',
        rx: {reps: 30, height: [24, 20], unit: 'inches'}
      }, {
        movement: 'wall-ball-shot',
        rx: {reps: 30, load: [20, 14], unit: 'lbs'}
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
        movement: 'bench-press',
        rx: {reps: '$AMRAP', load: '$BW'}
      }, {
        movement: 'pull-up',
        rx: {reps: '$AMRAP'}
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
        time: 1200,
      },
      units: [{
        movement: 'run',
        rx: {'distance': 400, unit: 'meters'}
      }, {
        movement: 'pull-up',
        rx: {reps: '$AMRAP'}
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
        movement: 'muscle-up',
      }, {
        movement: 'snatch',
        rx: {load: [135, 95], unit: 'lbs'}
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
        movement: 'row',
        rx: {distance: 500, unit: 'meters'}
      }, {
        movement: 'deadlift',
        rx: {reps: 12, 'load': '$BW'}
      }, {
        movement: 'box-jump',
        rx: {reps: 21, height: [24, 20], unit: 'inches'}
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
        movement: 'clean-and-jerk',
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
        movement: 'deadlift',
        rx: {'load': [225, 155], unit: 'lbs'}
      }, {
        movement: 'burpee',
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
      builtinRest: {value: 1, unit: 'min', between: 'rounds'},
      timing: {
        type: 'TimedUnits',
        time: 60,
      },
      units: [{
        movement: 'clean',
        rx: {reps: '1 minute ', load: 155, unit: 'lbs'}
      },{
        movement: 'shuttle-sprint',
        rx: {reps: '1 minute '},
        notes: ['20 ft foward, 20 ft backwards = 1 rep'],
      }, {
        movement: 'deadlift',
        rx: {reps: '1 minute ', load: 245, unit: 'lbs'}
      }, {
        movement: 'burpee',
        rx: {reps: '1 minute '}
      }, {
        movement: 'jerk',
        rx: {reps: '1 minute ', load: 155, unit: 'lbs'}
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
        movement: 'burpee',
        rx: {reps: 25},
      }, {
        movement: 'run',
        rx: {'distance':400, unit: 'meters'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movement: 'pull-up',
        rx: {reps: 25},
        notes: ['20 lbs/15 lbs dumbbell']
      }, {
        movement: 'run',
        rx: {'distance':400, unit: 'meters'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movement: 'handstand-push-up',
        rx: {reps: 25},
      }, {
        movement: 'run',
        rx: {'distance':400, unit: 'meters'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movement: 'chest-to-bar',
        rx: {reps: 25},
      }, {
        movement: 'run',
        rx: {'distance':400, unit: 'meters'},
        notes: ['20 lbs/14 lbs medicine ball']
      }, {
        movement: 'burpee',
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
    notes: ['Post rounds completed for each of the 5 cycles.'],
    clusters: [{
      builtinRest: {unit: 'minute', value: 1, between: 'cycles'},
      timing: {
        type: 'FixedCycles',
        cycles: 5,
        time: 180,
      },
      units: [{
        movement: 'clean-power',
        rx: {reps: 3, load: [135, 95], unit: 'lbs'}
      }, {
        movement: 'push-up',
        rx: {reps: 6}
      }, {
        movement: 'squat-air',
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
        movement: 'row',
        rx: {reps:'./calories', unit: 'calories'}
      }, {
        movement: 'thruster',
        rx: {load: [95, 65], unit: 'lbs'}
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
        time: 25*60,
        alias:'AMRAP',
      },
      //'($round+3)*3',
      repScheme: {
        init: 3,
        step: 3,
      },
      units: [{
        movement: 'thruster',
        rx: {load: [95, 65], unit: 'lbs'},
      }, {
        movement: 'pull-up',
      }, {
        movement: 'burpee-over-bar',
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
        movement: 'row',
        rx: {distance: 1000, unit: 'meters'}
      }]
    }, {
      rounds: 10,
      units: [{
        movement: 'burpee-facing-bar',
        rx: {reps: 7}
      }, {
        movement: 'thruster',
        rx: {reps: 3, load: [95, 65], unit: 'lbs'}
      }]
    }, {
      units: [{
        movement: 'run',
        rx: {distance: 1200, unit: 'meters'}
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
        time: 240,
      },
      units: [{
        movement: 'snatch-hang-squat',
        rx: {load: [135, 95], reps: 5, unit: 'lbs'}
      }, {
        movement: 'burpee-facing-bar',
        rx: {reps: 10}
      }]
    }, {
      name: 'Ben Wise',
      timing: {
        type: 'Capped', alias:'AMRAP 4 minutes',
        time: 240,
      },
      units: [{
        movement: 'clean-power',
        rx: {load: [135, 95], reps: 10, unit: 'lbs'}
      }, {
        movement: 'pull-up',
        rx: {reps: 20}
      }]
    }, {
      name: 'Beau Wise',
      timing: {
        type: 'Capped', alias:'AMRAP 4 minutes',
        time: 240,
      },
      units: [{
        movement: 'box-jump-over',
        rx: {reps: 15, height: [24, 20], unit: 'inches'}
      }, {
        movement: 'wall-ball-shot',
        rx: {load: [20, 14], reps: 30, unit: 'lbs'}
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
    notes: ['Final score equals lowest Tabata round score multiplied by total number of muscle-ups completed.'],
    clusters: [{
      timing: {
        alias: 'TABATA',
        type:'FixedCycles',
        work: 20,
        rest: 10,
        time: 30,
        cycles: 8,
      },
      units: [{
        movement: 'squat-air'
      }]
    }, {
      units: [{
        movement: 'muscle-up',
        rx: {reps: '$AMRAP'}
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
        time: 600
      },
      units: [{
        movement: 'snatch',
        rx: {reps: 30, load: [75, 45], unit: 'lbs'}
      }, {
        movement: 'snatch',
        rx: {reps: 30, load: [135, 75], unit: 'lbs'}
      }, {
        movement: 'snatch',
        rx: {reps: 30, load: [165, 100], unit: 'lbs'}
      }, {
        movement: 'snatch',
        rx: {reps: '$AMRAP', load: [210, 120], unit: 'lbs'}
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
        time: 420,
      },
      units: [{
        movement: 'chest-to-bar',
      }, {
        movement: 'thruster',
        rx: {load: 100, unit: 'lbs'}
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
        type: 'Capped', alias:'AMRAP 14 minutes',
        time: 1020,
      },
      units: [{
        movement: 'row',
        rx: {reps: './calories', calories: 60, unit: 'cal'}
      }, {
        movement: 'toes-to-bar',
        rx: {reps: 50}
      }, {
        movement: 'wall-ball-shot',
        rx: {reps: 40, load: [20, 14], height: [10 ,9], unit: 'lbs'}
      }, {
        movement: 'clean',
        rx: {reps: 30, load: [135, 95], unit: 'lbs'}
      }, {
        movement: 'muscle-up',
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
  // *ref* scoring by cycles
  // *ref* 2 rounds of each cycle
  {
    name: 'Open 14.2',
    scoring: 'cycles',
    type: 'VariableWorkVariableTime',
    tags: ['cfg-open', 'competition'],
    clusters:[{
      rounds: 2,
      repScheme: {
        init: 10,
        step: 2,
      },
      timing: {
        type: 'FixedCycles',
        deathBy: true,
        time: 180,
      },
      units: [{
        movement: 'squat-overhead',
        rx: {load: [95, 65], unit: 'lbs'}
      }, {
        movement: 'chest-to-bar',
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
  // *ref* repeatable AMRAP. Because there's not AMRAP'ed Fixedcycle!
  // *update* it has been transformed to a standard FixedCycles format.
  {
    name: 'Open 13.5',
    scoring: 'rounds',
    type: 'FixedWorkVariableTime',
    tags: ['cfg-open', 'competition'],
    clusters: [{
      rounds: 3,
      timing: {
        type: 'FixedCycles',
        time: 240,
        deathBy: true,
      },
      units: [{
        movement: 'thruster',
        rx: {reps: 15, load: [100, 65], unit: 'lbs'}
      }, {
        movement: 'chest-to-bar',
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
  // *ref* timeped but not an AMPAP, actually as much load
  {
    name: 'Dragon',
    scoring: 'load',
    type: 'VariableWorkVariableTime',
    tags: ['hero'],
    clusters: [{
      units: [{
        movement: 'run',
        rx: {distance: 5, unit: 'km'}
      }]
    }, {
      timing: {
        type: 'Capped',
        time: 240,
      },
      units: [{
        movement: 'deadlift',
        rx: {load: '$4RM'},
        notes: ['Find 4 rep max'],
      }],
    }, {
      units: [{
        movement: 'run',
        rx: {distance: 5, unit: 'km'}
      }]
    }, {
      timing: {
        type: 'Capped',
        time: 240,
      },
      units: [{
        movement: 'push-jerk',
        rx: {load: '$4RM'},
        notes: ['Find 4R rep max'],
      }],
      
    }]
  }
];

module.exports = {
  'workouts': workouts,
  'movements': movements,
  'equipments': equipments,
  'tags': tags
};
