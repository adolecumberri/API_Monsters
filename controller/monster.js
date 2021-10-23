


const createMonster = (stats) => {
  let newMonster = new Monster(stats);
    
    return newMonster
  };
  
  class Monster {
      constructor(stats) {
        const keys = Object.keys(stats);

        keys.forEach((key, index) => {
            this[key] = stats[key];
        });
      }
  }