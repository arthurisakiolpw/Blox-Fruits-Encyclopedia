/** Skill data is incremental. Empty form lists mean not verified, NOT no skills. */
export type FruitMove={key:string;name:string;mastery:number};
export type FruitSkills={awakening:boolean;transformation:boolean;forms:{base:FruitMove[];awakened?:FruitMove[];transformed?:FruitMove[]};source:string};
export const fruitSkills:Record<string,FruitSkills>={
  "Rocket": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": [
        {
          "key": "Z",
          "name": "Missile Fist",
          "mastery": 1
        },
        {
          "key": "X",
          "name": "Air Strike",
          "mastery": 20
        },
        {
          "key": "C",
          "name": "Rocket Crash",
          "mastery": 50
        },
        {
          "key": "F",
          "name": "Blast Off",
          "mastery": 75
        }
      ]
    },
    "source": "https://bloxfruitswiki.org/wiki/rocket/"
  },
  "Spin": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": [
        {
          "key": "Z",
          "name": "Razor Wind",
          "mastery": 1
        },
        {
          "key": "X",
          "name": "Tornado Assault",
          "mastery": 50
        },
        {
          "key": "C",
          "name": "Air Slasher",
          "mastery": 90
        },
        {
          "key": "F",
          "name": "Helicopter Flight",
          "mastery": 25
        }
      ]
    },
    "source": "https://bloxfruitswiki.org/wiki/spin/"
  },
  "Blade": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": [
        {
          "key": "M1",
          "name": "Blade's Edge",
          "mastery": 0
        },
        {
          "key": "Z",
          "name": "Razor Cyclone",
          "mastery": 1
        },
        {
          "key": "X",
          "name": "Blade Dance",
          "mastery": 20
        }
      ]
    },
    "source": "https://bloxfruitswiki.org/wiki/blade/"
  },
  "Spring": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/spring/"
  },
  "Bomb": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/bomb/"
  },
  "Smoke": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/smoke/"
  },
  "Spike": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/spike/"
  },
  "Flame": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/flame/"
  },
  "Ice": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/ice/"
  },
  "Sand": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/sand/"
  },
  "Dark": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/dark/"
  },
  "Eagle": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/eagle/"
  },
  "Diamond": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/diamond/"
  },
  "Light": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/light/"
  },
  "Rubber": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/rubber/"
  },
  "Ghost": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/ghost/"
  },
  "Magma": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/magma/"
  },
  "Quake": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/quake/"
  },
  "Buddha": {
    "awakening": true,
    "transformation": true,
    "forms": {
      "base": [],
      "awakened": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/buddha/"
  },
  "Love": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/love/"
  },
  "Creation": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/creation/"
  },
  "Spider": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/spider/"
  },
  "Sound": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/sound/"
  },
  "Phoenix": {
    "awakening": true,
    "transformation": true,
    "forms": {
      "base": [],
      "awakened": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/phoenix/"
  },
  "Portal": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/portal/"
  },
  "Lightning": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/lightning/"
  },
  "Pain": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/pain/"
  },
  "Blizzard": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/blizzard/"
  },
  "Gravity": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/gravity/"
  },
  "Mammoth": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/mammoth/"
  },
  "T-Rex": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/t-rex/"
  },
  "Dough": {
    "awakening": true,
    "transformation": false,
    "forms": {
      "base": [],
      "awakened": []
    },
    "source": "https://bloxfruitswiki.org/wiki/dough/"
  },
  "Shadow": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/shadow/"
  },
  "Venom": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/venom/"
  },
  "Gas": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/gas/"
  },
  "Spirit": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/spirit/"
  },
  "Tiger": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/tiger/"
  },
  "Yeti": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/yeti/"
  },
  "Kitsune": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [
        {
          "key": "Z",
          "name": "Accursed Enchantment",
          "mastery": 1
        },
        {
          "key": "X",
          "name": "Tails of Burning Agony",
          "mastery": 50
        },
        {
          "key": "C",
          "name": "Fox Fire Disruption",
          "mastery": 100
        },
        {
          "key": "V",
          "name": "Transformation",
          "mastery": 300
        },
        {
          "key": "F",
          "name": "Wild Assault",
          "mastery": 200
        }
      ],
      "transformed": [
        {
          "key": "M1",
          "name": "Tap",
          "mastery": 0
        },
        {
          "key": "Z",
          "name": "Accursed Enchantment",
          "mastery": 1
        },
        {
          "key": "X",
          "name": "Tails of Burning Agony",
          "mastery": 50
        },
        {
          "key": "C",
          "name": "Fox Fire Disruption",
          "mastery": 100
        },
        {
          "key": "V",
          "name": "Transformation",
          "mastery": 300
        },
        {
          "key": "F",
          "name": "Wild Assault",
          "mastery": 200
        }
      ]
    },
    "source": "https://bloxfruitswiki.org/wiki/kitsune/"
  },
  "Control": {
    "awakening": false,
    "transformation": false,
    "forms": {
      "base": []
    },
    "source": "https://bloxfruitswiki.org/wiki/control/"
  },
  "Magnet": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [
        {
          "key": "M1",
          "name": "Metallic Jabs",
          "mastery": 0
        },
        {
          "key": "Z",
          "name": "Scrap Arsenal",
          "mastery": 1
        },
        {
          "key": "F",
          "name": "Polarity Drive",
          "mastery": 75
        },
        {
          "key": "X",
          "name": "Magnetic Overcharge",
          "mastery": 100
        },
        {
          "key": "C",
          "name": "Polarizing Drop",
          "mastery": 225
        },
        {
          "key": "V",
          "name": "Maximum Overdrive",
          "mastery": 300
        }
      ],
      "transformed": [
        {
          "key": "Z",
          "name": "Scrap Arsenal",
          "mastery": 1
        },
        {
          "key": "F",
          "name": "Polarity Drive",
          "mastery": 75
        },
        {
          "key": "X",
          "name": "Magnetic Overcharge",
          "mastery": 100
        },
        {
          "key": "C",
          "name": "Polarizing Drop",
          "mastery": 225
        },
        {
          "key": "V",
          "name": "Maximum Overdrive",
          "mastery": 300
        }
      ]
    },
    "source": "https://bloxfruitswiki.org/wiki/magnet/"
  },
  "Dragon": {
    "awakening": false,
    "transformation": true,
    "forms": {
      "base": [],
      "transformed": []
    },
    "source": "https://bloxfruitswiki.org/wiki/dragon/"
  }
};
