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
        solution.push({
            name: type,
            number: monstersAfterFight.filter(m => m.name === type).length
        })
    );


    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", 'monster-parent-div');

    solution.forEach(m => {

                let porcentaje = (score[m.name].wins / score[m.name].total) * 100;


                newDiv.innerHTML += `
        <div class="monster-div" id="${m.name}">
            ${m.name}: ${m.number} ${score[m.name] && `<span> ${score[m.name].wins
            }/${score[m.name].total
            } - <span class="${"color " + percentagecolor(porcentaje)
            }">${!isNaN(porcentaje) ? Math.floor(porcentaje * 100) / 100 + "%" : 'NS/NC'
            } <span></span>`}
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
    let types = grades[`grade${generalGrade}`].map(m => m.name);
    let solution = {};

    types.forEach(m => {
        solution[m] = { total: 0, wins: 0 }
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
        let customStats = createStatsVariation(gradeSelected[Math.floor(rand(gradeSelected.length))], variation);
        solution.push(createMonster(customStats));
    }

    monsters = solution;

    let executePvp = () => {
        while (monsters.length) {
            let mon1 = monsters.splice(monsters.length * Math.random() | 0, 1)[0];
            let mon2 = monsters.splice(monsters.length * Math.random() | 0, 1)[0];

            if(!mon1 || !mon2){
                debugger;
            }

            let result = pvp(mon1, mon2);
            if (result === 0) {
                //empate.
                monsters.push(mon1, mon2);
            } else {
                monstersAfterFight.push(mon1, mon2);
            }
        }
    }

    executePvp();

    let flag = false;
    while (!flag) {
        let vivosSinMatar = monstersAfterFight.filter(m => !m.isDead && m.kills === 0);
        if (vivosSinMatar.length) {
            monsters.push(...vivosSinMatar);
        } else {
            flag = true;
        }
        executePvp();
    }




    showMonsters();
}

rand = (max, min = 0) =>
    Math.random() * (max - min) + min;

percentagecolor = (percentage) => {
    let solution = "";

    let decena = Math.floor(percentage);

    if (decena >= 43 && decena <= 57) {
        solution = "perfect";
    } else if (decena <= 43 && decena >= 25) {
        solution = "bad";
    } else if (decena <= 25) {
        solution = "very-bad";
    } else if (decena >= 57 && decena <= 75) {
        solution = "bad";
    } else if (decena >= 75) {
        solution = "very-bad";
    }

    return solution;

}