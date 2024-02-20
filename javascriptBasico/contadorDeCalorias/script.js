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
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type=number]"
  );
  const lunchNumberInputs = document.querySelectorAll(
    "#lunch input[type=number]"
  );
  const dinnerNumberInputs = document.querySelectorAll(
    "#dinner input[type=number]"
  );
  const snacksNumberInputs = document.querySelectorAll(
    "#snacks input[type=number]"
  );
  const exerciseNumberInputs = document.querySelectorAll(
    "#exercise input[type=number]"
  );

  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  // if para verificar que el dato que se ingresa es valido
  if (isError) {
    return;
  }
  // suma de las calorias ingresadas
  const consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

  // calculo de calorias restantes
  const remainingCalories =
    budgetCalories - consumedCalories + exerciseCalories;

  // operador ternario para ver si el usuario tiene deficit o superavit de calorias
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

  // salida de texto para que el usuario vea informacion
  output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>`;
}

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
