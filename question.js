export const Questions = [
  {
    question: "Comment déclarer une variable qui ne peut pas être modifiée ?",
    answers: ["const", "let", "var"],
    correct: "const",
  },
  {
    question:
      "Quelle méthode transforme une chaîne de caractères en nombre entier ?",
    answers: ["parseInt", "parseFloat", "toString"],
    correct: "parseInt",
  },
  {
    question: 'Quel est le résultat de "2" + 2 en JavaScript ?',
    answers: ["4", '"22"', "22", "Erreur"],
    correct: "22",
  },

  {
    question: "Comment appelle-t-on une fonction qui s'appelle elle-même ?",
    answers: ["Fonction circulaire", "Fonction récursive", "Fonction miroir"],
    correct: "Fonction récursive",
  },
  {
    question: "Quelle fonction permet de créer un délai en JavaScript ?",
    answers: ["delay()", "setTimeout()", "wait()"],
    correct: "setTimeout()",
  },
  {
    question:
      "Quel est le nom de la fonction qui permet de répéter une action à intervalles réguliers ?",
    answers: ["setInterval()", "repeat()", "loop()"],
    correct: "setInterval()",
  },
  {
    question:
      "Quelle méthode permet de retirer le dernier élément d'un tableau ?",
    answers: ["shift()", "pop()", "splice()"],
    correct: "pop()",
  },
  {
    question: "Comment vérifier si une variable est un tableau en JavaScript ?",
    answers: ["isType()", "typeof", "Array.isArray()"],
    correct: "Array.isArray()",
  },
  {
    question:
      'Quelle est la valeur de "null" lorsqu\'elle est convertie en nombre ?',
    answers: ["0", "1", "undefined", "null"],
    correct: "0",
  },
  {
    question:
      'Comment accéder au premier élément d\'un tableau appelé "myArray" ?',
    answers: ["myArray[1]", "myArray[0]", "myArray.first()", "myArray.one"],
    correct: "myArray[0]",
  },
    {
        question: "Quelle méthode permet de trier un tableau en JavaScript ?",
        answers: ["sort()", "order()", "arrange()"],
        correct: "sort()",
    },
    {
        question: "Comment déclarer une fonction anonyme en JavaScript ?",
        answers: ["function myFunction()", "myFunction = function()", "() => {}"],
        correct: "() => {}",
    },
    {
        question:
        "Quelle est la différence entre '==' et '===' en JavaScript ?",
        answers: [
        "'==' compare les valeurs, '===' compare les valeurs et le type",
        "'==' compare les types, '===' compare les valeurs",
        "'==' est plus rapide que '==='",
        ],
        correct:
        "'==' compare les valeurs, '===' compare les valeurs et le type",
    },
    {
        question: "Comment créer un objet en JavaScript ?",
        answers: ["{ key: value }", "[ key: value ]", "<key: value>"],
        correct: "{ key: value }",
    },
    {
        question:
        "Quelle méthode permet de convertir un objet en chaîne JSON en JavaScript ?",
        answers: ["JSON.stringify()", "JSON.parse()", "toJSON()"],
        correct: "JSON.stringify()",
    },
    {
        question: "Comment ajouter un élément à la fin d'un tableau en JavaScript ?",
        answers: ["push()", "add()", "append()"],
        correct: "push()",
    },
    {
        question: "Quelle méthode permet de fusionner deux tableaux en JavaScript ?",
        answers: ["concat()", "merge()", "combine()"],
        correct: "concat()",
    },
    {
        question: "Comment déclarer une variable globale en JavaScript ?",
        answers: ["var", "let", "const"],
        correct: "var",
    },
    {
        question:
        "Quelle méthode permet de vérifier si un tableau contient un élément spécifique ?",
        answers: ["includes()", "contains()", "has()"],
        correct: "includes()",
    },
    {
        question: "Comment créer une boucle for en JavaScript ?",
        answers: ["for (let i = 0; i < 10; i++) {}", "for i in range(10) {}", "for (i = 0; i < 10; i++) {}"],
        correct: "for (let i = 0; i < 10; i++) {}",
    },
    {
        question: "Quelle méthode permet de supprimer un élément d'un tableau par son index ?",
        answers: ["splice()", "remove()", "delete()"],
        correct: "splice()",
    },
    {
        question: "Comment déclarer une constante en JavaScript ?",
        answers: ["const", "let", "var"],
        correct: "const",
    },
    {
        question: "Quelle méthode permet de convertir une chaîne de caractères en minuscules ?",
        answers: ["toLowerCase()", "toLower()", "lowercase()"],
        correct: "toLowerCase()",
    },
    {
        question: "Comment vérifier si une variable est définie en JavaScript ?",
        answers: ["typeof variable !== 'undefined'", "variable != null", "variable.exists()"],
        correct: "typeof variable !== 'undefined'",
    },
    {
        question: "Quelle méthode permet de créer une copie superficielle d'un tableau ?",
        answers: ["slice()", "copy()", "clone()"],
        correct: "slice()",
    },
    {
        question: "Comment déclarer une fonction avec des paramètres par défaut en JavaScript ?",
        answers: ["function myFunction(param = defaultValue) {}", "myFunction(param = defaultValue) {}", "function myFunction(param) { param = defaultValue }"],
        correct: "function myFunction(param = defaultValue) {}",
    },
    {
        question: "Quelle méthode permet de vérifier si un objet possède une propriété spécifique ?",
        answers: ["hasOwnProperty()", "containsProperty()", "propertyExists()"],
        correct: "hasOwnProperty()",
    },
    {
        question: "Comment créer une promesse en JavaScript ?",
        answers: ["new Promise((resolve, reject) => {})", "Promise.resolve(() => {})", "createPromise(() => {})"],
        correct: "new Promise((resolve, reject) => {})",
    },
];