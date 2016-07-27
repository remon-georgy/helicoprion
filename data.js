///////////////////////////////////////////////////////////////////////
// The Girls
// http://www.crossfit.com/cf-info/faq.html
///////////////////////////////////////////////////////////////////////

/**********************************************************************
ANGIE

{
  movement: movements['/movement/'],
  rx: {}
}

100 Pull-ups
100 Push-ups
100 Sit-ups
100 Squats
**********************************************************************/

var movements = {
  '/movement/pull-up': {
    'id': '/movement/pull-up',
    'name': 'Pull up',
    'equipment': ['pull-up-rig', 'elastic-bands'],
    'aspects': ['reps', 'load'],
  },
  '/movement/push-up': {
    'id': '/movement/push-up',
    'name': 'Push up',
    'equipment': ['none'],
    'aspects': ['reps', 'load'],
  },
  '/movement/sit-up': {
    'id': '/movement/sit-up',
    'name': 'Sit up',
    'equipment': ['none', 'abmat'],
    'aspects': ['reps', 'load'],
  },
  '/movement/run': {
    'id': '/movement/run',
    'name': 'Run',
    'equipment': ['none'],
    'aspects': ['distance', 'load'],
  },
  '/movement/snatch': {
    'id': '/movement/snatch',
    'name': 'Snatch',
    'equipment': ['none', 'barbell', 'dumbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean': {
    'id': '/movement/clean',
    'name': 'Clean',
    'equipment': ['barbell', 'dumbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat': {
    'id': '/movement/squat',
    'name': 'Squat',
    'equipment': ['none', 'barbell', 'dumbell', 'kettlebell', 'medicine-ball'],
    'aspects': ['reps', 'load'],
  },
  '/movement/squat-overhead': {
    'id': '/squat-overhead',
    'name': 'Overhead Squat',
    'equipment': ['none', 'barbell', 'dumbell', 'kettlebell', 'medicine-ball'],
    'aspects': ['reps', 'load'],
  },
  '/movement/pistol': {
    'id': '/movement/pistol',
    'name': 'Pistol',
    'equipment': ['none', 'dumbell', 'kettlebell', 'medicine-ball'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-squat': {
    'id': '/movement/clean-squat',
    'name': 'Squat Clean',
    'equipment': ['barbell', 'dumbell', 'kettlebell', 'medicine-ball', 'plates'],
    'aspects': ['reps', 'load'],
  },
  '/movement/deadlift': {
    'id': '/movement/deadlift',
    'name': 'Deadlift',
    'equipment': ['barbell', 'dumbell', 'kettlebell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/bench-press': {
    'id': '/movement/bench-press',
    'name': 'Bench Press',
    'equipment': ['barbell', 'dumbell', 'kettlebell'],
    'aspects': ['reps', 'load'],
  },
  '/movement/handstand-push-up': {
    'id': '/movement/handstand-push-up',
    'name': 'Handstand Push Up',
    'equipment': ['none', 'parallettes', 'abmat'],
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
    'equipment': ['barbell', 'dumbell', 'kettlebell', 'medicine-ball'],
    'aspects': ['reps', 'load'],
  },
  '/movement/clean-and-jerk': {
    'id': '/movement/clean-and-jerk',
    'name': 'Clean and Jerk',
    'equipment': ['barbell', 'dumbell', 'kettlebell', 'medicine-ball'],
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
    'aspects': ['reps', 'load'],
  },
  '/movement/jump-rope-du': {
    'id': '/movement/jump-rope-du',
    'name': 'Double Under',
    'equipment': ['jump-rope'],
    'aspects': ['reps', 'load'],
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime'
    },
    clusters: [{
      'units': [
        {
          movement: movements['/movement/pull-up'],
          rx: {reps: 100}
        }, {
          movement: movements['/movement/push-up'],
          rx: {reps: 100}
        }, {
          movement: movements['/movement/sit-up'],
          rx: {reps: 100}
        }, {
          movement: movements['/movement/squat'],
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
      restBetweenRounds: 3*60,
    },
    clusters: [{
      rounds: 5,
      units: [{
        movement: movements['/movement/pull-up'],
        rx: {reps: 20}
      },{
        movement: movements['/movement/push-up'],
        rx: {reps: 30}
      }, {
        movement: movements['/movement/sit-up'],
        rx: {reps: 40}
      }, {
        movement: movements['/movement/squat'],
        rx: {reps: 50}
      }]
    }]
  },
  // Each min on the min for 30 min
  // 5 Pull-ups
  // 10 Push-ups
  // 15 Squats
  {
    name: 'Chelsea',
    scoring: {
      'name': 'Emom 30',
      'type': 'FixedInterval',
      'intervals': 30*60,
      'intervalWork': 60,
      // Implied 'intervalRest': 0
    },
    clusters: [{
      units: [{
        movement: movements['/movement/pull-up'],
        rx: {reps: 5}
      },{
        movement: movements['/movement/push-up'],
        rx: {reps: 10}
      }, {
        movement: movements['/movement/squat'],
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
    scoring: {
      name: 'AMRAP 20',
      type: 'FixedWorkVariableTime',
      timeCap: 20*60,
    },
    clusters: [{
      units: [{
        movement: movements['/movement/pull-up'],
        rx: {reps: 5}
      },{
        movement: movements['/movement/push-up'],
        rx: {reps: 10}
      }, {
        movement: movements['/movement/squat'],
        rx: {reps: 15}
      }]
    }]
  },
  // Diane
  //
  // Deadlift 225 lbs
  // Handstand push-ups
  //
  // 21-15-9 reps, for time
  {
    name: 'Diane',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movement: movements['/movement/deadlift'],
        rx: {'load': 225, 'reps': '21 - round*6'}
      }, {
        movement: movements['/movement/handstand-push-up'],
        rx: {'reps': '21 - round*6'}
      }]
    }]
  },
  // Elizabeth
  //
  // 21-15-9 reps, for time
  //
  // Clean 135 lbs
  // Ring Dips
  {
    name: 'Elizabeth',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movement: movements['/movement/clean'],
        rx: {'reps': '21 - round*6', 'load': 135}
      }, {
        movement: movements['/movement/ring-dips'],
        rx: {'reps': '21 - round*6'}
      }]
    }]
  },
  // Fran
  //
  // Thruster 95 lbs
  // Pull-ups
  //
  // 21-15-9 reps, for time
  {
    name: 'Fran',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movement: movements['/movement/thruster'],
        rx: {'reps': '21 - round*6', 'load': 95}
      }, {
        movement: movements['/movement/pull-up'],
        rx: {'reps': '21 - round*6'}
      }]
    }]
  },
  // Grace
  //
  // Clean and Jerk 135 lbs
  //
  // 30 reps for time
  {
    name: 'Grace',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movement: movements['/movement/clean-and-jerk'],
        rx: {'reps': '21 - round*6', 'load': 95}
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 3,
      units: [{
        movement: movements['/movement/run'],
        rx: {'distance': 400}
      }, {
        movement: movements['/movement/kettlebell-swing'],
        rx: {'load': '54', 'reps': 21}
      }, {
        movement: movements['/movement/pull-up'],
        rx: {'reps': 12}
      }]
    }]
  },
  // Isabel
  //
  // Snatch 135 pounds
  //
  // 30 reps for time
  {
    name: 'Isabel',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movement: movements['/movement/snatch'],
        rx: {'load': 135, 'reps': 30}
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movement: movements['/movement/row'],
        rx: {'distance': 1000}
      }]
    }]
  },
  // Karen
  //
  // Wall-ball 150 shots
  {
    name: 'Karen',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movement: movements['/movement/wall-ball-shot'],
        rx: {reps: 150, load: 20}
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 10,
      units: [{
        movement: movements['/movement/deadlift'],
        rx: {reps: '10 - $round', 'load': '1.5 * $BW'}
      }, {
        movement: movements['/movement/bench-press'],
        rx: {reps: '10 - $round', 'load': '$BW'}
      }, {
        movement: movements['/movement/clean'],
        rx: {reps: '10 - $round', 'load': '0.75 * $BW'}
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
    scoring: {
      name: 'AMRAP 20',
      type: 'FixedTimeVariableWork',
      measure: 'rounds',
      timeCap: 1200,
    },
    clusters: [{
      units: [{
        movement: movements['/movement/handstand-push-up'],
        rx: {reps: 5}
      }, {
        movement: movements['/movement/pistol'],
        rx: {reps: 10}
      }, {
        movement: movements['/movement/pull-up'],
        rx: {reps: 15}
      }]
    }]
  },
  // Nancy
  //
  // 400 meter run
  // Overhead squat 95 lbs x 15
  //
  // 5 rounds for time
  {
    name: 'Nancy',
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 5,
      units: [{
        movement: movements['/movement/run'],
        rx: {'distance': 400}
      }, {
        movement: movements['/movement/squat-overhead'],
        rx: {reps: 15, load: 95}
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      units: [{
        movement: movements['/movement/jump-rope-du'],
        rx: {reps: '50-10*$round'}
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 5,
      units: [{
        movement: movements['/movement/run'],
        rx: {'distance': 800}
      }, {
        movement: movements['/movement/kettlebell-swing'],
        rx: {}
      }, {
        movement: movements['/movement/pull-up'],
        rx: {}
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
    scoring: {
      name: 'For time',
      type: 'FixedWorkVariableTime',
    },
    clusters: [{
      rounds: 5,
      units: [{
        movement: movements['/movement/run'],
        rx: {'distance': 800}
      }, {
        movement: movements['/movement/kettlebell-swing'],
        rx: {}
      }, {
        movement: movements['/movement/pull-up'],
        rx: {}
      }]
    }]
  },
  // TODO needs work on scoring part
  // Lynne
  //
  // Bodyweight bench press (e.g., same amount on bar as you weigh)
  // pullups
  //
  // 5 rounds for max reps. There is NO time component to this WOD, although some versions Rx the movements as a couplet.
  {
    name: 'Lynne',
    scoring: {
      type: 'VariableTimeVariableWork',
      aspects: ['reps'],
    },
    clusters: [{
      rounds: 5,
      units: [{
        movement: movements['/movement/bench-press'],
        rx: {reps: '$MAX', load: '$BW'}
      }, {
        movement: movements['/movement/pull-up'],
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
    scoring: {
      type: 'FixedTimeVariableWork',
      timeCap: 1200,
      aspect: 'reps'
    },
    clusters: [{
      units: [{
        movement: movements['/movement/run'],
        rx: {'distance': 400}
      }, {
        movement: movements['/movement/pull-up'],
        rx: {reps: '$MAX'}
      }]
    }]
  },


];

var oldWorkouts = [
  /**********************************************************************
  Amanda

  9, 7 and 5 reps of:
  - Muscle-ups
  - Snatches (135/95 lb.)

  For time
  **********************************************************************/
  {
    name: 'Amanda',
    scoring: {
      _ref: {
        id: 'least-time'
      }
    },
    units: [{
      rounds: 3,
      units: [{
        _ref: {
          id: 'muscle-up',
        }
      }]
    }]
  },

  /////////////////////////////////////////////////////////////////////
  // WOD DRIVE
  // www.woddrive.com/list-of-crossfit-workouts.html
  /////////////////////////////////////////////////////////////////////

  /************************************************************ PERFECT
  Weightlifting #1

  Back squat
  3 x8(75 % 1 RM), 2 x3(85 % ), 1 x1(95 % )
  *******************************************************************/
  {
    name: 'Weightlifting #1',
    scoring: {
      _ref: {
        id: 'least-time',
      }
    },
    units: [{
      rounds: 3,
      units: [{
        _ref: {
          id: 'back-squat',
          measures: ['load'],
        },
        rx: {
          'load': '0.75 * RM'
        },
        reps: 8,
      }]
    }, {
      rounds: 2,
      units: [{
        _ref: {
          id: 'back-squat',
          measures: ['load'],
        },
        rx: {
          'load': '0.85 * RM',
        },
        reps: 3,
      }]
    }, {
      rounds: 1,
      units: [{
        _ref: {
          id: 'back-squat',
          measures: ['load'],
        },
        rx: {
          'load': '0.95 * RM',
        },
        reps: 1,
      }]
    }]
  },

  /************************************************************* PERFECT
  Triplet #1:

  6x
  6x Deadlift (275#)
  6x DB thrusters (2x60#)
  16x Box jumps (24')
  ********************************************************************/
  {
    name: 'Triplet #1',
    scoring: {
      _ref: {
        id: 'least-time'
      }
    },
    units: [{
      rounds: 6,
      units: [{
        _ref: {
          id: 'deadlift',
          measures: ['load'],
        },
        reps: 6,
        rx: {
          'load': '275'
        },
      }, {
        _ref: {
          id: 'db-thrusters',
          measures: ['load'],
        },
        rx: {
          'load': '60',
        },
        reps: 6,
      }, {
        _ref: {
          id: 'box-jump',
          measures: ['height'],
        },
        rx: {
          'height': '24',
        },
        reps: 16,
      }]
    }]
  },

  /*******************************************************************
  Time cap #1:

  For max reps
  7 minute time cap
  - 8 rounds of Cindy
  - Max reps burpees
  ********************************************************************/
  {
    name: 'Time cap # 1 ',
    scoring: {
      _ref: {
        id: 'max-reps',
      },
      'time-cap': '7 minutes',
    },
    units: [
      // Nested 'Cindy' WOD.
      {
        rounds: 5,
        units: [{
          _ref: {
            id: 'pullup',
            measures: ['load'],
          },
          reps: 5,
        }, {
          _ref: {
            id: 'pushup',
            measures: ['load']
          },
          reps: 10,
        }, {
          _ref: {
            id: 'squat',
            measures: ['load']
          },
          reps: 15,
          // Redunant for bodyweight movements
          rx: 0,
        }]
      },
      // Separate movement
      {
        units: [{
          _ref: {
            id: 'burpee',
            measures: ['load']
          },
          reps: 'MAX',
        }],
      }
    ]
  },

  /***************************************************** PERFECT
  Tabata #1 (timed rounds)
  Row 8x[20:10] for max distance
  *************************************************************/
  {
    name: 'Tabata 1',
    scoring: {
      _ref: {
        id: 'max-measure',
        sequencing: 'timed-rounds',
      },
      'round-work': 20,
      'round-rest': 10,
    },
    units: [{
      rounds: 8,
      units: [{
        _ref: {
          id: 'row',
          measures: ['distance', 'calories']
        },
        rx: {
          'distance': 'MAX'
        },
      }]
    }]
  },

  /************************************************************ PERFECT
  Tabata # 2
  For max reps
  - Squats 8 x[20: 10]
  - Rest 3 minutes
  - Double - unders 8 x[20: 10]
  - Rest 3 minutes
  - Box jumps 8 x[20: 10]
  ********************************************************************/
  {
    name: 'Tabata 2',
    scoring: {
      _ref: {
        id: 'max-reps', // Sub-type of timed-rounds which includes rest
        sequencing: 'timed-rounds'
      },
      'round-work': 20,
      'round-rest': 10,
    },
    units: [{
      rounds: 8,
      units: [{
        _ref: {
          id: 'squat',
          measures: ['load']
        },
      }],
    }, {
      rounds: 1,
      units: [{
        _ref: {
          id: 'rest',
          measures: ['time']
        },
        rx: {
          'time': 3,
        },
      }]
    }, {
      units: [{
        _ref: {
          id: 'double-unders',
        },
      }],
      rounds: 8,
    }, {
      rounds: 1,
      units: [{
        _ref: {
          id: 'rest',
          measures: ['time']
        },
        rx: {
          'time': 3,
        },
      }],
    }, {
      rounds: 8,
      units: [{
        _ref: {
          id: 'box-jump',
          'measure': ['height']
        },
        rx: {
          'height': '24'
        },
      }],
    }]
  },

  /****************************************************************** PERFECT
  Strongman #1

  5 rounds
  3x Tire flip (3x bw+)
  2-4-6-8-10x Front squat (1.25x bw)
  *************************************************************************/

  {
    name: 'Strongman#1',
    scoring: {
      _ref: {
        id: 'least-time',
      }
    },
    units: {
      'unit1': {
        rounds: 5,
        units: [{
          _ref: {
            id: 'tire-flip',
            measures: ['load'],
          },
          rx: {
            'load': '3 * BW'
          },
          reps: '3',
        }, {
          _ref: {
            id: 'front-squat',
            measures: ['load'],
          },
          rx: {
            'load': '1.25BW'
          },
          reps: '2 + 2*round'
        }]
      }
    }
  },

  /***************************************************************** PERFECT
  Singlet #1

  For max reps
  8x[30:60] Ground to shoulder (135#)
  ************************************************************************/
  {
    name: 'Singlet#1',
    scoring: {
      _ref: {
        id: 'total-reps',
        sequencing: 'timed-rounds',
      },
      'round-work': 30,
      'round-rest': 60,
    },
    units: [{
      rounds: 8,
      units: [{
        _ref: {
          id: 'ground-to-shoulder',
          measures: ['load'],
        },
        rx: {
          'load': 135,
        },
        reps: 'MAX',
      }]
    }]

  },

  /**************************************************************** PERFECT
  row #2: how to represent calories

  Row 6x[90:90] for max calories
  ************************************************************************/
  {
    name: 'row#1',
    scoring: {
      _ref: {
        id: 'total-measure',
        sequencing: 'timed-rounds'
      },
      'round-work': 90,
      'round-rest': 90,
    },
    units: [{
      rounds: 6,
      units: [{
        _ref: {
          id: 'row',
          measures: ['calories']
        },
        rx: {
          'calories': 'MAX',
        }
      }]
    }]
  },

  /***************************************************************** PERFECT
  Ladder #1: Incrementing reps each round

  For max rounds

  - 2x Clean and jerk (135#)
  - 2x Toes to bar

  Add 2 reps per movement each successive round
  10 minute time cap
  ************************************************************************/
  {
    name: 'Ladder#1',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time',
      },
      'time-cap': 10,
    },
    units: [{
      units: [{
        _ref: {
          id: 'clean-n-jerk',
          measures: ['load'],
        },
        rx: {
          'load': 135,
          reps: '2 + round*2',
        },
      }, {
        _ref: {
          id: 'toes-to-bar',
          measures: ['load'],
        },
        rx: {
          reps: '2 + round*2',
        }
      }]
    }]
  },

  /************************************************************************
  Ladder #3:

  For max load
  Deadlift ladder
  - Start at 225#/135#, add 40#/20# each successive rep
  10 minute time cap
  ************************************************************************/
  {
    name: 'Ladder #3',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time',
      },
      'time-cap': 10,
    },
    units: [{
      units: [{
        _ref: {
          id: 'deadlift',
          measures: ['load'],
        },
        rx: {
          'load': '225 + round*40',
          reps: 1
        },
      }]
    }]
  },

  /************************************************************************
  Endurance #1: How to add vests

  For time
  Run 1 mile
  Wear 10-20lb weighted vest
  ************************************************************************/
  {
    name: 'Endurance#1',
    scoring: {
      _ref: {
        id: 'least-time',
      }
    },
    units: [{
      units: [{
        _ref: {
          id: 'run',
          measures: ['distance', 'load'],
        },
        rx: {
          'distance': '1 mile',
          'load': 20,
        },
      }]
    }]
  },

  /************************************************************************
  EMOM/Death-by #1

  Every minute on the minute
  2x Back squat (185#/95#)
  Add 10 lbs each additional minute until failure
  ************************************************************************/
  {
    name: 'EMOM/Death-by #1',
    scoring: {
      _ref: {
        id: 'max-rounds/until-failure',
        sequencing: 'emom',
      }
    },
    units: [{
      units: [{
        _ref: {
          id: 'back-squat',
          measures: ['load']
        },
        rx: {
          'load': '185 + round*10'
        },
        reps: 2,
      }]
    }]
  },

  /***************************************************************** PERFECT
  EMOM/Death-by #2

  Every minute on the minute for 8 minutes
  5x Back squat (275#/150#)
  20x Push-ups
  ************************************************************************/
  {
    name: 'EMOM/Death-by #2',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time',
        sequencing: 'emom',
      },
      'time-cap': '8 minutes',
    },
    units: [{
      units: [{
        _ref: {
          id: 'back-squat',
          measures: ['load'],
        },
        rx: {
          'load': '275'
        },
        reps: 5
      }, {
        _ref: {
          '_id': 'pushup',
          measures: ['load'],
        },
        reps: 20
      }]
    }]
  }
];

module.exports = {
  'workouts': workouts,
  'movements': movements,
};
