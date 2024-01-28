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
