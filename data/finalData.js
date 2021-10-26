const finalData = [
  {
    name: 'angel',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 1,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.18,
    critDmg: 1,
    def: 18.39,
    dmg: 12.4,
    evasion: 0.15,
    hp: 126,
    reg: 0.72
  },
  {
    name: 'angel+',
    evolution: true,
    type: 'ANGEL',
    grade: 2,
    id: 2,
    accuracy: 0.9,
    att_interval: 10,
    crit: 0.24,
    critDmg: 1,
    def: 24.15,
    dmg: 21.7,
    evasion: 0.18,
    hp: 147,
    reg: 0.78
  },
  {
    name: 'angel ++',
    evolution: true,
    type: 'ANGEL',
    grade: 3,
    id: 3,
    accuracy: 0.94,
    att_interval: 11,
    crit: 0.27,
    critDmg: 1,
    def: 24.15,
    dmg: 32.54,
    evasion: 0.2,
    hp: 147,
    reg: 0.84
  },
  {
    name: 'demon',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 4,
    accuracy: 0.85,
    att_interval: 8,
    crit: 0.3,
    critDmg: 1,
    def: 4,
    dmg: 9.6,
    evasion: 0.32,
    hp: 50,
    reg: 0.72
  },
  {
    name: 'demon +',
    evolution: true,
    type: 'ANGEL',
    grade: 2,
    id: 5,
    accuracy: 0.9,
    att_interval: 9,
    crit: 0.4,
    critDmg: 1.12,
    def: 5.25,
    dmg: 16.8,
    evasion: 0.38,
    hp: 58,
    reg: 0.78
  },
  {
    name: 'demon ++',
    evolution: true,
    type: 'ANGEL',
    grade: 3,
    id: 6,
    accuracy: 0.94,
    att_interval: 9,
    crit: 0.45,
    critDmg: 1.12,
    def: 5.25,
    dmg: 25.2,
    evasion: 0.43,
    hp: 58,
    reg: 0.84
  },
  {
    name: 'spectro',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 7,
    accuracy: 0.67,
    att_interval: 8,
    crit: 0.31,
    critDmg: 1,
    def: 8,
    dmg: 9.6,
    evasion: 0.24,
    hp: 114,
    reg: 1.06
  },
  {
    name: 'spectro +',
    evolution: true,
    type: 'ANGEL',
    grade: 2,
    id: 8,
    accuracy: 0.71,
    att_interval: 9,
    crit: 0.41,
    critDmg: 1.11,
    def: 10.5,
    dmg: 16.8,
    evasion: 0.28,
    hp: 133,
    reg: 1.15
  },
  {
    name: 'spectro ++',
    evolution: true,
    type: 'ANGEL',
    grade: 3,
    id: 9,
    accuracy: 0.74,
    att_interval: 10,
    crit: 0.46,
    critDmg: 1.11,
    def: 10.5,
    dmg: 25.2,
    evasion: 0.32,
    hp: 133,
    reg: 1.24
  },
  {
    name: 'naga',
    evolution: false,
    type: 'CREATURE',
    grade: 1,
    id: 10,
    accuracy: 0.8,
    att_interval: 8,
    crit: 0.09,
    critDmg: 1,
    def: 4,
    dmg: 14,
    evasion: 0.11,
    hp: 168,
    reg: 0.96
  },
  {
    name: 'naga +',
    evolution: true,
    type: 'CREATURE',
    grade: 2,
    id: 11,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.12,
    critDmg: 1,
    def: 5.25,
    dmg: 24.5,
    evasion: 0.13,
    hp: 196,
    reg: 1.04
  },
  {
    name: 'naga ++',
    evolution: true,
    type: 'CREATURE',
    grade: 3,
    id: 12,
    accuracy: 0.89,
    att_interval: 10,
    crit: 0.13,
    critDmg: 1,
    def: 5.25,
    dmg: 36.75,
    evasion: 0.15,
    hp: 196,
    reg: 1.12
  },
  {
    name: 'bird hunter jr',
    evolution: false,
    type: 'HUNTER',
    grade: 1,
    id: 13,
    accuracy: 0.28,
    att_interval: 20,
    crit: 0.48,
    critDmg: 2.59,
    def: 4,
    dmg: 17.2,
    evasion: 0.07,
    hp: 90,
    reg: 0.48
  },
  {
    name: 'bird hunter mid',
    evolution: true,
    type: 'HUNTER',
    grade: 2,
    id: 14,
    accuracy: 0.3,
    att_interval: 23,
    crit: 0.64,
    critDmg: 3.33,
    def: 5.25,
    dmg: 30.1,
    evasion: 0.09,
    hp: 105,
    reg: 0.52
  },
  {
    name: 'bird hunter sr',
    evolution: true,
    type: 'HUNTER',
    grade: 3,
    id: 15,
    accuracy: 0.31,
    att_interval: 24,
    crit: 0.72,
    critDmg: 3.33,
    def: 5.25,
    dmg: 45.15,
    evasion: 0.1,
    hp: 105,
    reg: 0.56
  },
  {
    name: 'naga henchman',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 16,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.12,
    critDmg: 1,
    def: 5.25,
    dmg: 24.5,
    evasion: 0.13,
    hp: 196,
    reg: 1.04
  },
  {
    name: 'elemental',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 17,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.18,
    critDmg: 1,
    def: 18.39,
    dmg: 12.4,
    evasion: 0.15,
    hp: 126,
    reg: 0.72
  },
  {
    name: 'false knight unarmored',
    evolution: false,
    type: 'INSECT',
    grade: 0,
    id: 18,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.06,
    critDmg: 1,
    def: 5.6,
    dmg: 4,
    evasion: 0.07,
    hp: 84,
    reg: 0.72
  },
  {
    name: 'false knight',
    evolution: true,
    type: 'INSECT',
    grade: 2,
    id: 19,
    accuracy: 0.94,
    att_interval: 13,
    crit: 0,
    critDmg: 1,
    def: 39.9,
    dmg: 11.2,
    evasion: 0.04,
    hp: 156,
    reg: 1.04
  },
  {
    name: 'mantis knight',
    evolution: false,
    type: 'INSECT',
    grade: 2,
    id: 20,
    accuracy: 0.85,
    att_interval: 6,
    crit: 0.32,
    critDmg: 1.17,
    def: 6.3,
    dmg: 16.1,
    evasion: 0.3,
    hp: 123,
    reg: 0.78
  },
  {
    name: 'mantis',
    evolution: false,
    type: 'INSECT',
    grade: 1,
    id: 21,
    accuracy: 0.85,
    att_interval: 8,
    crit: 0.3,
    critDmg: 1,
    def: 4,
    dmg: 9.6,
    evasion: 0.32,
    hp: 50,
    reg: 0.72
  },
  {
    name: 'empty mantis',
    evolution: false,
    type: 'INSECT',
    grade: 2,
    id: 22,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.12,
    critDmg: 1,
    def: 5.25,
    dmg: 24.5,
    evasion: 0.13,
    hp: 196,
    reg: 1.04
  },
  {
    name: 'spectrum controller',
    evolution: false,
    type: 'HUNTER',
    grade: 1,
    id: 23,
    accuracy: 0.85,
    att_interval: 8,
    crit: 0.12,
    critDmg: 1,
    def: 22.4,
    dmg: 11.6,
    evasion: 0.07,
    hp: 144,
    reg: 0.96
  },
  {
    name: 'dyadre',
    evolution: false,
    type: 'SPECTRUM',
    grade: 2,
    id: 24,
    accuracy: 0.9,
    att_interval: 10,
    crit: 0.24,
    critDmg: 1,
    def: 24.15,
    dmg: 21.7,
    evasion: 0.18,
    hp: 147,
    reg: 0.78
  },
  {
    name: 'markoth',
    evolution: false,
    type: 'INSECT',
    grade: 3,
    id: 25,
    accuracy: 0.89,
    att_interval: 11,
    crit: 0.18,
    critDmg: 1,
    def: 18.89,
    dmg: 27.3,
    evasion: 0.2,
    hp: 145,
    reg: 0.84
  },
  {
    name: 'garro',
    evolution: false,
    type: 'INSECT',
    grade: 3,
    id: 26,
    accuracy: 0.98,
    att_interval: 14,
    crit: 0,
    critDmg: 1,
    def: 39.9,
    dmg: 16.8,
    evasion: 0.05,
    hp: 156,
    reg: 1.12
  },
  {
    name: 'forest spectrum',
    evolution: false,
    type: 'SPECTRUM',
    grade: 2,
    id: 27,
    accuracy: 0.71,
    att_interval: 9,
    crit: 0.41,
    critDmg: 1.11,
    def: 10.5,
    dmg: 16.8,
    evasion: 0.28,
    hp: 133,
    reg: 1.15
  },
  {
    name: 'first path',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 28,
    accuracy: 0.8,
    att_interval: 5,
    crit: 0.24,
    critDmg: 1,
    def: 4.8,
    dmg: 9.2,
    evasion: 0.25,
    hp: 105,
    reg: 0.72
  },
  {
    name: 'second path',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 29,
    accuracy: 0.28,
    att_interval: 20,
    crit: 0.48,
    critDmg: 2.59,
    def: 4,
    dmg: 17.2,
    evasion: 0.07,
    hp: 90,
    reg: 0.48
  },
  {
    name: 'third path',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 30,
    accuracy: 0.85,
    att_interval: 8,
    crit: 0.3,
    critDmg: 1,
    def: 4,
    dmg: 9.6,
    evasion: 0.32,
    hp: 50,
    reg: 0.72
  },
  {
    name: 'Path colision',
    evolution: true,
    type: 'SPECTRUM',
    grade: 4,
    id: 31,
    accuracy: 1,
    att_interval: 12,
    crit: 0.55,
    critDmg: 1.5,
    def: 6.25,
    dmg: 28.8,
    evasion: 0.49,
    hp: 75,
    reg: 0.96
  },
  {
    name: 'Baldur',
    evolution: false,
    type: 'INSECT',
    grade: 1,
    id: 32,
    accuracy: 0.89,
    att_interval: 12,
    crit: 0,
    critDmg: 1,
    def: 30.4,
    dmg: 6.4,
    evasion: 0.03,
    hp: 134,
    reg: 0.96
  },
  {
    name: 'dung',
    evolution: false,
    type: 'INSECT',
    grade: 1,
    id: 33,
    accuracy: 0.89,
    att_interval: 12,
    crit: 0,
    critDmg: 1,
    def: 30.4,
    dmg: 6.4,
    evasion: 0.03,
    hp: 134,
    reg: 0.96
  },
  {
    name: 'slime golem',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 34,
    accuracy: 0.9,
    att_interval: 9,
    crit: 0.16,
    critDmg: 1,
    def: 29.4,
    dmg: 20.3,
    evasion: 0.09,
    hp: 168,
    reg: 1.04
  },
  {
    name: 'anima',
    evolution: false,
    type: 'SPECTRUM',
    grade: 0,
    id: 35,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.06,
    critDmg: 1,
    def: 5.6,
    dmg: 4,
    evasion: 0.07,
    hp: 84,
    reg: 0.72
  },
  {
    name: 'house',
    evolution: false,
    type: 'GHOST',
    grade: 2,
    id: 36,
    accuracy: 0.94,
    att_interval: 13,
    crit: 0,
    critDmg: 1,
    def: 39.9,
    dmg: 11.2,
    evasion: 0.04,
    hp: 156,
    reg: 1.04
  },
  {
    name: 'Magician',
    evolution: false,
    type: 'GHOST',
    grade: 2,
    id: 37,
    accuracy: 0.71,
    att_interval: 9,
    crit: 0.41,
    critDmg: 1.11,
    def: 10.5,
    dmg: 16.8,
    evasion: 0.28,
    hp: 133,
    reg: 1.15
  },
  {
    name: 'ghost',
    evolution: false,
    type: 'GHOST',
    grade: 0,
    id: 38,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.06,
    critDmg: 1,
    def: 5.6,
    dmg: 4,
    evasion: 0.07,
    hp: 84,
    reg: 0.72
  },
  {
    name: 'dolor',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 39,
    accuracy: 0.8,
    att_interval: 8,
    crit: 0.09,
    critDmg: 1,
    def: 4,
    dmg: 14,
    evasion: 0.11,
    hp: 168,
    reg: 0.96
  },
  {
    name: 'raptor',
    evolution: false,
    type: 'CREATURE',
    grade: 1,
    id: 40,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.18,
    critDmg: 1,
    def: 18.39,
    dmg: 12.4,
    evasion: 0.15,
    hp: 126,
    reg: 0.72
  },
  {
    name: 'raptor boa',
    evolution: true,
    type: 'CREATURE',
    grade: 3,
    id: 41,
    accuracy: 0.94,
    att_interval: 10,
    crit: 0.18,
    critDmg: 1,
    def: 29.4,
    dmg: 30.45,
    evasion: 0.1,
    hp: 168,
    reg: 1.12
  },
  {
    name: 'plague bird',
    evolution: false,
    type: 'CREATURE',
    grade: 1,
    id: 42,
    accuracy: 0.8,
    att_interval: 5,
    crit: 0.24,
    critDmg: 1,
    def: 4.8,
    dmg: 9.2,
    evasion: 0.25,
    hp: 105,
    reg: 0.72
  },
  {
    name: 'garia',
    evolution: false,
    type: 'GIANT',
    grade: 3,
    id: 43,
    accuracy: 0.89,
    att_interval: 6,
    crit: 0.36,
    critDmg: 1.17,
    def: 6.3,
    dmg: 24.15,
    evasion: 0.34,
    hp: 123,
    reg: 0.84
  },
  {
    name: 'psyco thrower',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 44,
    accuracy: 0.3,
    att_interval: 23,
    crit: 0.64,
    critDmg: 3.33,
    def: 5.25,
    dmg: 30.1,
    evasion: 0.09,
    hp: 105,
    reg: 0.52
  },
  {
    name: 'nuncia',
    evolution: false,
    type: 'GIANT',
    grade: 3,
    id: 45,
    accuracy: 0.89,
    att_interval: 10,
    crit: 0.13,
    critDmg: 1,
    def: 5.25,
    dmg: 36.75,
    evasion: 0.15,
    hp: 196,
    reg: 1.12
  },
  {
    name: 'mencia',
    evolution: false,
    type: 'GIANT',
    grade: 3,
    id: 46,
    accuracy: 0.89,
    att_interval: 11,
    crit: 0.18,
    critDmg: 1,
    def: 18.89,
    dmg: 27.3,
    evasion: 0.2,
    hp: 145,
    reg: 0.84
  },
  {
    name: 'kin',
    evolution: false,
    type: 'GIANT',
    grade: 4,
    id: 47,
    accuracy: 0.34,
    att_interval: 32,
    crit: 0.88,
    critDmg: 4.44,
    def: 6.25,
    dmg: 51.6,
    evasion: 0.11,
    hp: 135,
    reg: 0.64
  },
  {
    name: 'spirit tadpole',
    evolution: false,
    type: 'SPECTRUM',
    grade: 0,
    id: 48,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.06,
    critDmg: 1,
    def: 5.6,
    dmg: 4,
    evasion: 0.07,
    hp: 84,
    reg: 0.72
  },
  {
    name: 'representation',
    evolution: true,
    type: 'SPECTRUM',
    grade: 2,
    id: 49,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.12,
    critDmg: 1,
    def: 5.25,
    dmg: 24.5,
    evasion: 0.13,
    hp: 196,
    reg: 1.04
  },
  {
    name: 'hatted',
    evolution: false,
    type: 'ANGEL',
    grade: 4,
    id: 50,
    accuracy: 0.81,
    att_interval: 13,
    crit: 0.57,
    critDmg: 1.48,
    def: 12.5,
    dmg: 28.8,
    evasion: 0.36,
    hp: 171,
    reg: 1.42
  },
  {
    name: 'antoleon',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 51,
    accuracy: 0.9,
    att_interval: 10,
    crit: 0.24,
    critDmg: 1,
    def: 24.15,
    dmg: 21.7,
    evasion: 0.18,
    hp: 147,
    reg: 0.78
  },
  {
    name: 'birdo',
    evolution: false,
    type: 'CREATURE',
    grade: 0,
    id: 52,
    accuracy: 0.85,
    att_interval: 9,
    crit: 0.06,
    critDmg: 1,
    def: 5.6,
    dmg: 4,
    evasion: 0.07,
    hp: 84,
    reg: 0.72
  },
  {
    name: 'birdo +',
    evolution: true,
    type: 'CREATURE',
    grade: 2,
    id: 53,
    accuracy: 0.85,
    att_interval: 6,
    crit: 0.32,
    critDmg: 1.17,
    def: 6.3,
    dmg: 16.1,
    evasion: 0.3,
    hp: 123,
    reg: 0.78
  },
  {
    name: 'sandzard',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 54,
    accuracy: 0.9,
    att_interval: 10,
    crit: 0.24,
    critDmg: 1,
    def: 24.15,
    dmg: 21.7,
    evasion: 0.18,
    hp: 147,
    reg: 0.78
  },
  {
    name: 'feriante',
    evolution: true,
    type: 'HUNTER',
    grade: 2,
    id: 55,
    accuracy: 0.85,
    att_interval: 10,
    crit: 0.16,
    critDmg: 1,
    def: 18.89,
    dmg: 18.2,
    evasion: 0.18,
    hp: 145,
    reg: 0.78
  },
  {
    name: 'secbal',
    evolution: true,
    type: 'HUNTER',
    grade: 1,
    id: 56,
    accuracy: 0.8,
    att_interval: 5,
    crit: 0.24,
    critDmg: 1,
    def: 4.8,
    dmg: 9.2,
    evasion: 0.25,
    hp: 105,
    reg: 0.72
  },
  {
    name: 'wild hunter',
    evolution: false,
    type: 'HUNTER',
    grade: 1,
    id: 57,
    accuracy: 0.8,
    att_interval: 9,
    crit: 0.12,
    critDmg: 1,
    def: 14.4,
    dmg: 10.4,
    evasion: 0.15,
    hp: 124,
    reg: 0.72
  },
  {
    name: 'melvin',
    evolution: false,
    type: 'ANGEL',
    grade: 4,
    id: 58,
    accuracy: 1,
    att_interval: 13,
    crit: 0.22,
    critDmg: 1.2,
    def: 35,
    dmg: 34.79,
    evasion: 0.11,
    hp: 216,
    reg: 1.28
  },
  {
    name: 'dimitri',
    evolution: true,
    type: 'GHOST',
    grade: 4,
    id: 59,
    accuracy: 0.97,
    att_interval: 13,
    crit: 0.16,
    critDmg: 1.2,
    def: 6.25,
    dmg: 42,
    evasion: 0.17,
    hp: 252,
    reg: 1.28
  }
]
