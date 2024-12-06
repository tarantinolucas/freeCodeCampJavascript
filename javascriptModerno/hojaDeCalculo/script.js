// Creamos una funcion para crear un array de N cantidad de valores
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

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

  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
    });
  });
};
