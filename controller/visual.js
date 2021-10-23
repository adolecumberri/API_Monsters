

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
    types.forEach(type =>
        solution.push(
            {
                name: type,
                number: monsters.filter(m => m.name === type).length
            }
        )
    );

    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", 'monster-parent-div');

    solution.forEach(m => {
        newDiv.innerHTML += `<span class="'monster-div'" id="${m.name}">${m.name}: ${m.number}</span><br/>`

    });
    // monstersDiv.appendChild(null);
    // monstersDiv.parentNode.removeChild(monstersDiv);
    monstersDiv.innerHTML = "";
    monstersDiv.appendChild(newDiv);
}

function createRandMonstersByGrade() {
    let solution = [];
    let gradeSelected = grades[`grade${generalGrade}`];

    // debugger;
    for (let i = 0; i < generalMonsterNumber; i++) {
        let customStats = createStatsVariation(gradeSelected[Math.floor(rand(gradeSelected.length - 1))], variation);
        solution.push(createMonster(customStats));
    }

    monsters = solution;

    showMonsters();
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
}

rand = (max, min = 0) =>
    Math.random() * (max - min) + min;



