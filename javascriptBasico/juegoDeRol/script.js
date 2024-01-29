// let es una mejor manera de declarar variable que con la palabra reservada "var", ya que esta puede producir bugs.

// declaracion de variables de xp, vida y oro
let xp = 0;
let health = 100;
let gold = 50;

// Se declara variable utilizando camelCase, cuando el nombre de una variable tiene mas de una letra, la primera letra de la primer palabra es con minuscula, y el resto de las palabras siguientes, la primera letra es en mayuscula.

let currentWeapon = 0;
let fighting;
let monsterHealth;

// declaracion del inventario del jugador, utilizamos un array de datos ya que puede tener varios elementos.
let inventory = ["stick"];

// utilizamos querySelector, para seleccionar un elemento del HTML, como parametro para obtenerlo le pasamos el selector css referido a ese elemento del DOM

// button1 no va cambiar su valor asi que lo asignamos con const, en caso de que lo intentemos reasignar JS arrojara un error

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// los arrays pueden recibir muchos datos, incluyendo objetos. Los objetos son elementos que cuenta con una "clave: valor". La clave tambien conocida como propiedad, cuando la propiedad tiene mas de una palabra se escribe entre "comillas".
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];

const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];

// declaracion de funciones

// creamos una funcion que reciba un parametro para que sea reutilizable

function update(location) {
  // utilizamos notacion de corchetes para acceder a la posicion de los array
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  // utilizamos notacion de puntos para acceder a la propiedad del objeto
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  // colocamos un condicional dentro de la funcion buyHealth para que evitar que el jugador compre si no tiene oro.
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function fightSlime() {
  console.log("Fighting slime.");
}
function fightBeast() {
  console.log("Fighting beast.");
}
// inicializando botones

// accedemos al button1 por notacion de puntos, y tomamos el evento "onclick" para ejecutar una funcion determinada
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
