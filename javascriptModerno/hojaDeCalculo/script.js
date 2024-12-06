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
