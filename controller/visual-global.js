
function showAllMonsters() {
    monstersDiv.innerHTML = ''
    let gradeKey = Object.keys(grades);
    let solution = [];
  
    gradeKey.forEach(currentGrade => {
      let currentMonsterList = grades[currentGrade];
      const monsterNames = currentMonsterList.map(m => m.name);
  
      //loading statistics
      const newScore = {};
  
  
      // adding map and data
      monstersAfterFight[currentGrade].forEach(m => {
        if (newScore[m.name] === undefined) newScore[m.name] = { total: 0, wins: 0 }
  
        newScore[m.name].total++
        newScore[m.name].wins = m.kills > 0 ? newScore[m.name].wins + 1 : newScore[m.name].wins
      })
  
      //added final data in the score
      score[currentGrade] = newScore;
  
      //
      monsterNames.forEach(monsterName =>
        solution.push({
          name: monsterName,
          number: monstersAfterFight[currentGrade].filter(m => m.name === monsterName).length
        })
      );
  
      const newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'monster-parent-div')
  
      solution.forEach(m => {
        newDiv.innerHTML += drawGrid(m, score, currentGrade);
      })
  
      // monstersDiv.innerHTML = ''
      monstersDiv.appendChild(newDiv);
  
      //reseting solutions.
      solution = []
    })
  
  }
  
  let drawGrid = (m, score, currentGrade) => {
      if(score[currentGrade][m.name]) debugger;
    const porcentaje = (score[currentGrade][m.name].wins / score[currentGrade][m.name].total) * 100;
  
    score[currentGrade][m.name]['percentage'] = porcentaje;
    score[currentGrade][m.name]['type'] = percentagecolor(porcentaje);
  
    return `
        <div class="monster-div" id="${m.name}">
            ${m.name}: ${score[currentGrade][m.name] && `<span> ${score[currentGrade][m.name].wins
      }/${score[currentGrade][m.name].total
      } - <span class="${'color ' + percentagecolor(porcentaje)
      }">${!isNaN(porcentaje) ? Math.floor(porcentaje * 100) / 100 + '%' : 'NS/NC'
      } <span></span>`}
        </div>
        `
  }
  