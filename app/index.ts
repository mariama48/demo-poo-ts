import { Voiture } from "./Voiture";

// instance de la classe Voiture
console.log("Nombre de voiture: " + Voiture.compteur);
const voiture1 = new Voiture("Rouge", "Renault");
console.log("Nombre de voiture: " + Voiture.compteur);
const voiture2 = new Voiture("Bleu", "Peugeot", 5);
console.log("Nombre de voiture: " + Voiture.compteur);

console.log({voiture1, voiture2});
// appel du mutateur (avec sécuritée)

voiture2.setNbRoues(-5);
console.log({voiture1, voiture2});

// appel de l'accesseur
console.log(voiture2.nbRoues);

// appels de méthodes des objets Voiture
voiture1.rouler(10);
voiture2.rouler(5);

// erreur: utilisation d'une méthode privée en dehors de la classe
// voiture2.check();

// appel de méthode static depuis la classe voiture
Voiture.décrireVoiture(voiture1);
