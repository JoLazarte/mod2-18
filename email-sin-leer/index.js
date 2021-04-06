/*
Crear un documento html que tenga:

un título h1 que diga: Mis emails
un título h2 que diga: Bandeja de entrada
una lista desordenada con 10 ítems con lorem ipsum 
(4 o 5 palabras cada uno, no un párrafo entero)
Inicialmente los ítems deben estar en negrita y con 
color negro. Cuando se clickea uno de ellos, se 
debe sacarle la negrita y ponerle un color gris 
(simulando que el email fue leído)


*/
const mail1 = document.querySelector("#mail1");
const mail2 = document.querySelector("#mail2");
const mail3 = document.querySelector("#mail3");
const mail4 = document.querySelector("#mail4");
const mail5 = document.querySelector("#mail5");
const mail6 = document.querySelector("#mail6");
const mail7 = document.querySelector("#mail7");
const mail8 = document.querySelector("#mail8");
const mail9 = document.querySelector("#mail9");
const mail10 = document.querySelector("#mail10");

mail1.addEventListener("click", ()=>{
    mail1.className = "mailLeido";
})
mail2.addEventListener("click", ()=>{
    mail2.className = "mailLeido";
})
mail3.addEventListener("click", ()=>{
    mail3.className = "mailLeido";
})
mail4.addEventListener("click", ()=>{
    mail4.className = "mailLeido";
})
mail5.addEventListener("click", ()=>{
    mail5.className = "mailLeido";
})
mail6.addEventListener("click", ()=>{
    mail6.className = "mailLeido";
})
mail7.addEventListener("click", ()=>{
    mail7.className = "mailLeido";
})
mail8.addEventListener("click", ()=>{
    mail8.className = "mailLeido";
})
mail9.addEventListener("click", ()=>{
    mail9.className = "mailLeido";
})
mail10.addEventListener("click", ()=>{
    mail10.className = "mailLeido";
})