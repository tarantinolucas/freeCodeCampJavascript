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
  // utilizamos expresiones regulares para filtrar strings y que no tengan simbolos +, - o espacios vacios.
  const regex = /[+-\s]/g;
  // utilizamos el metodo replace() para reemplazar patrones de la expresion regular definida por caracteres vacios
  return str.replace(regex, "");
}

// creamos una funcion para evitar las notaciones exponenciales
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}


// funcion para que el usuario ingrese datos
function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>`;
}
