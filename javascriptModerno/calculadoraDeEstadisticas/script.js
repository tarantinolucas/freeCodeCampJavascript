// Funcion llamada desde el formulario de index.html, sera quien realice los calculos estadisticos
const calculate = (event) => {
  // Evitamos que la pagina se actualice
  event.preventDefault();
  // Capturamos el texto del input #numbers
  const value = document.querySelector("#numbers").value;
  // Creamos un array a partir del los numeros separados por coma con o sin espacio
  const array = value.split(/,\s*/g);
  // Usamos el metodo map() para convertir cada elemento del array en un numero ya que recibe strings
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  // Usamos el metodo filter() para filtrar los valores que no sean un numero
  // Comentamos el metodo ya que vamos a usarlo encadenado arriba.
  // const filtered = numbers.filter((el) => !isNaN(el));

  // Obtenemos la media de los numeros ingresados
  const mean = getMean(numbers);
  // Mostramos el valor en pantalla
  document.querySelector("#mean").textContent = mean;
};

// Funcion encargada de obtener la media de los valores ingresados
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

/* Comentamos la funcion ya que usaremos una version reducida

const getMean = (array) => {
  // Con el metodo reduce() hacemos multiples sumas para reducir el array a un valor, seteamos el acumulador en 0 para la primera iteracion
  const sum = array.reduce((acc, el) => acc + el, 0);
  // Calculamos la media
  const mean = sum / array.length;
  return mean;
};

*/
