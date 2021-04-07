/*
Hacer un programa que al apretar la tecla espacio, 
cambie el color de fondo del body por un color 
aleatorio. Para eso, crear una función 
obtenerColorAleatorio() que devuelva un string con 
el formato de ejemplo rgb(0,0,0) donde los valores 
de r, g y b se generan aleatoriamente 
(con números del 1 al 255).

*/

const body = document.querySelector("body");

const obtenerColorAleatorio = (event) => {
    if (event.code == "Space") {
        let stringColor = "rgb";
        const colorRGB = stringColor.split("");
        console.log(colorRGB);
        let r = Number(colorRGB[0]) 
        r = rand();
        let g = Number(colorRGB[1]) 
        g = rand();
        let b = Number(colorRGB[2]) 
        b = rand();
        body.style = `background-color: rgb(${r},${g},${b});`;
       
    }
};

const rand = () => {
    let randomNum = Math.random() * (255 - 0) + 0;
    return Math.round(randomNum);
};

body.addEventListener('keyup', obtenerColorAleatorio);