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

// funcion para renderizar la playlist
const renderSongs = (array) => {
  // iteramos con el metodo map la lista de canciones
  const songsHTML = array
    .map((song) => {
      return `
<li id="song-${song.id}" class="playlist-song">
  <button class="playlist-song-info">
    <span class="playlist-song-title">${song.title}</span>
    <span class="playlist-song-artist">${song.artist}</span>
    <span class="playlist-song-duration">${song.duration}</span>
  </button>
  <button class="playlist-song-delete" aria-label="Delete ${song.title}">
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
  </button>
</li>`;
    })
    .join("");
  playlistSongs.innerHTML = songsHTML;
};

// usamos el encadenamiento opcional "?." que ayuda a evitar errores al acceder a propiedades anidadas que pueden ser nulas o indefinidas, que generalmente sin esto arrojarian error

renderSongs(userData?.songs);
