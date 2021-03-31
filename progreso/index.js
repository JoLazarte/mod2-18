/*
Crear un documento html con
-Una barra de progreso (con un div dentro de otro)
-Un elemento de texto que indique el progreso (p. ej. 50%)
-Dos botones, uno para incrementar y otro para dismininuir 
la barra (- y +)
Cuando se apretan los botones, la barra de progreso tiene 
que aumentar o disminuir respectivamente y el texto que 
indica el porcentaje de progreso tiene que actualizarse
lo mismo tiene que pasar cuando se apreta la flecha 
derecha (aumentar progreso) y la flecha izquierda 
(disminuir progreso) el incremento/decremento 
es del 10%
*/
const barra = document.querySelector("#progreso");
const disminuye = document.querySelector("#botonDerecho");
const incrementa = document.querySelector("#botonIzquierdo");
let ancho = 10;


const incrementar = () => {
    if(ancho < 100) {
    ancho = ancho + 10;
    if(ancho > 10 && ancho <= 100){
    barra.style = `width:${ancho}%;` 
    barra.textContent = `${ancho}%`
    }
}};
incrementa.addEventListener("click", incrementar);

const disminuir = () => {
    if(ancho > 10){
    ancho = ancho - 10;
    if(ancho > -10 && ancho <= 100){
    barra.style = `width:${ancho}%;` 
    barra.textContent = `${ancho}%`
    } 
}};
disminuye.addEventListener("click", disminuir);

const body = document.querySelector("body");
body.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key == "ArrowRight") {
        incrementar();
    } else if (event.key == "ArrowLeft") {
        disminuir();
    } else {
        alert('Pulsa la flecha izquierda o derecha');
    }
});