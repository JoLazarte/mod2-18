const canc1 = prompt("Escriba el nombre de la primera canción");
const canc2 = prompt("Escriba el nombre de la segunda canción");
const canc3 = prompt("Escriba el nombre de la tercera canción");
const canc4 = prompt("Escriba el nombre de la cuarta canción");
const canc5 = prompt("Escriba el nombre de la quinta canción");

const cancionA = document.querySelector("#cancion1");
cancionA.textContent = canc1;

const cancionB = document.querySelector("#cancion2");
cancionB.textContent = canc2;

const cancionC = document.querySelector("#cancion3");
cancionC.textContent = canc3;

const cancionD = document.querySelector("#cancion4");
cancionD.textContent = canc4;

const cancionE = document.querySelector("#cancion5");
cancionE.textContent = canc5;
/*
canc1.addEventListener('keypress', (event) => {
    console.log(event.key);
    if (event.key == 'Enter') {
        cancionA.textContent = canc1;
    } else {
    }
});

const cancionB = document.querySelector("#cancion2");
cancionB.addEventListener('keypress', (event) => {
    console.log(event.key);
    if (event.key == 'Enter') {
        cancionB.textContent = canc2;
    } else {
    }
});

  const cancionC = document.querySelector("#cancion3");
  cancionC.addEventListener('keypress', (event) => {
      console.log(event.key);
      if (event.key == 'Enter') {
          cancionC.textContent = canc3;
      } else {
      }
});

const cancionD = document.querySelector("#cancion4");
cancionA.addEventListener('keypress', (event) => {
    console.log(event.key);
    if (event.key == 'Enter') {
        cancionD.textContent = canc4;
    } else {
    }
});

const cancionE = document.querySelector("#cancion5");
cancionE.addEventListener('keypress', (event) => {
    console.log(event.key);
    if (event.key == 'Enter') {
        cancionE.textContent = canc5;
    } else {
    }
});
*/