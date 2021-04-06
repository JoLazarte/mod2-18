/*
Crear un documento html con 12 imágenes de posters 
de películas. Buscar imágenes de películas de 3 
géneros (acción, aventura, ciencia ficción, 
comedia, etc), 4 películas por género. Agregar al 
documento un botón por cada género, y un botón que 
diga Todas. Cuando se clickea el botón de un género, 
se tienen que mostrar sólo las películas 
correspondientes a ese género. Cuando se clickea 
el botón Todas se tienen que mostrar todas las 
películas.

*/
const cienciaFiccion = document.querySelector(".ciencia-ficcion");
const fantasia = document.querySelector(".fantasia");
const terror = document.querySelector(".terror");
const botonCienciaFiccion = document.querySelector("#btCiFic");
const botonFantasia = document.querySelector("#btFsia");
const botonTerror = document.querySelector("#btTerror");
const botonTodas = document.querySelector("#btTodas");

botonCienciaFiccion.addEventListener("click", ()=>{
    cienciaFiccion.style ="display:block;"
    fantasia.style ="display:none;"
    terror.style ="display:none;"
});
botonFantasia.addEventListener("click", ()=>{
    cienciaFiccion.style ="display:none;"
    fantasia.style ="display:block;"
    terror.style ="display:none;"
})
botonTerror.addEventListener("click", ()=>{
    cienciaFiccion.style ="display:none;"
    fantasia.style ="display:none;"
    terror.style ="display:block;"
})
botonTodas.addEventListener("click", ()=>{
    cienciaFiccion.style ="display:block;"
    fantasia.style ="display:block;"
    terror.style ="display:block;"
})