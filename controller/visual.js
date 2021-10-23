

let generalGrade = 0;
let generalMonsterNumber = 10;
let monsters = [];
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
    newDiv.className = 'monster-div';

    solution.forEach(m => {
        newDiv.innerHTML += `<span>${m.name}: ${m.number}</span><br/>`

    });
    // monstersDiv.appendChild(null);
    // monstersDiv.parentNode.removeChild(monstersDiv);
    monstersDiv.innerHTML = "";
    monstersDiv.appendChild(newDiv);
}

function createRandMonstersByGrade() {
    let solution = [];
    let gradeSelected = grades[`grade${generalGrade}`];


    for (let i = 0; i < generalMonsterNumber; i++) {
        solution.push(createMonster(gradeSelected[rand(gradeSelected.length - 1)]));
    }

    monsters = solution;

    showMonsters();
}



const pvp = (
    monst1,
    monst2
) => {
    let i = 0;
    for (; !monst1.isDead && !monst2.isDead; i++) {
        if (monst1.curr_att_interval === i) {
            //ataca monst1
            monst2.defend(monst1);
            monst2.end();
        }
        if (monst2.curr_att_interval === i) {
            await monst1.defend(monst2);
            monst1.end();
        }
    }

    //Guardar en la base de datos
    if (monst1.isDead && monst2.isDead) {
        monst1.isDead = true;
        monst1.kills++;

        monst2.isDead = true;
        monst2.kills++;
    } else if (monst1.isDead) {
        monst1.isDead = true;
        monst2.kills++;
    } else if (monst2.isDead) {
        monst2.isDead = true;
        monst1.kills++;
    }
};
