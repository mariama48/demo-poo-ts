import { Voiture } from "./Voiture";

// instance de la classe Voiture
const voiture1 = new Voiture("Rouge", "Renault");
const voiture2 = new Voiture("Bleu", "Peugeot", 5);
console.log({voiture1, voiture2});
// appel du mutateur (avec sécuritée)
voiture2.nbRoues = -5;
console.log({voiture1, voiture2});
// appel de l'accesseur
console.log(voiture2.nbRoues);
// appels de méthodes des objets Voiture
voiture1.rouler(10);
voiture2.rouler(5);