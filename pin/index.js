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
const parrafo = document.querySelector(".parrafo");



const agregarNumero = (boton)=>{
    let largoDeTexto = parrafo.textContent.length;
    if(largoDeTexto<6){
    let numero = boton.textContent;
    parrafo.textContent = parrafo.textContent+numero;
    }
}

boton0.addEventListener("click",()=>{
    agregarNumero(boton0);
});
boton1.addEventListener("click",()=>{
    agregarNumero(boton1);
});
boton2.addEventListener("click",()=>{
    agregarNumero(boton2);
});
boton3.addEventListener("click",()=>{
    agregarNumero(boton3);
});
boton4.addEventListener("click",()=>{
    agregarNumero(boton4);
});
boton5.addEventListener("click",()=>{
    agregarNumero(boton5);
});
boton6.addEventListener("click",()=>{
    agregarNumero(boton6);
});
boton7.addEventListener("click",()=>{
    agregarNumero(boton7);
});
boton8.addEventListener("click",()=>{
    agregarNumero(boton8);
});
boton9.addEventListener("click",()=>{
    agregarNumero(boton9);
});

botonBorrar.addEventListener("click",()=>{
  let textoEditado = parrafo.textContent.slice(0, -1) 
  parrafo.textContent = textoEditado;
})
botonReinicio.addEventListener("click",()=>{ 
  parrafo.textContent = "";
})