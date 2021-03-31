const texto = document.querySelector("h3");
const barra = document.querySelector(".progreso");
const disminuye = document.querySelector(".disminuye");
const incrementa = document.querySelector(".incrementa");
const body = document.querySelector("body");
let ancho = 0;


const incrementar = () =>{
    if(ancho<100){
    ancho = ancho + 10;
    if(ancho>0 && ancho<=100){
    barra.style = `width:${ancho}%;` 
    texto.textContent = `${ancho}%`
    }
}
}

incrementa.addEventListener("click", incrementar);

const incrementarKey = (event) =>{
    let tecla = event.key;
    if(tecla == "ArrowRight"){
    incrementar();
    }
}

body.addEventListener("keydown", incrementarKey);

const disminuir = () =>{
    if(ancho>0){
    ancho = ancho - 10;
    if(ancho>-10 && ancho<=100){
    barra.style = `width:${ancho}%;` 
    texto.textContent = `${ancho}%`
    } 
}
}

disminuye.addEventListener("click", disminuir);

const disminuirKey = (event) =>{
    let tecla = event.key;
    if(tecla == "ArrowLeft"){
    disminuir();
    }
}

body.addEventListener("keydown", disminuirKey);