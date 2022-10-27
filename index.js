// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");

const Heracles = new Fighter("Heracles", 20, 6);
const Nemean = new Fighter("Nemean Lion", 11, 13);



breakme: {
    while (Heracles.life > 0 && Nemean.life > 0) {
        Heracles.fight(Nemean);
        if (Heracles.isAlive(Nemean)) break breakme;
        Nemean.fight(Heracles);
        if (Nemean.isAlive(Heracles)) break breakme;
    }
}