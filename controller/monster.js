


const createMonster = (stats) => {
    let newMonster = new Monster(stats);

    return newMonster
};

class Monster {
    isDead = false;
    kills = 0;
    variation = 0.15; //variation applied to damage.
    constructor(stats) {
        const keys = Object.keys(stats);

        keys.forEach((key, index) => {
            this[key] = stats[key];
        });
        this.curr_att_interval = stats.att_interval;
        this.currentHp = stats.hp;
    }

    start = () => { };

    end = () => { };

    //dmg Effect
    attack = (dmgEf = 0) => {
		let { accuracy, crit, critDmg, dmg, variation } = this;
		
        let damageApplied = dmg + dmgEf;
        
        let minVar = 1 - variation;
        let maxVar = 1 + variation;
        let damage = 0;

		if (accuracy > this.getProb()) {
			//golpeo?
			if (crit > this.getProb()) {
				//critico
				damage = this.rand(damageApplied * (critDmg + 1) * maxVar, damageApplied * (critDmg + 1) * minVar );
			} else {
                // normal hit
				damage = this.rand(damageApplied * maxVar, damageApplied * minVar);
			}
		} else {
            // miss
		}
		this.calcNextTurn();
		return damage;
	};


    //enemi es class Monster
	defend = (enemi) => {
		let { currentHp, def, evasion } = this;
		let finalDamage = 0;

        //Evade o no.
		if (evasion <= this.getProb()) {
			let enemiAttack = enemi.attack();
			let attMultiplier = 40 / (40 + def);
			finalDamage = Math.round(enemiAttack * attMultiplier);

		} else {
            //al no atacar, no calcula el siguiente turno
			enemi.calcNextTurn(enemi.att_interval);
		}

		this.currentHp = currentHp - finalDamage >= 0 ? currentHp - finalDamage : 0; //

		if (currentHp === 0) {
			this.heroDies();
		}
	};

    //daño directo sin pasar por armadura
	straightDamage = (damage) => {
		let { currentHp } = this;
		this.currentHp = currentHp - damage >= 0 ? currentHp - damage : 0;

		if (currentHp === 0) {
			this.heroDies();
		}
	};

	//HERO DIES
	heroDies = () => {
        this.isDead = true;
	};

	//HERO WINS
	heroKills = () => {
        kills = this.kills + 1; 
	};

	//calculo siguiente turno. Habilidades de velocidad lo sobreescribiran.
	calcNextTurn = (att_intervalEf = 0) => {
		let { curr_att_interval, att_interval } = this;
		let new_att_interval = parseInt(curr_att_interval) + (att_interval + att_intervalEf);
		
        //no entiendo esta linea. la parte del "else" no tienen sentido.
        this.curr_att_interval =
			new_att_interval > parseInt(curr_att_interval) ? new_att_interval : parseInt(curr_att_interval) + 1; 
	};


    rand = (max, min = 0) =>
    Math.round(Math.random() * (max - min) + min);
    
	//function to load probabilities.
	getProb = () => Math.random();


}

//solution = 0 === draw
// 1 = monst1 wins.
// 2 = monst2 wins.

const pvp = (
    monst1,
    monst2
) => {
    let solution = -1;

    for (let i = 0; !monst1.isDead && !monst2.isDead; i++) {
        if (monst1.curr_att_interval === i) {
      debugger;     
            //ataca monst1
            monst2.defend(monst1);
            // monst2.end();
        }
        if (monst2.curr_att_interval === i) {
            debugger;
            monst1.defend(monst2);
            // monst1.end();
        }
    }

    //Guardar en la base de datos
    if (monst1.isDead && monst2.isDead) {
        // monst1.isDead = true;
        // monst1.kills++;

        // monst2.isDead = true;
        // monst2.kills++;

        solution = 0;
    } else if (monst1.isDead) {
        monst1.isDead = true;
        monst2.kills++;
        solution = 1;
    } else if (monst2.isDead) {
        monst2.isDead = true;
        monst1.kills++;
        solution = 2;
    }
};