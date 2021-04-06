/*
Crear un documento html que tenga 6 botones con un 
color de fondo distinto, y un div cuadrado grande. 
Cuando se clickea un botón, el div debe cambiar 
su color de fondo al mismo color de fondo que el 
del botón clickeado.

*/
const rojo = document.querySelector(".rojo");
const amarillo = document.querySelector(".amarillo");
const verde = document.querySelector(".verde");
const azul = document.querySelector(".azul");
const rosa = document.querySelector(".rosa");
const naranja = document.querySelector(".naranja");
const cuadrado = document.querySelector("#cuadrado");


rojo.addEventListener("click", () => {
    cuadrado.className = "rojo";
})
amarillo.addEventListener("click", () => {
    cuadrado.className = "amarillo";
})
verde.addEventListener("click", () => {
    cuadrado.className = "verde";
})
azul.addEventListener("click", () => {
    cuadrado.className = "azul";
})
rosa.addEventListener("click", () => {
    cuadrado.className = "rosa";
})
naranja.addEventListener("click", () => {
    cuadrado.className = "naranja";
})