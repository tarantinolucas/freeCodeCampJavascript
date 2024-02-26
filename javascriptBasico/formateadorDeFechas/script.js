// capturamos elemtentos de html

const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// utilizamos el constructor Date()
const date = new Date();

// obtenemos el dia del mes con el metodo getDate()
const day = date.getDate();

// obtenemos el numero de mes. Le tenemos que sumar 1 porque el metodo getMonth() entrega un numero entre 0 y 11, siendo enero el numero 0
const month = date.getMonth() + 1;

// obtenemos el año
const year = date.getFullYear();

// obtenemos las horas
const hours = date.getHours();

// obtenemos los minutos
const minutes = date.getMinutes();

// constante para crear el formato que queramos de la fecha
const formattedDate = `${day}-${month}-${year}`;

/*
mostramos la fecha en consola
console.log(formattedDate);
*/

// mostramos en pantalla la fecha formateada
currentDateParagraph.textContent = formattedDate;

// usamos el evento change para ver cuando cambia la opcion elegida

dateOptionsSelectElement.addEventListener("change", () => {
  // usamos una declaracion switch para mostrarle al usuario una salida distinta segun la opcion que elija
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});
