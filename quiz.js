import { prompt } from "./helper.js";

let i = 0;

let points = 0;

const trueReponse = ["a", "b", "b", "a", "a", "b", "a", "a", "b", "a"];

const quizs = [
  {
    question:
      "1. Quelle différence principale entre let et var dans une fonction ?",
    reponses: `    a) let est limité au bloc { }, var à toute la fonction
    
    b) var ne peut pas stocker de string

    c) let est toujours plus rapide que var`,
  },
  {
    question: "2. Que renvoyer typeof NaN ?",
    reponses: `    a) "NaN"

    b) "number"

    c)"undefined"`,
  },
  {
    question: "3. Quel tableau est correctement déclaré ?",
    reponses: `    a) let arr = (1, 2, 3);
    
    b) let arr = [1, 2, 3];

    c)let arr = {1, 2, 3};`,
  },
  {
    question: "4. Que fait arr.includes(3)-on let arr = [1, 2, 3, 4]; ?",
    reponses: `    a) Vérifie si 3 est présent dans le tableau

    b) Supprime 3 du tableau

    c) Retourne la position de 3`,
  },
  {
    question: "5. Quelle affirmation est vraie pour == et === ?",
    reponses: `    a) == convertit les types avant de comparer, === ne convertit pas

    b) === convertit les types avant de comparer, == ne convertit pas

    c) Les deux se comportent toujours exactement pareil`,
  },
  {
    question: `6. Quel est le problème possible avec ce pseudo-code ?
«Je crée une fonction qui modifie un tableau passé en paramètre.»`,
    reponses: `    a) L'array ne peut pas être passé en paramètre

    b) La fonction peut modifier directement l'array original

    c) La fonction renverra toujours une copie automatique`,
  },
  {
    question:
      "7. Que signifie this dans une méthode d'un objet simple comme : const user = { name: 'Ali', hello() { /* ici */ } }lorsqu'on appelle user.hello()?",
    reponses: `    a) this fait référence à user

    b) this fait toujours référence à window

    c) this est toujours undefined`,
  },
  {
    question:
      "8. Pourquoi const ne rend pas un objet complètement « bloqué » ?",
    reponses: `    a) Parce qu'on peut encore changer le contenu interne de l'objet

    b) Parce qu'on peut réaffecter la variable à un autre objet

    c) Parce que constne fonctionne que sur les nombres`,
  },
  {
    question: "9. Que fait arr.map(x => x * 2) sur un tableau de nombres ?",
    reponses: `    a) Modifie directement le tableau original

    b) Crée un nouveau tableau avec chaque élément multiplié par 2

    c) Supprime les éléments inférieurs à 2`,
  },
  {
    question: "10. Que signifie JSON.stringify(obj)?",
    reponses: `    a) Convertir un objet en chaîne de texte au format JSON

    b) Convertir une chaîne JSON en objet

    c) Supprimer toutes les clés de l'objet`,
  },
];

while (i < 10) {
  console.log("");
  console.log(quizs[i].question);
  console.log("");
  console.log(quizs[i].reponses);
  console.log("");
  let reponse = await prompt("Entrer la réponse : ");
  if (reponse === trueReponse[i]) {
    console.log("");
    console.log("Bonne reponse");
    points++;
  } else if (reponse === null || reponse === "") {
    console.log("");
    console.log("Erreur : Veuillez entrer une reponse valide (a, b ou c)");
  } else if (reponse !== "a" && reponse !== "b" && reponse !== "c") {
    console.log("");
    console.log("Erreur : Veuillez entrer une reponse valide (a, b ou c)");
  } else if (reponse !== trueReponse[i]) {
    console.log("");
    console.log("Mauvaise reponse");
    console.log("");
    console.log(`La bonne reponse est ${trueReponse[i]}`);
  }
}

console.log("");

if (points === 10) {
  console.log("Bravo, vous avez tout juste, vous avez obtenu 10 points");
} else if (points > 0 && points < 10) {
  console.log(`Bravo, vous avez obtenu ${points} points`);
} else {
  console.log("Dommage, vous avez obtenu 0 points");
}

console.log("");
