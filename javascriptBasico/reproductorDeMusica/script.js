// In this project you will learn basic string and array methods by building a music player app. You will be able to play, pause, skip, and shuffle songs.

// Let's start!

// En este proyecto vamos a aprender metodos basicos de arrays y strings creando un reproductor de musica. Seremos capaz de reproducir, pausar, saltar y  escuchar aleatoriamente canciones.

// Empecemos!

// Capturando los botones de la pagina
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

// Array para guardar canciones
const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
];

// creamos un elemento de audio HTML5

const audio = new Audio();

// informacion del usuario
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};
