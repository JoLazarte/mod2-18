const botonMenos1 = document.querySelector("#botonMenos1");
const botonMas1 = document.querySelector("#botonMas1");
const botonMenos5 = document.querySelector("#botonMenos5");
const botonMas5 = document.querySelector("#botonMas5");
const botonMenos10 = document.querySelector("#botonMenos10");
const botonMas10 = document.querySelector("#botonMas10");
const numeroHtml = document.querySelector("h1");
let numero = 0;

botonMenos1.addEventListener("click", () =>{
   numero = numero -1;
   numeroHtml.textContent = numero;
})
botonMas1.addEventListener("click", () =>{
    numero = numero +1;
    numeroHtml.textContent = numero;
 })
 botonMenos5.addEventListener("click", () =>{
    numero = numero -5;
    numeroHtml.textContent = numero;
 })
 botonMas5.addEventListener("click", () =>{
    numero = numero +5;
    numeroHtml.textContent = numero;
 })
 botonMenos10.addEventListener("click", () =>{
    numero = numero -10;
    numeroHtml.textContent = numero;
 })
 botonMas10.addEventListener("click", () =>{
    numero = numero +10;
    numeroHtml.textContent = numero;
 })