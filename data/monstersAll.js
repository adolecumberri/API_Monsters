const allMonsters = [
  {
    name: 'angel',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 1
  },
  {
    name: 'angel+',
    evolution: true,
    type: 'ANGEL',
    grade: 2,
    id: 2
  },
  {
    name: 'angel ++',
    evolution: true,
    type: 'ANGEL',
    grade: 3,
    id: 3
  },
  {
    name: 'demon',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 4
  },
  {
    name: 'demon +',
    evolution: true,
    type: 'ANGEL',
    grade: 2,
    id: 5
  },
  {
    name: 'demon ++',
    evolution: true,
    type: 'ANGEL',
    grade: 3,
    id: 6
  },
  {
    name: 'spectro',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 7
  },
  {
    name: 'spectro +',
    evolution: true,
    type: 'ANGEL',
    grade: 2,
    id: 8
  },
  {
    name: 'spectro ++',
    evolution: true,
    type: 'ANGEL',
    grade: 3,
    id: 9
  },
  {
    name: 'naga',
    evolution: false,
    type: 'CREATURE',
    grade: 1,
    id: 10
  },
  {
    name: 'naga +',
    evolution: true,
    type: 'CREATURE',
    grade: 2,
    id: 11
  },
  {
    name: 'naga ++',
    evolution: true,
    type: 'CREATURE',
    grade: 3,
    id: 12
  },
  {
    name: 'bird hunter jr',
    evolution: false,
    type: 'HUNTER',
    grade: 1,
    id: 13
  },
  {
    name: 'bird hunter mid',
    evolution: true,
    type: 'HUNTER',
    grade: 2,
    id: 14
  },
  {
    name: 'bird hunter sr',
    evolution: true,
    type: 'HUNTER',
    grade: 3,
    id: 15
  },
  {
    name: 'naga henchman',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 16
  },
  {
    name: 'elemental',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 17
  },
  {
    name: 'false knight unarmored',
    evolution: false,
    type: 'INSECT',
    grade: 0,
    id: 18
  },
  {
    name: 'false knight',
    evolution: true,
    type: 'INSECT',
    grade: 2,
    id: 19
  },
  {
    name: 'mantis knight',
    evolution: false,
    type: 'INSECT',
    grade: 2,
    id: 20
  },
  {
    name: 'mantis',
    evolution: false,
    type: 'INSECT',
    grade: 1,
    id: 21
  },
  {
    name: 'empty mantis',
    evolution: false,
    type: 'INSECT',
    grade: 2,
    id: 22
  },
  {
    name: 'spectrum controller',
    evolution: false,
    type: 'HUNTER',
    grade: 1,
    id: 23
  },
  {
    name: 'dyadre',
    evolution: false,
    type: 'SPECTRUM',
    grade: 2,
    id: 24
  },
  {
    name: 'markoth',
    evolution: false,
    type: 'INSECT',
    grade: 3,
    id: 25
  },
  {
    name: 'garro',
    evolution: false,
    type: 'INSECT',
    grade: 3,
    id: 26
  },
  {
    name: 'forest spectrum',
    evolution: false,
    type: 'SPECTRUM',
    grade: 2,
    id: 27
  },
  {
    name: 'first path',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 28
  },
  {
    name: 'second path',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 29
  },
  {
    name: 'third path',
    evolution: false,
    type: 'SPECTRUM',
    grade: 1,
    id: 30
  },
  {
    name: 'Path colision',
    evolution: true,
    type: 'SPECTRUM',
    grade: 4,
    id: 31
  },
  {
    name: 'Baldur',
    evolution: false,
    type: 'INSECT',
    grade: 1,
    id: 32
  },
  {
    name: 'dung',
    evolution: false,
    type: 'INSECT',
    grade: 1,
    id: 33
  },
  {
    name: 'slime golem',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 34
  },
  {
    name: 'anima',
    evolution: false,
    type: 'SPECTRUM',
    grade: 0,
    id: 35
  },
  {
    name: 'house',
    evolution: false,
    type: 'GHOST',
    grade: 2,
    id: 36
  },
  {
    name: 'Magician',
    evolution: false,
    type: 'GHOST',
    grade: 2,
    id: 37
  },
  {
    name: 'ghost',
    evolution: false,
    type: 'GHOST',
    grade: 0,
    id: 38
  },
  {
    name: 'dolor',
    evolution: false,
    type: 'ANGEL',
    grade: 1,
    id: 39
  },
  {
    name: 'raptor',
    evolution: false,
    type: 'CREATURE',
    grade: 1,
    id: 40
  },
  {
    name: 'raptor boa',
    evolution: true,
    type: 'CREATURE',
    grade: 3,
    id: 41
  },
  {
    name: 'plague bird',
    evolution: false,
    type: 'CREATURE',
    grade: 1,
    id: 42
  },
  {
    name: 'garia',
    evolution: false,
    type: 'GIANT',
    grade: 3,
    id: 43
  },
  {
    name: 'psyco thrower',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 44
  },
  {
    name: 'nuncia',
    evolution: false,
    type: 'GIANT',
    grade: 3,
    id: 45
  },
  {
    name: 'mencia',
    evolution: false,
    type: 'GIANT',
    grade: 3,
    id: 46
  },
  {
    name: 'kin',
    evolution: false,
    type: 'GIANT',
    grade: 4,
    id: 47
  },
  {
    name: 'spirit tadpole',
    evolution: false,
    type: 'SPECTRUM',
    grade: 0,
    id: 48
  },
  {
    name: 'representation',
    evolution: true,
    type: 'SPECTRUM',
    grade: 2,
    id: 49
  },
  {
    name: 'hatted',
    evolution: false,
    type: 'ANGEL',
    grade: 4,
    id: 50
  },
  {
    name: 'antoleon',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 51
  },
  {
    name: 'birdo',
    evolution: false,
    type: 'CREATURE',
    grade: 0,
    id: 52
  },
  {
    name: 'birdo +',
    evolution: true,
    type: 'CREATURE',
    grade: 2,
    id: 53
  },
  {
    name: 'sandzard',
    evolution: false,
    type: 'CREATURE',
    grade: 2,
    id: 54
  },
  {
    name: 'feriante',
    evolution: true,
    type: 'HUNTER',
    grade: 2,
    id: 55
  },
  {
    name: 'secbal',
    evolution: true,
    type: 'HUNTER',
    grade: 1,
    id: 56
  },
  {
    name: 'wild hunter',
    evolution: false,
    type: 'HUNTER',
    grade: 1,
    id: 57
  },
  {
    name: 'melvin',
    evolution: false,
    type: 'ANGEL',
    grade: 4,
    id: 58
  },
  {
    name: 'dimitri',
    evolution: true,
    type: 'GHOST',
    grade: 4,
    id: 59
  }
]
