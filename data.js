///////////////////////////////////////////////////////////////////////
// The Girls
// http://www.crossfit.com/cf-info/faq.html
///////////////////////////////////////////////////////////////////////

/**********************************************************************
ANGIE

100 Pull-ups
100 Push-ups
100 Sit-ups
100 Squats
**********************************************************************/
var equipments = [
  'pullup',
  'barbell',
  'dumbell',
  'rope',
  'jump-rope'
];

var excercises = [{
  id: 'pullup',
  equipments: ['pullup-rig']
}, {
  id: 'squat',
  equipments: ['barbell', 'dumbell', 'Kettlebell']
}];

var wods = [{
    name: 'Angie',
    scoring: {
      _ref: {
        id: 'least-time',
        cat: 'fixed-work-variable-time'
      }
    },
    // TODO rename to 'blocks'
    units: [{
      // TODO rename to 'movements'
      units: [{
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 100
      }, {
        _ref: {
          id: 'pushup',
          measures: ['load'],
        },
        reps: 100
      }, {
        _ref: {
          id: 'situp',
          measures: ['load'],
        },
        reps: 100
      }, {
        _ref: {
          id: 'squat',
          measures: ['load'],
        },
        reps: 100
      }]
    }]
  },

  /**********************************************************************
  Barbara

  5X
  20 Pull-ups
  30 Push-ups
  40 Sit-ups
  50 Squats
  Rest precisely three minutes between each round.
  **********************************************************************/
  {
    name: 'Barbara',
    scoring: {
      _ref: {
        id: 'least-time',
      },
      // TODO what to do about that?
      'rest-between-rounds': '3 minutes'
    },
    units: [{
      rounds: 5,
      units: [{
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 20
      }, {
        _ref: {
          id: 'pushup',
          measures: ['load'],
        },
        reps: 30
      }, {
        _ref: {
          id: 'situp',
          measures: ['load'],
        },
        reps: 40
      }, {
        _ref: {
          id: 'squat',
          measures: ['load'],
        },
        reps: 50
      }]
    }]
  },

  /**********************************************************************
  Chelsea

  Each min on the min for 30 min
  5 Pull-ups
  10 Push-ups
  15 Squats
  **********************************************************************/
  {
    name: 'Chelsea',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time',
        sequencing: 'emom'
      },
      'time-cap': '30 mins',
    },
    units: [{
      units: [{
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 5
      }, {
        _ref: {
          id: 'pushup',
          measures: ['load'],
        },
        reps: 10
      }, {
        _ref: {
          id: 'squat',
          measures: ['load'],
        },
        reps: 15
      }]
    }]
  },

  /**********************************************************************
  Cindy

  5 Pull-ups
  10 Push-ups
  15 Squats

  As many rounds as possible in 20 min
  **********************************************************************/
  {
    name: 'Cindy',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time',
      },
      'time-cap': '20 mins',
    },
    units: [{
      units: [{
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 5
      }, {
        _ref: {
          id: 'pushup',
          measures: ['load'],
        },
        reps: 10
      }, {
        _ref: {
          id: 'squat',
          measures: ['load'],
        },
        reps: 15
      }]
    }]
  },

  /**********************************************************************
  Diane

  Deadlift 225 lbs
  Handstand push-ups

  21-15-9 reps, for time
  **********************************************************************/
  {
    name: 'Diane',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: '3',
      units: [{
        _ref: {
          id: 'deadlift',
          measures: ['load'],
        },
        rx: {
          'load': 225,
        },
        reps: '21 - 6*round'
      }, {
        _ref: {
          id: 'handstand-pushup',
          measures: ['load'],
        },
        reps: '21 - 6*round'
      }]
    }]
  },

  /**********************************************************************
  Elizabeth

  Clean 135 lbs
  Ring Dips

  21-15-9 reps, for time
  **********************************************************************/
  {
    name: 'Elizabeth',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: '3',
      units: [{
        _ref: {
          id: 'clean',
          measures: ['load'],
        },
        rx: {
          'load': 135,
        },
        reps: '21 - 6*round'
      }, {
        _ref: {
          id: 'ring-dips',
          measures: ['load'],
        },
        reps: '21 - 6*round'
      }]
    }]
  },

  /**********************************************************************
  Fran

  Thruster 95 lbs
  Pull-ups

  21-15-9 reps, for time
  **********************************************************************/
  {
    name: 'Fran',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: '3',
      units: [{
        _ref: {
          id: 'Thruster',
          measures: ['load'],
        },
        rx: {
          'load': 135,
        },
        reps: '21 - 6*round'
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: '21 - 6*round'
      }]
    }]
  },

  /**********************************************************************
  Grace

  Clean and Jerk 135 lbs

  30 reps for time
  **********************************************************************/
  {
    name: 'Grace',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      units: [{
        _ref: {
          id: 'clean-n-jerk',
          measures: ['load'],
        },
        rx: {
          'load': 135,
        },
        reps: 30
      }]
    }]
  },

  /**********************************************************************
  Helen

  3X
  400 meter run
  1.5 pood Kettlebell swing x 21
  Pull-ups 12 reps
  **********************************************************************/
  {
    name: 'Helen',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: 3,
      units: [{
        _ref: {
          id: 'run',
          measures: ['distance', 'load'],
        },
        rx: {
          'distance': '400',
        },
      }, {
        _ref: {
          id: 'kettlebell-swing',
          measures: ['load'],
        },
        rx: {
          'load': '1.5 poods',
        },
        reps: 21,
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 12,
      }]
    }]
  },

  /**********************************************************************
  Isabel

  Snatch 135 pounds

  30 reps for time
  **********************************************************************/
  {
    name: 'Isabel',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      units: [{
        _ref: {
          id: 'snatch',
          measures: ['load'],
        },
        rx: {
          'load': 135,
        },
        reps: 30
      }]
    }]
  },

  /**********************************************************************
  Jackie

  1000 meter row
  Thruster 45 lbs (50 reps)
  Pull-ups (30 reps)
  **********************************************************************/
  {
    name: 'Jackie',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: 3,
      units: [{
        _ref: {
          id: 'row',
          measures: ['distance', 'calories'],
        },
        rx: {
          'distance': '1000 meter',
        },
      }, {
        _ref: {
          id: 'thruster',
          measures: ['load'],
        },
        rx: {
          'load': 45,
        },
        reps: 50,
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 30,
      }]
    }]
  },

  /**********************************************************************
  Karen

  Wall-ball 150 shots
  **********************************************************************/
  {
    name: 'Karen',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      units: [{
        _ref: {
          id: 'wall-ball',
          measures: ['load'],
        },
        rx: {
          'load': 24,
        },
        reps: 150
      }]
    }]
  },

  /**********************************************************************
  Linda

  Deadlift 1 1/2 BW
  Bench BW
  Clean 3/4 BW

  10/9/8/7/6/5/4/3/2/1 rep
  rounds for time
  **********************************************************************/
  {
    name: 'Linda',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: 10,
      units: [{
        _ref: {
          id: 'deadlift',
          measures: ['load'],
        },
        rx: {
          'load': '1.5 * BW',
        },
        reps: '10 - round'
      }, {
        _ref: {
          id: 'bench-press',
          measures: ['load'],
        },
        rx: {
          'load': 'BW',
        },
        reps: '10 - round'
      }, {
        _ref: {
          id: 'clean',
          measures: ['load'],
        },
        rx: {
          'load': '0.75 * BW',
        },
        reps: '10 - round'
      }]
    }]
  },

  /**********************************************************************
  Mary

  5 Handstand push-ups
  10 1-legged squats
  15 Pull-ups

  As many rounds as possible in 20 min
  **********************************************************************/
  {
    name: 'Mary',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time',
      },
      'time-cap': '20 mins',
    },
    units: [{
      units: [{
        _ref: {
          id: 'handstand-pushup',
          measures: ['load'],
        },
        reps: 5
      }, {
        _ref: {
          id: 'one-legged-squat',
          measures: ['load'],
        },
        reps: 10
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 15
      }]
    }]
  },

  /**********************************************************************
  Nancy

  400 meter run
  Overhead squat 95 lbs x 15

  5 rounds for time
  **********************************************************************/
  {
    name: 'Nancy',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: 5,
      units: [{
        _ref: {
          id: 'run',
          measures: ['distance', 'load'],
        },
        rx: {
          'distance': '400',
        },
      }, {
        _ref: {
          id: 'overhead-squat',
          measures: ['load'],
        },
        rx: {
          'load': '95',
        },
        reps: 15,
      }]
    }]
  },

  ///////////////////////////////////////////////////////////////////////
  // New Girls
  // http://www.crossfit.com/cf-info/faq.html
  ///////////////////////////////////////////////////////////////////////

  /************************************************************ PERFECT
  Annie

  Double-unders
  Sit-ups

  50-40-30-20 and 10 rep rounds; for time
  *******************************************************************/
  {
    name: 'Annie',
    scoring: {
      _ref: {
        id: 'least-time',
      }
    },
    units: [{
      rounds: 5,
      units: [{
        _ref: {
          id: 'double-unders',
          measures: ['load']
        },
        reps: '50 - round*10'
      }, {
        'ref': {
          id: 'situp',
          measures: ['load']
        },
        reps: '50 - round*10'
      }]
    }]
  },

  /**********************************************************************
  Eva

  Run 800 meters
  2 pood KB swing, 30 reps
  30 pullups

  5 rounds for time
  **********************************************************************/
  {
    name: 'Eva',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: 5,
      units: [{
        _ref: {
          id: 'run',
          measures: ['distance', 'load'],
        },
        rx: {
          'distance': '800',
        },
      }, {
        _ref: {
          id: 'kettlebell-swing',
          measures: ['load'],
        },
        rx: {
          'load': '2 pood',
        },
        reps: 30,
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 30,
      }]
    }]
  },

  /**********************************************************************
  Kelly

  Run 400 meters
  30 box jump, 24 inch box
  30 Wall ball shots, 20 pound ball

  5 rounds for time
  **********************************************************************/
  {
    name: 'Kelly',
    scoring: {
      _ref: {
        id: 'least-time',
      },
    },
    units: [{
      rounds: 5,
      units: [{
        _ref: {
          id: 'run',
          measures: ['distance', 'load'],
        },
        rx: {
          'distance': '400',
        },
      }, {
        _ref: {
          id: 'box-jump',
          measures: ['load', 'height'],
        },
        rx: {
          'height': 24,
        },
        reps: 30,
      }, {
        _ref: {
          id: 'wallball',
          measures: ['height', 'load'],
        },
        rx: {
          'load': 20,
        },
        reps: 30,
      }]
    }]
  },

  /**********************************************************************
  Lynne

  Bodyweight bench press (e.g., same amount on bar as you weigh)
  pullups

  5 rounds for max reps. There is NO time component to this WOD, although some versions Rx the movements as a couplet.
  **********************************************************************/
  {
    name: 'Lynne',
    scoring: {
      _ref: {
        id: 'max-reps',
      }
    },
    units: [{
      rounds: 5,
      units: [{
        _ref: {
          id: 'bench-press',
          measures: ['load']
        },
        rx: {
          'load': 'BW'
        },
        reps: 'MAX',
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load'],
        },
        reps: 'MAX'
      }]
    }]
  },

  /**********************************************************************
  Nicole

  Run 400 meters
  Max rep Pull-ups

  As many rounds as possible in 20 minutes.
  Note number of pull-ups completed for each round.
  **********************************************************************/
  {
    name: 'Nicole',
    scoring: {
      _ref: {
        id: 'max-rounds/per-time'
      },
      'time-cap': '20 minutes',
    },
    units: [{
      units: [{
        _ref: {
          id: 'run',
          measures: ['distance', 'load']
        },
        rx: {
          'distance': '400 meter'
        },
      }, {
        _ref: {
          id: 'pullup',
          measures: ['load']
        },
        reps: 'MAX',
      }]
    }]
  },

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
  // www.woddrive.com/list-of-crossfit-wods.html
  /////////////////////////////////////////////////////////////////////

  /************************************************************ PERFECT
  Weightlifting #1

  Back squat
  3 x8(75 % 1 RM), 2 x3(85 % ), 1 x1(95 % )
  *******************************************************************/
  {
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
      // Separate excercise
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
        sequencing: 'timed-rouds',
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
          'load': 135
        },
        reps: '2 + round*2',
      }, {
        _ref: {
          id: 'toes-to-bar',
          measures: ['load'],
        },
        reps: '2 + round*2',
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
          'load': '225 + round*40'
        },
        'rep': '1'
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
