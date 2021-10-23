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
                    accuracy: Math.floor((accuracy + monstersBase.accuracy) * 1000) / 1000,
                    att_interval: att_interval + monstersBase.att_interval,
                    crit: Math.floor((crit + monstersBase.crit) * 1000) / 1000,
                    critDmg: critDmg + monstersBase.critDmg,
                    def: def + monstersBase.def,
                    dmg: dmg + monstersBase.dmg,
                    evasion: Math.floor((evasion + monstersBase.evasion) * 1000) / 1000,
                    hp: hp + monstersBase.hp,
                    reg: Math.floor((reg + monstersBase.reg) * 1000) / 1000,
                };
            }else {
                //Parche para añadir las estadisticasbases como una categoría

                solution['None'] = {
                    accuracy: Math.floor((accuracy) * 1000) / 1000,
                    att_interval: att_interval,
                    crit: Math.floor((crit) * 1000) / 1000,
                    critDmg: critDmg,
                    def: def,
                    dmg: dmg,
                    evasion: Math.floor((evasion) * 1000) / 1000,
                    hp: hp,
                    reg: Math.floor((reg) * 1000) / 1000,

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
        let d = data;
        let v = dicctionary[grade];

        let newCritDmg = Math.floor((d.critDmg + d.critDmg * (v.critDmg / 1000)) * 1000) / 1000;
        let newAccuracy = Math.floor((d.accuracy + d.accuracy * (v.accuracy / 1000)) * 1000) / 1000;

        solution[className] = {
            accuracy: newAccuracy > 1 ? 1 : newAccuracy,
            att_interval: Math.floor(d.att_interval + d.att_interval * (v.att_interval / 1000)),
            crit: Math.floor((d.crit + d.crit * (v.crit / 1000)) * 1000) / 1000,
            critDmg: newCritDmg < 1 ? 1 : newCritDmg,
            def: Math.floor((d.def + d.def * (v.def / 1000)) * 1000) / 1000,
            dmg: Math.floor((d.dmg + d.dmg * (v.dmg / 1000)) * 1000) / 1000,
            evasion: Math.floor((d.evasion + d.evasion * (v.evasion / 1000)) * 1000) / 1000,
            hp: Math.floor(d.hp + d.hp * (v.hp / 1000)),
            reg: Math.floor((d.reg + d.reg * (v.reg / 1000)) * 1000) / 1000,
        }
        // console.log({d}, {v});
    }


    return solution
};

let createStatsVariation = (d, variation) => {
    // console.log({data});
    let solution = {};

        //variación minima y máxima
        let min = 1-variation;
        let max = 1+variation;

        //si hago algoritmica, los precalculo.
        let newCritDmg = Math.floor(rand(d.critDmg * max, d.critDmg * min) * 1000) / 1000;
        let newCrit = Math.floor( (rand(d.crit * max, d.crit * min) * 1000) ) / 1000;
        let newAccuracy = Math.floor(rand(d.accuracy * max, d.accuracy * min) * 1000) / 1000;
        let newEvasion = Math.floor( rand(d.evasion * max, d.evasion * min) *1000 ) / 1000;

        
        solution = {
            ...d,
            accuracy : newAccuracy <= 0 ? 0 : newAccuracy >= 1 ? 1 : newAccuracy,
            att_interval: Math.floor(rand(d.att_interval * max, d.att_interval * min)),
            crit: newCrit <= 0 ? 0 : newCrit >= 1 ? 1 : newCrit,
            critDmg: newCritDmg < 1 ? 1 : newCritDmg,
            def: Math.floor(rand(d.def * max, d.def * min) * 1000) / 1000,
            dmg: Math.floor(rand(d.dmg * max, d.dmg * min) * 1000) / 1000,
            evasion: newEvasion <= 0 ? 0 : newEvasion >= 1 ? 1 : newEvasion,
            hp: Math.floor(rand(d.hp * max, d.hp * min)),
            reg: Math.floor(rand(d.reg * max, d.reg * min) * 1000) / 1000,
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


//los numeros son %s
let dicctionary = {
    grade0: {
        accuracy: 0,
        att_interval: 0,
        crit: 0,
        critDmg: 0,
        def: 0,
        dmg: 0,
        evasion: 0,
        hp: 0,
        reg: 0,
    },
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
