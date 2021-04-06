/*
Crear dos contenedores, uno para imágenes y otro 
para favoritos. En el contenedor de imágenes, 
agregar al menos 10 imágenes (cualesquiera). 
Al clickear una imagen en el contenedor de 
imágenes, se debe agregar la misma imagen al 
contenedor de favoritos. Al clickear una imagen 
en el contenedor de favoritos, se debe eliminar 
la imagen seleccionada de dicho contenedor.

*/
const listaImagenes = document.querySelector(".imagenes");
const misFavoritos = document.querySelector(".favoritos");
const img1 = document.querySelector("#imagen1");
const img2 = document.querySelector("#imagen2");
const img3 = document.querySelector("#imagen3");
const img4 = document.querySelector("#imagen4");
const img5 = document.querySelector("#imagen5");
const img6 = document.querySelector("#imagen6");
const img7 = document.querySelector("#imagen7");
const img8 = document.querySelector("#imagen8");
const img9 = document.querySelector("#imagen9");
const img10 = document.querySelector("#imagen10");

const fav1 = document.querySelector("#fav1");
const fav2 = document.querySelector("#fav2");
const fav3 = document.querySelector("#fav3");
const fav4 = document.querySelector("#fav4");
const fav5 = document.querySelector("#fav5");
const fav6 = document.querySelector("#fav6");
const fav7 = document.querySelector("#fav7");
const fav8 = document.querySelector("#fav8");
const fav9 = document.querySelector("#fav9");
const fav10 = document.querySelector("#fav10");

const seleccionFavoritos = (img, fav) => {
    img.style = "display:none;";
    fav.style = "display:block;";
    fav.src = img.src;
}

const quitarFavoritos = (fav, img) => {
    fav.style = "display:none;";
    img.style = "display:block;";
    img.src = fav.src;
}

img1.addEventListener("click", ()=>{
    seleccionFavoritos(img1, fav1);
});
fav1.addEventListener("click", ()=>{
    seleccionFavoritos(fav1, img1);
});

img2.addEventListener("click", ()=>{
    seleccionFavoritos(img2, fav2);
});
fav2.addEventListener("click", ()=>{
    seleccionFavoritos(fav2, img2);
});

img3.addEventListener("click", ()=>{
    seleccionFavoritos(img3, fav3);
});
fav3.addEventListener("click", ()=>{
    seleccionFavoritos(fav3, img3);
});

img4.addEventListener("click", ()=>{
    seleccionFavoritos(img4, fav4);
});
fav4.addEventListener("click", ()=>{
    seleccionFavoritos(fav4, img4);
});

img5.addEventListener("click", ()=>{
    seleccionFavoritos(img5, fav5);
});
fav5.addEventListener("click", ()=>{
    seleccionFavoritos(fav5, img5);
});

img6.addEventListener("click", ()=>{
    seleccionFavoritos(img6, fav6);
});
fav6.addEventListener("click", ()=>{
    seleccionFavoritos(fav6, img6);
});

img7.addEventListener("click", ()=>{
    seleccionFavoritos(img7, fav7);
});
fav7.addEventListener("click", ()=>{
    seleccionFavoritos(fav7, img7);
});

img8.addEventListener("click", ()=>{
    seleccionFavoritos(img8, fav8);
});
fav8.addEventListener("click", ()=>{
    seleccionFavoritos(fav8, img8);
});

img9.addEventListener("click", ()=>{
    seleccionFavoritos(img9, fav9);
});
fav9.addEventListener("click", ()=>{
    seleccionFavoritos(fav9, img9);
});

img10.addEventListener("click", ()=>{
    seleccionFavoritos(img10, fav10);
});
fav10.addEventListener("click", ()=>{
    seleccionFavoritos(fav10, img10);
});