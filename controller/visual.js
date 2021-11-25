let generalGrade = 0
let generalMonsterNumber = 100000
let monsters = []
let monstersAfterFight = []
const variation = 0.15

const createInput = document.getElementById('create')
const monstersDiv = document.getElementById('monsters')

function gradeSelected({ value }) {
  generalGrade = value
  updateCreateInput()
}

function numberSelected({ value }) {
  generalMonsterNumber = value
  updateCreateInput()
}

function updateCreateInput() {
  // debugger;
  createInput.disabled = !(generalGrade >= 0 && generalMonsterNumber > 0)
}

// pinta info en el div de los monstruos
function showMonsters() {
  const types = grades[`grade${generalGrade}`].map(m => m.name)
  const solution = []

  const score = loadStats()
  console.log(score)

  types.forEach(type =>
    solution.push({
      name: type,
      number: monstersAfterFight.filter(m => m.name === type).length
    })
  )

  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'monster-parent-div')

  solution.forEach(m => {
    const porcentaje = (score[m.name].wins / score[m.name].total) * 100

    newDiv.innerHTML += `
        <div class="monster-div" id="${m.name}">
            ${m.name}: ${score[m.name] && `<span> ${score[m.name].wins
      }/${score[m.name].total
      } - <span class="${'color ' + percentagecolor(porcentaje)
      }">${!isNaN(porcentaje) ? Math.floor(porcentaje * 100) / 100 + '%' : 'NS/NC'
      } <span></span>`}
        </div>
        <br/>
        `
  })
  // monstersDiv.appendChild(null);
  // monstersDiv.parentNode.removeChild(monstersDiv);
  monstersDiv.innerHTML = ''
  monstersDiv.appendChild(newDiv)
}

// cargo stats de winrates.
function loadStats() {
  const types = grades[`grade${generalGrade}`].map(m => m.name)
  const solution = {}

  types.forEach(m => {
    solution[m] = { total: 0, wins: 0 }
  })

  monstersAfterFight.forEach(m => {
    solution[m.name].total++
    solution[m.name].wins = m.kills > 0 ? solution[m.name].wins + 1 : solution[m.name].wins
  })

  return solution
}

// crea monstruos segun el grado.
// crea las peleas
// y revisa que nadie se quede sin combatir
function createRandMonstersByGrade() {
  monstersAfterFight = [] // reinicio var global
  const solution = []
  //Explicación por si miguel lee esto:
  // selecciono un grado de una variable que creo en el fondo de index.html.
  const gradeSelected = grades[`grade${generalGrade}`]


  // debugger;
  for (let i = 0; i < generalMonsterNumber; i++) {
    //de atras a alante: cojo un numero random desde 0 a la longitud del grado seleccionado. 
    //ej: grado 0: 0->5, grado 1: 0 -> 18.
    // entonces, del gradoSelected, que es una lista, cojo el monstruo que corresponda.
    // y genero unas estadisticas variadas de ese monstuo seleccionado.
    // despues creo un monstruo con esas estadisticas variadas en la lista llamada "solucion".
    // despues solución se inserta en "monstruos" que son los que van a pelear entre ellos.
    const customStats = createStatsVariation(gradeSelected[Math.floor(rand(gradeSelected.length))], variation)
    solution.push(createMonster(customStats))
  }

  monsters = solution

  // let executePvp = () => {

  while (monsters.length) {
    const mon1 = monsters.splice(monsters.length * Math.random() | 0, 1)[0]
    const mon2 = monsters.splice(monsters.length * Math.random() | 0, 1)[0]

    // TODO: eliminar. useless.
    if (!mon1 || !mon2) {
      debugger
    }

    const result = pvp(mon1, mon2)
    if (result === 0) {
      // empate. los devuelvo a la cola
      monsters.push(mon1, mon2)
    } else {
      monstersAfterFight.push(mon1, mon2)
    }
  }

  // }

  // executePvp();

  // let flag = false;
  // while (!flag) {
  //     let vivosSinMatar = monstersAfterFight.filter(m => !m.isDead && m.kills === 0);
  //     if (vivosSinMatar.length) {
  //         monsters.push(...vivosSinMatar);
  //     } else {
  //         flag = true;
  //     }
  //     executePvp();
  // }

  showMonsters()
}





