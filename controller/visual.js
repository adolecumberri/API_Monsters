

let generalGrade = 0;
let generalMonsterNumber = 10;
let monsters = [];
let monstersAfterFight = [];
let variation = 0.15;

let createInput = document.getElementById("create");
let monstersDiv = document.getElementById("monsters");

function gradeSelected({ value }) {
    generalGrade = value;
    updateCreateInput();
}


function numberSelected({ value }) {
    generalMonsterNumber = value;
    updateCreateInput();
}


function updateCreateInput() {
    // debugger;
    createInput.disabled = !(generalGrade >= 0 && generalMonsterNumber > 0)
}

function showMonsters() {
    let types = grades[`grade${generalGrade}`].map(m => m.name);
    let solution = [];
   

    let score = loadStats();
    console.log(score);

    types.forEach(type =>
        solution.push(
            {
                name: type,
                number: monstersAfterFight.filter(m => m.name === type).length
            }
        )
    );


    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", 'monster-parent-div');

    solution.forEach(m => {
        newDiv.innerHTML += `
        <div class="monster-div" id="${m.name}">
            ${m.name}: ${m.number} ${score[m.name] && `<span> ${
                score[m.name].wins
            }/${
                score[m.name].total
            } - ${
              Math.floor(  (score[m.name].wins/score[m.name].total) * 10000 ) / 100
            }% </span>`}
        </div>
        <br/>
        `

    });
    // monstersDiv.appendChild(null);
    // monstersDiv.parentNode.removeChild(monstersDiv);
    monstersDiv.innerHTML = "";
    monstersDiv.appendChild(newDiv);
}

//cargo stats de winrates.
function loadStats() {
    let solution = {};

    monstersAfterFight.forEach(m => {
        solution[m.name] = { total: 0, wins: 0 }
    });

    monstersAfterFight.forEach(m => {
        solution[m.name].total++;
        solution[m.name].wins = m.kills > 0 ? solution[m.name].wins + 1 : solution[m.name].wins;
    });

    return solution;
}

function createRandMonstersByGrade() {
    monstersAfterFight = []; //reinicio var global
    let solution = [];
    let gradeSelected = grades[`grade${generalGrade}`];

    // debugger;
    for (let i = 0; i < generalMonsterNumber; i++) {
        let customStats = createStatsVariation(gradeSelected[Math.floor(rand(gradeSelected.length ))], variation);
        solution.push(createMonster(customStats));
    }

    monsters = solution;

    
    while (monsters.length) {
        let mon1 = monsters.splice(monsters.length * Math.random() | 0, 1)[0];
        let mon2 = monsters.splice(monsters.length * Math.random() | 0, 1)[0];

        let result = pvp(mon1, mon2);
        if (result === 0) {
            //empate.
            monsters.push(mon1, mon2);
        } else {
            monstersAfterFight.push(mon1, mon2);
        }
    }
    
    showMonsters();
}

rand = (max, min = 0) =>
    Math.random() * (max - min) + min;



