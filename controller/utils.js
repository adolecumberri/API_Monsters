// creo estadisticas basadas en el heroe comun y sus variaciones
const createMonsterStats = () => {
    const monstersBase = HERO_STATS[0]
    const monsterCommon = HERO_STATS
    const solution = {}

    monsterCommon.forEach(
        ({
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
        }, i) => {
            if (i > 0) {
                solution[className] = {
                    accuracy: Math.floor((accuracy + monstersBase.accuracy) * 1000) / 1000,
                    att_interval: att_interval + monstersBase.att_interval,
                    crit: Math.floor((crit + monstersBase.crit) * 1000) / 1000,
                    critDmg: critDmg + monstersBase.critDmg,
                    def: def + monstersBase.def,
                    dmg: dmg + monstersBase.dmg,
                    evasion: Math.floor((evasion + monstersBase.evasion) * 1000) / 1000,
                    hp: hp + monstersBase.hp,
                    reg: Math.floor((reg + monstersBase.reg) * 1000) / 1000
                }
            } else {
                // Parche para añadir las estadisticasbases como una categoría

                solution.None = {
                    accuracy: Math.floor((accuracy) * 1000) / 1000,
                    att_interval: att_interval,
                    crit: Math.floor((crit) * 1000) / 1000,
                    critDmg: critDmg,
                    def: def,
                    dmg: dmg,
                    evasion: Math.floor((evasion) * 1000) / 1000,
                    hp: hp,
                    reg: Math.floor((reg) * 1000) / 1000

                }
            }
        }
    )

    return solution
}

// segun el grado genera variaciones
const createGradeVersion = (data, grade) => {
    // console.log({data});
    const solution = {}
    for (const className in data) {
        const d = data
        const v = dicctionary[grade]

        const newCritDmg = Math.floor((d.critDmg + d.critDmg * (v.critDmg / 1000)) * 1000) / 1000
        const newAccuracy = Math.floor((d.accuracy + d.accuracy * (v.accuracy / 1000)) * 1000) / 1000

        solution[className] = {
                accuracy: newAccuracy > 1 ? 1 : newAccuracy,
                att_interval: Math.floor(d.att_interval + d.att_interval * (v.att_interval / 1000)),
                crit: Math.floor((d.crit + d.crit * (v.crit / 1000)) * 1000) / 1000,
                critDmg: newCritDmg < 1 ? 1 : newCritDmg,
                def: Math.floor((d.def + d.def * (v.def / 1000)) * 1000) / 1000,
                dmg: Math.floor((d.dmg + d.dmg * (v.dmg / 1000)) * 1000) / 1000,
                evasion: Math.floor((d.evasion + d.evasion * (v.evasion / 1000)) * 1000) / 1000,
                hp: Math.floor(d.hp + d.hp * (v.hp / 1000)),
                reg: Math.floor((d.reg + d.reg * (v.reg / 1000)) * 1000) / 1000
            }
            // console.log({d}, {v});
    }

    return solution
}

const createStatsVariation = (d, variation) => {
    // console.log({data});
    let solution = {}

    // variación minima y máxima
    const min = 1 - variation
    const max = 1 + variation

    // si hago algoritmica, los precalculo.
    const newCritDmg = Math.floor(rand(d.critDmg * max, d.critDmg * min) * 1000) / 1000
    const newCrit = Math.floor((rand(d.crit * max, d.crit * min) * 1000)) / 1000
    const newAccuracy = Math.floor(rand(d.accuracy * max, d.accuracy * min) * 1000) / 1000
    const newEvasion = Math.floor(rand(d.evasion * max, d.evasion * min) * 1000) / 1000

    solution = {
        ...d,
        accuracy: newAccuracy <= 0 ? 0 : newAccuracy >= 1 ? 1 : newAccuracy,
        att_interval: Math.floor(rand(d.att_interval * max, d.att_interval * min)),
        crit: newCrit <= 0 ? 0 : newCrit >= 1 ? 1 : newCrit,
        critDmg: newCritDmg < 1 ? 1 : newCritDmg,
        def: Math.floor(rand(d.def * max, d.def * min) * 1000) / 1000,
        dmg: Math.floor(rand(d.dmg * max, d.dmg * min) * 1000) / 1000,
        evasion: newEvasion <= 0 ? 0 : newEvasion >= 1 ? 1 : newEvasion,
        hp: Math.floor(rand(d.hp * max, d.hp * min)),
        reg: Math.floor(rand(d.reg * max, d.reg * min) * 1000) / 1000
    }

    return solution
}

const asignValuesByGrade = (grades, monsters) => {
    // console.log(asignacion, grades, monsters);
    const solution = []

    monsters.forEach((monster) => {
        const heroType = asignacion[monster.name]
        const currentGrade = grades[`grade${monster.grade}`][heroType]
            // console.log(currentGrade);
        monster = {...monster, ...currentGrade }

        solution.push(monster)
    })

    return solution
}

rand = (max, min = 0) =>
    Math.random() * (max - min) + min

percentagecolor = (percentage) => {
    let solution = ''

    const decena = Math.floor(percentage)

    if (decena >= 43 && decena <= 57) {
        solution = 'perfect'
    } else if (decena <= 43 && decena >= 25) {
        solution = 'bad'
    } else if (decena <= 25) {
        solution = 'very-bad'
    } else if (decena >= 57 && decena <= 75) {
        solution = 'bad'
    } else if (decena >= 75) {
        solution = 'very-bad'
    }

    return solution
}

uniqueID = () => {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
}