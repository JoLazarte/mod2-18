/*
Repetir el ejercicio anterior, pero en vez de 
cambiar la imagen grande cuando se clickean las 
imágenes chicas, hacerlo cuando se pasa el mouse 
por encima de las imágenes chicas.

*/
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");

const imagenGrande = document.querySelector(".grande");

const cambioImg = (img)=>{
    imagenGrande.src = img.src;
};

img1.addEventListener("mouseover", ()=>{
    cambioImg(img1);
});
img2.addEventListener("mouseover", ()=>{
    cambioImg(img2);
});
img3.addEventListener("mouseover", ()=>{
    cambioImg(img3);
});
img4.addEventListener("mouseover", ()=>{
    cambioImg(img4);
});
img5.addEventListener("mouseover", ()=>{
    cambioImg(img5);
});
img6.addEventListener("mouseover", ()=>{
    cambioImg(img6);
});
img7.addEventListener("mouseover", ()=>{
    cambioImg(img7);
});