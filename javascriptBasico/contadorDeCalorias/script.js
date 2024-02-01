// capturamos los elementos del HTML.

const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

// creamos una funcion para captrar un string y convertirlo en un numero
function cleanInputString(str) {
  // el metodo split separa en partes un string en un nuevo array de substrings segun el argumento de separacion que le coloquemos
  //   const strArray = str.split("");
  //   const cleanStrArray = [];
  //   for (let i = 0; i < strArray.length; i++) {
  //     if (!["+", "-", " "].includes(strArray[i])) {
  //       cleanStrArray.push(strArray[i]);
  //     }
  //   }
  const regex = /\+-\s/;
}
