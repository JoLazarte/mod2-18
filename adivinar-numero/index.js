
const rand = () => {
    let randomNum = Math.random() * (9 - 0) + 0;
    return Math.round(randomNum);
};
//console.log(rand());
let numeroAleatorio = rand();
console.log(numeroAleatorio);
//El número que se debe adivinar
//es un valor entre 0 y 9

let numeroSeleccionado = 0;
//El usuario debe elegir entre 0 y 9 usando los numeros del teclado.
//Debe mostrarse en el dom (html) junto con "una pista" (el número que debes adivinar es mas grande/chico) o "adivinaste".

const pistaOrespuesta = document.querySelector("#pistaRespuesta");
const body = document.querySelector("body");

const adivinaElNumero = (event) => {
    numeroSeleccionado = event.key;
    console.log(numeroSeleccionado);
    if (numeroAleatorio == numeroSeleccionado) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado} ¡Adivinaste!`;
    } else if (numeroAleatorio < numeroSeleccionado) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } else if (numeroAleatorio > numeroSeleccionado) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    }
};
body.addEventListener('keypress', adivinaElNumero);

const reiniciar = document.querySelector("#reiniciar");
const nuevaPartida = document.querySelector("#nuevaPartida")

reiniciar.addEventListener("click", () => {
    nuevaPartida.textContent = "¡Nueva partida!";
    pistaOrespuesta.textContent = "";
    numeroAleatorio = rand();
    console.log(numeroAleatorio);
    body.addEventListener('keypress', adivinaElNumero);

});
/*
body.addEventListener('keypress', (event) => {
    numeroSeleccionado = event.key;
    console.log(numeroSeleccionado);
    if (numeroAleatorio == numeroSeleccionado) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado} ¡Adivinaste!`;
    } if (numeroAleatorio == 0 && numeroSeleccionado > 0) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 1 && numeroSeleccionado < 1) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 1 && numeroSeleccionado > 1) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 2 && numeroSeleccionado < 2) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 2 && numeroSeleccionado > 2) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 3 && numeroSeleccionado < 3) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 3 && numeroSeleccionado > 3) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 4 && numeroSeleccionado < 4) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 4 && numeroSeleccionado > 4) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 5 && numeroSeleccionado < 5) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 5 && numeroSeleccionado > 5) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 6 && numeroSeleccionado < 6) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 6 && numeroSeleccionado > 6) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 7 && numeroSeleccionado < 7) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 7 && numeroSeleccionado > 7) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 8 && numeroSeleccionado < 8) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } if (numeroAleatorio == 8 && numeroSeleccionado > 8) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es menor.`;
    } if (numeroAleatorio == 9 && numeroSeleccionado < 9) {
        pistaOrespuesta.textContent = `Elegiste ${numeroSeleccionado}. El número es mayor.`;
    } 
});
*/