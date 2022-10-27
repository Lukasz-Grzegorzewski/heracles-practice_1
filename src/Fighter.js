/* Fighter class definition */

let MAX_LIFE = 100;
let round = 0;

class Fighter {
    constructor(name, strength, dexterity, life) {
        this.name = name,
            this.strength = strength,
            this.dexterity = dexterity,
            this.life = MAX_LIFE
    }

    fight(target) {
        if (target.life > 0 && this.life > 0) {
            round++;
            console.log('🕛 Round #', round);

            const attackerDemage = Math.floor(Math.random() * this.strength) + 1;

            if (attackerDemage > target.dexterity) {

                const realDemmage = attackerDemage - target.dexterity;
                if (target.life >= realDemmage) {
                    target.life -= realDemmage;
                    if (target.name === 'Nemean Lion') console.log('🧔', this.name, '🗡️  🦁', target.name, '💙🦁', target.name, ':', target.life);
                    if (target.name === 'Heracles') console.log('🦁', this.name, '🗡️  🧔', target.name, '💙🧔', target.name, ':', target.life);
                } else {
                    if (target.name === 'Nemean Lion') console.log('🧔', this.name, '🗡️  🦁', target.name, '💙🦁', target.name, ':', target.life, '   MISSED');
                    if (target.name === 'Heracles') console.log('🦁', this.name, '🗡️  🧔', target.name, '💙🧔', target.name, ':', target.life, '      MISSED');
                }

            } else {
                if (target.name === 'Nemean Lion') console.log('🧔', this.name, '🗡️  🦁', target.name, '💙🦁', target.name, ':', target.life, '   MISSED');
                if (target.name === 'Heracles') console.log('🦁', this.name, '🗡️  🧔', target.name, '💙🧔', target.name, ':', target.life, '      MISSED');
            }
        }
    }

    isAlive(target) {
        if (target.life === 0 && target.name === 'Nemean Lion') console.log('💀 🦁', target.name, 'is dead \n🏆 🧔', this.name, 'wins', '( 💙', this.life, ')');
        if (target.life === 0 && target.name === 'Heracles') console.log('💀 🧔', target.name, 'is dead \n🏆 🦁', this.name, 'wins', '( 💙', this.life, ')');
    }
}

module.exports = Fighter;