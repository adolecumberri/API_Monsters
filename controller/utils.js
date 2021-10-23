let createMonsterStats = () => {

    let monstersBase = HERO_STATS[0];
    let monsterCommon = HERO_STATS;
    let solution = {};

    monsterCommon.forEach(
        (
            {
                accuracy,
                att_interval,
                className,
                crit,
                critDmg,
                def,
                dmg,
                evasion,
                hp,
                reg
            }, i
        ) => {
            if(i > 0){
                solution[className] = {
                    accuracy: Math.floor((accuracy + monstersBase.accuracy) * 100) / 100,
                    att_interval: att_interval + monstersBase.att_interval,
                    crit: Math.floor((crit + monstersBase.crit) * 100) / 100,
                    critDmg: critDmg + monstersBase.critDmg,
                    def: def + monstersBase.def,
                    dmg: dmg + monstersBase.dmg,
                    evasion: Math.floor((evasion + monstersBase.evasion) * 100) / 100,
                    hp: hp + monstersBase.hp,
                    reg: Math.floor((reg + monstersBase.reg) * 100) / 100,
                };
            }else {
                //Parche para añadir las estadisticasbases como una categoría

                solution['None'] = {
                    accuracy: Math.floor((accuracy) * 100) / 100,
                    att_interval: att_interval,
                    crit: Math.floor((crit) * 100) / 100,
                    critDmg: critDmg,
                    def: def,
                    dmg: dmg,
                    evasion: Math.floor((evasion) * 100) / 100,
                    hp: hp,
                    reg: Math.floor((reg) * 100) / 100,

                }
            }
           
        }
    );

    
    return solution
}

let createGradeVersion = (data, grade) => {
    // console.log({data});
    let solution = {};
    for (const className in data) {
        let d = data[className];
        let v = dicctionary[grade];

        let newCritDmg = Math.floor((d.critDmg + d.critDmg * (v.critDmg / 100)) * 100) / 100;
        let newAccuracy = Math.floor((d.accuracy + d.accuracy * (v.accuracy / 100)) * 100) / 100;

        solution[className] = {
            accuracy: newAccuracy > 1 ? 1 : newAccuracy,
            att_interval: Math.floor(d.att_interval + d.att_interval * (v.att_interval / 100)),
            crit: Math.floor((d.crit + d.crit * (v.crit / 100)) * 100) / 100,
            critDmg: newCritDmg < 1 ? 1 : newCritDmg,
            def: Math.floor((d.def + d.def * (v.def / 100)) * 100) / 100,
            dmg: Math.floor((d.dmg + d.dmg * (v.dmg / 100)) * 100) / 100,
            evasion: Math.floor((d.evasion + d.evasion * (v.evasion / 100)) * 100) / 100,
            hp: Math.floor(d.hp + d.hp * (v.hp / 100)),
            reg: Math.floor((d.reg + d.reg * (v.reg / 100)) * 100) / 100,
        }
        // console.log({d}, {v});
    }


    return solution
};

let asignValuesByGrade = (grades, monsters) => {
    // console.log(asignacion, grades, monsters);
    let solution = [];


    monsters.forEach( (monster) => {
        let heroType = asignacion[monster.name];
        let currentGrade = grades[`grade${monster.grade}`][heroType];
        // console.log(currentGrade);
        monster = {...monster, ...currentGrade};
        
    solution.push(monster);
    });

    return solution;

};

let rand = (max, min = 0) =>
Math.round(Math.random() * (max - min) + min);


//los numeros son %s
let dicctionary = {
    grade1: {
        accuracy: -5,
        att_interval: -20,
        crit: -40,
        critDmg: -30,
        def: -20,
        dmg: -60,
        evasion: -25,
        hp: +20,
        reg: +20,
    },
    grade2: {
        accuracy: 0,
        att_interval: -10,
        crit: -20,
        critDmg: -10,
        def: 5,
        dmg: -30,
        evasion: -10,
        hp: +40,
        reg: +30,
    },
    grade3: {
        accuracy: 5,
        att_interval: -5,
        crit: -10,
        critDmg: -10,
        def: 5,
        dmg: 5,
        evasion: 0,
        hp: +40,
        reg: +40,
    },
    grade4: {
        accuracy: 15,
        att_interval: +25,
        crit: +10,
        critDmg: +20,
        def: +25,
        dmg: +20,
        evasion: 15,
        hp: +80,
        reg: +60,
    },
}
