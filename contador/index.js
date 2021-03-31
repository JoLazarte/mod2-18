const bot1 =  document.querySelector("#botonA");
const bot2 =  document.querySelector("#botonB");
const bot3 =  document.querySelector("#botonC");
const bot4 =  document.querySelector("#botonD");
const bot5 =  document.querySelector("#botonE");
const bot6 =  document.querySelector("#botonF");
/*
let numeroInicial = document.querySelector("#numeroContador");

bot1.addEventListener('click', () => {
    numeroInicial.textContent++;
});

bot2.addEventListener('click', () => {
    numeroInicial.textContent--;
});

bot3.addEventListener('click', () => {
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
});

bot4.addEventListener('click', () => {
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
});

bot5.addEventListener('click', () => {
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
    numeroInicial.textContent++;
});

bot6.addEventListener('click', () => {
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
    numeroInicial.textContent--;
});

*/

const numeroInicial = document.querySelector("#numeroContador");
let numeroNuevo = 0;

bot1.addEventListener("click", () =>{
    numeroNuevo += 1;
    numeroInicial.textContent = numeroNuevo;
});

bot2.addEventListener("click", () =>{
    numeroNuevo -= 1;
    numeroInicial.textContent = numeroNuevo;
});

bot3.addEventListener("click", () =>{
    numeroNuevo += 5;
    numeroInicial.textContent = numeroNuevo;
});

bot4.addEventListener("click", () =>{
    numeroNuevo -= 5;
    numeroInicial.textContent = numeroNuevo;
});

bot5.addEventListener("click", () =>{
    numeroNuevo += 10;
    numeroInicial.textContent = numeroNuevo;
});

bot6.addEventListener("click", () =>{
    numeroNuevo -= 10;
    numeroInicial.textContent = numeroNuevo;
});