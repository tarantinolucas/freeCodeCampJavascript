// Funciones varias para utilizar dentro de la hoja de calculo

// Funcion para sumar elementos
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);
// Funcion para verificar si un numero es par o impar
const isEven = (num) => num % 2 === 0;
// Funcion para calcular el promedio
const average = (nums) => sum(nums) / nums.length;

// Funcion para calcular la media
const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
};

// Fin de las funciones de la hoja de cálculo

/* ============================================ */

const spreadsheetFunctions = {
  sum,
  average,
  median,
};

// Creamos una funcion para crear un array de N cantidad de valores numericos
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

// Creamos una funcion para crear un array de N cantidad de valores alfabeticos
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );

// Funcion para evaluar la formula utilizada en una celda especifica
const evalFormula = (x, cells) => {
  const idToText = (id) => cells.find((cell) => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = (num) => (character) => idToText(character + num);
  const addCharacters = (character1) => (character2) => (num) =>
    charRange(character1, character2).map(elemValue(num));
  const rangeExpanded = x.replace(
    rangeRegex,
    (match, char1, num1, char2, num2) => {}
  );
};

// Utilizamos el metodo onload de windows para ejecutar funciones cuando se carga la página
window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    // Creamos un div
    const label = document.createElement("div");
    // Seteamos la clase "label" sobre el div
    label.className = "label";
    // Seteamos el contenido con el argumento de entrada
    label.textContent = name;
    // Agregamos el div creado como hijo del contenedor
    container.appendChild(label);
  };

  // Creamos las columnas con letras de la A a la J
  const letters = charRange("A", "J");
  letters.forEach(createLabel);

  // Creamos celdas del valor 1 al 99
  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      container.appendChild(input);
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
    });
  });
};

// Funcion para actualizar el valor de los inputs
const update = (event) => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith("=")) {
  }
};
