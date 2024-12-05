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
  // Obtenemos la mediana de los numeros ingresados
  const median = getMedian(numbers);
  // Obtenemos la moda de los numeros ingresados
  const mode = getMode(numbers);
  // Obtenemos el rango de los numeros ingresados
  const range = getRange(numbers);
  // Obtenemos la varianza de los numeros ingresados
  const variance = getVariance(numbers);
  // Obtenemos la desviacion estandar
  const standardDeviation = getStandardDeviation(numbers);

  // Mostramos el valor en pantalla
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
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

// Funcion para obtener la mediana, el punto medio de los valores
const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]]);
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
};

/* Pruebas para encontrar la mediana

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
// Encontrando la mediana en un array con cantidad de elementos impares
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
// Encontrando la mediana en un array con cantidad de elementos pares
const evenListMedian = getMean([testArr2[testArr2.length / 2], testArr2[testArr2.length / 2 - 1]]);
console.log(evenListMedian);

Fin de las pruebas */

// Funcion para encontrar la moda
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
};

// Funcion para encontrar el rango
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

// Funcion para encontrar la varianza
const getVariance = (array) => {
  const mean = getMean(array);

  /* Eliminaremos lo que esta en la parte inferior porque lo haremos todo en la misma variable

  const differences = array.map((el) => el - mean);
  const squaredDifferences = differences.map((el) => el ** 2);
  const sumSquaredDifferences = squaredDifferences.reduce(
    (acc, el) => acc + el,
    0
  );

  Fin del comentario */

  const variance =
    array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length;
  return variance;
};

// Funcion para encontrar la desviación estandar
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
};
