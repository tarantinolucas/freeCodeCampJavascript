// Capturamos al boton en una variable
const sortButton = document.getElementById("sort");

// Creamos la funcion que va a ordenar los valores
const sortInputArray = (event) => {
  event.preventDefault();
  // Utilizamos spread operator para descomponer el objeto HTML generado por tomar elementos por clase
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value)); // Usamos Number() para convertir los valores en numero
  const sortedValues = selectionSort(inputValues);
  // Usamos el array ya ordenado para mostrarlo
  updateUI(sortedValues);
};

/* ----------------------------------------------------- */
/* Funcion para ordenar los datos por metodo de burbujeo */
/* ----------------------------------------------------- */
// Metodo inactivo, se esta usando el metodo de seleccion
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // Este console.log permite ver como se van comparando y acomodando los numeros
      console.log(array, array[j], array[j + 1]);
      // Comparamos dos elementos, si a es mayor que b, entonces se cambian de posicion, se repite el proceso hasta que todos esten ordenados
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
/* ----------------------------------------------------- */
/* Fin de la funcion ----------------------------------- */
/* ----------------------------------------------------- */



/* ------------------------------------------------------ */
/* Funcion para ordenar los datos por metodo de seleccion */
/* ------------------------------------------------------ */
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};
/* ----------------------------------------------------- */
/* Fin de la funcion ----------------------------------- */
/* ----------------------------------------------------- */

// Capturamos el click sobre el boton Sort
sortButton.addEventListener("click", sortInputArray);

// Creamos una funcion que actualice los valores en pantalla
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};
