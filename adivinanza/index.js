/*
Crear un documento html con una adivinanza 
(o una pregunta) y 3 botones con posibles respuestas. 
Si se clickea la respuesta correcta, se debe 
mostrar en el documento un texto que lo indique 
(por ejemplo: ¡Correcto!) debajo de la adivinanza, 
y el botón seleccionado debe ponerse con un color 
de fondo verde. Si se clickea una respuesta 
incorrecta, se debe mostrar en el documento un 
texto que lo indique (por ejemplo: ¡Le erraste!) 
y mostrar el botón con la respuesta correcta con 
un color de fondo verde y los otros dos con un 
color de fondo rojo.

*/
const respuesta = document.querySelector("#respuesta");
const opcionA = document.querySelector("#opA");
const opcionB = document.querySelector("#opB");
const opcionC = document.querySelector("#opC");

opcionA.addEventListener("click", (event) =>{
    //event.preventDefault();
    respuesta.innerHTML = "<i>Incorrecto.</i>";
    opcionA.style = "background-color: rgb(199, 68, 44);color:white;";
    opcionB.style = "background-color:darkcyan;color:white;"
    opcionC.style = "background-color: rgb(199, 68, 44);color:white;";
    console.log("click", respuesta.textContent);
    
    //opcionB.removeEventListener("click", event);
    //opcionC.removeEventListener("click", event);

});

opcionB.addEventListener("click", (event) =>{
    //event.preventDefault();
    respuesta.innerHTML = "<i>¡Correcto!</i>";
    opcionB.style = "background-color:darkcyan;color:white;"
    console.log("click", respuesta.textContent);

});
opcionC.addEventListener("click", (event) =>{
    //event.preventDefault();
    respuesta.innerHTML = "<i>Incorrecto.</i>";
    opcionA.style = "background-color: rgb(199, 68, 44);color:white;";
    opcionB.style = "background-color:darkcyan;color:white;"
    opcionC.style = "background-color: rgb(199, 68, 44);color:white;";
    console.log("click", respuesta.textContent);
});



