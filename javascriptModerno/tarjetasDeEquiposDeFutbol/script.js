// En este proyecto vamos a aprender sobre desestructuracion de objetos, objetos anidados, parametros predeterminados, detectores de eventos y declaraciones switch entre tantas otras cosas.

// Gracias una vez mas freeCodeCamp.org

// capturamos los elementos del dom con los que vamos a trabajar
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// creamos un objeto para contener la informacion de nuetro equipo de futbol
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

// utilizamos el siguiente metodo para "congelar" las propiedades del objeto y que no pueda ser modificado

Object.freeze(myFavoriteFootballTeam);

// usamos notacion de puntos para acceder a la propiedad sport y almacenarla en una variable

/* lo comentamos porque vamos a usar destructuring para crear las variables

const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;

*/

// usamos destructuring para crear las variables y obtener datos desde un objeto

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// mostramos el contenido en pantalla asignando los valores desestructurados

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// creamos scripts para darle funcionalidad a los filtros de "filter teammates"
const setPlayerCards = (arr = players) => {
  // creamos funcion para agregar informacion de la tarjeta del jugador a la pagina
  playerCards.innerHTML += arr
    .map(
      // desestructuramos las propiedades del array de objetos ingresado
      ({ name, position, number, isCaptain, nickname }) =>
        // contenedor html de las tarjetas de jugador
    `
    <div class="player-card">
      <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>      
      <p>Position: ${position}</p>
      <p>Number: ${number}</p>
      <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
    </div>
    `
    )
    // utilizamos el metodo join("") para unir todos los elementos de la matriz resultante del metodo map()
    .join("");
};

// creamos una funcion que detecte cuando hace una seleccion de la lista desplegable

playersDropdownList.addEventListener("change", (e) => {
  /* el siguiente console.log sirve para mostrar en consola el elemento que esta siendo seleccionado en el dropdown

  console.log(e.target.value);

  */

  // limpiamos el contenido de la pagina
  playerCards.innerHTML = "";

  // utilizamos una declaracion switch para ver que se selecciona en el dropdown y realizar una funcion con respecto a eso
  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      setPlayerCards();
  }
});
