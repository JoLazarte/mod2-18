const boton0 = document.querySelector(".boton0");
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const boton4 = document.querySelector(".boton4");
const boton5 = document.querySelector(".boton5");
const boton6 = document.querySelector(".boton6");
const boton7 = document.querySelector(".boton7");
const boton8 = document.querySelector(".boton8");
const boton9 = document.querySelector(".boton9");
const botonBorrar = document.querySelector(".botonBorrar");
const botonReinicio = document.querySelector(".botonReinicio");
const pin = document.querySelector("#pin");

const escribirPin = (boton)=>{ 
    //El "pin" va a ser un string, ya que un número se concatena al otro.
    if (pin.textContent.length < 6) {
    let numero = boton.textContent;
    //cada button tiene un textContent, que en este caso, es número
    pin.textContent = pin.textContent + numero;
    }
};

boton0.addEventListener("click",()=>{
    escribirPin(boton0);
});
boton1.addEventListener("click",()=>{
    escribirPin(boton1);
});
boton2.addEventListener("click",()=>{
    escribirPin(boton2);
});
boton3.addEventListener("click",()=>{
    escribirPin(boton3);
});
boton4.addEventListener("click",()=>{
    escribirPin(boton4);
});
boton5.addEventListener("click",()=>{
    escribirPin(boton5);
});
boton6.addEventListener("click",()=>{
    escribirPin(boton6);
});
boton7.addEventListener("click",()=>{
    escribirPin(boton7);
});
boton8.addEventListener("click",()=>{
    escribirPin(boton8);
});
boton9.addEventListener("click",()=>{
    escribirPin(boton9);
});

botonBorrar.addEventListener("click",()=>{
  let textoEditado = pin.textContent.slice(0, -1) 
  pin.textContent = textoEditado;
});
botonReinicio.addEventListener("click",()=>{ 
  pin.textContent = "";
});