function showAllMonsters() {

  let gradeKey = Object.keys(grades);
  let solution = [];
  let score = {
    grade0: [],
    grade1: [],
    grade2: [],
    grade3: [],
    grade4: [],
  };
  gradeKey.forEach(currentGrade => {
    const types = grades[currentGrade].map(m => m.name);


      const newScore = {}

      types.forEach(m => {
        newScore[m] = { total: 0, wins: 0 }
      })
    
      monstersAfterFight[currentGrade].forEach(m => {
        newScore[m.name].total++
        newScore[m.name].wins = m.kills > 0 ? newScore[m.name].wins + 1 : newScore[m.name].wins
      })
    
      score[currentGrade] = newScore;



    types.forEach(type =>
      solution.push({
        name: type,
        number: monstersAfterFight[currentGrade].filter(m => m.name === type).length
      })
    );

    debugger;

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'monster-parent-div')

    solution.forEach(m => {
      const porcentaje = ( score[currentGrade][m.name].wins /  score[currentGrade][m.name].total) * 100

      newDiv.innerHTML += `
      <div class="monster-div" id="${m.name}">
          ${m.name}: ${ score[currentGrade][m.name] && `<span> ${ score[currentGrade][m.name].wins
          }/${score[currentGrade][m.name].total
          } - <span class="${'color ' + percentagecolor(porcentaje)
          }">${!isNaN(porcentaje) ? Math.floor(porcentaje * 100) / 100 + '%' : 'NS/NC'
          } <span></span>`}
      </div>
      <br/>
      `
    })

    // monstersDiv.innerHTML = ''
    monstersDiv.appendChild(newDiv);

    //reseting solutions.
    solution = []
  })

}



// crea monstruos segun el grado.
// crea las peleas
// y revisa que nadie se quede sin combatir
function monsterAutomatization() {
  monstersAfterFight = {
    grade0: [],
    grade1: [],
    grade2: [],
    grade3: [],
    grade4: [],
  } // reinicio var global
  const solution = {
    grade0: [],
    grade1: [],
    grade2: [],
    grade3: [],
    grade4: [],
  }

  //
  let keys = Object.keys(grades);
  keys.forEach(grade => {

    const gradeSelected = grades[grade];

    // debugger;
    for (let i = 0; i < generalMonsterNumber; i++) {
      //de atras a alante: cojo un numero random desde 0 a la longitud del grado seleccionado. 
      //ej: grado 0: 0->5, grado 1: 0 -> 18.
      // entonces, del gradoSelected, que es una lista, cojo el monstruo que corresponda.
      // y genero unas estadisticas variadas de ese monstuo seleccionado.
      // despues creo un monstruo con esas estadisticas variadas en la lista llamada "solucion".
      // despues solución se inserta en "monstruos" que son los que van a pelear entre ellos.
      const customStats = createStatsVariation(gradeSelected[Math.floor(rand(gradeSelected.length))], variation)
      solution[grade].push(createMonster(customStats))
    }

    monsters[grade] = solution[grade];

  })

  let monstersKeys = Object.keys(monsters);

  // let executePvp = () => {
  monstersKeys.forEach(key => {
    while (monsters[key].length) {
      const mon1 = monsters[key].splice(monsters[key].length * Math.random() | 0, 1)[0]
      const mon2 = monsters[key].splice(monsters[key].length * Math.random() | 0, 1)[0]

      // TODO: eliminar. useless.
      if (!mon1 || !mon2) {
        debugger
      }

      const result = pvp(mon1, mon2)
      if (result === 0) {
        // empate. los devuelvo a la cola
        monsters[key].push(mon1, mon2)
      } else {
        monstersAfterFight[key].push(mon1, mon2)
      }
    }
  })


  // }

  // executePvp();

  // let flag = false;
  // while (!flag) {
  //     let vivosSinMatar = monstersAfterFight.filter(m => !m.isDead && m.kills === 0);
  //     if (vivosSinMatar.length) {
  //         monsters.push(...vivosSinMatar);
  //     } else {
  //         flag = true;
  //     }
  //     executePvp();
  // }

  showAllMonsters()
}