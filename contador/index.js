/*

const bot1 =  document.querySelector("#botonA");
const bot2 =  document.querySelector("#botonB");
const bot3 =  document.querySelector("#botonC");
const bot4 =  document.querySelector("#botonD");
const bot5 =  document.querySelector("#botonE");
const bot6 =  document.querySelector("#botonF");
  
*/

const numeroInicial = document.querySelector("#numeroContador");
let numeroNuevo = 0;

/*

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

*/

//Con funciones:

const config = {
    "#botonA": 1,
    "#botonB": -1,
    "#botonC": 5,
    "#botonD": -5,
    "#botonE": 10,
    "#botonF": -10    
}

console.log(Object.entries(config));
/*
Object.entries(config).map(entrie => {
    const [ id, value ] = entrie

    console.log(id, value)

    document.querySelector(id).addEventListener("click", () =>{
        console.log("click", id, value, numeroNuevo)
        numeroNuevo += value;
        numeroInicial.textContent = numeroNuevo;
    });
})
*/
Object.entries(config).map(([ id, value ]) => {

    console.log(id, value)

    document.querySelector(id).addEventListener("click", () =>{
        console.log("click", id, value, numeroNuevo)
        numeroNuevo += value;
        numeroInicial.textContent = numeroNuevo;
    });
});
