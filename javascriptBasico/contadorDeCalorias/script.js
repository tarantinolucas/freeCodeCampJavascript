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

// funciones para que el usuario ingrese datos de las entradas
function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"></input>
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;
  // usamos el elemento insertAdjacentHTML() para agregar al final (beforend) del elemento seleccionado la nueva entrada.
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

// funcion para detectar eventos
function calculateCalories(e) {}

// eventListener para detectar click sobre el boton "addEntry" y ejecutar la funcion correspondiente
addEntryButton.addEventListener("click", addEntry);

// funcion para tomar el valor numerico de las calorias ingresadas
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (let i = 0; i < list.length; i++) {
    const currVal = cleanInputString(list[i].value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}
