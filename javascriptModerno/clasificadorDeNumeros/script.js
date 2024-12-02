// Capturamos al boton en una variable
const sortButton = document.getElementById("sort");

// Creamos la funcion que va a ordenar los valores
const sortInputArray = (event) => {
  event.preventDefault();
  // Utilizamos spread operator para descomponer el objeto HTML generado por tomar elementos por clase
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value)); // Usamos Number() para convertir los valores en numero
  updateUI(inputValues);
};

// Capturamos el click sobre el boton Sort
sortButton.addEventListener("click", sortInputArray);

// Creamos una funcion que actualice los valores en pantalla
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};
