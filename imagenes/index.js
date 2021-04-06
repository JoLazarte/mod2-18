/*
Crear un documento html con al menos 4 imágenes 
chicas (100px de alto) y una imagen grande 
(500px de alto). Cuando se clickean las imágenes 
chicas, la imagen grande se tiene que actualizar 
con la misma que la imagen chica clickeada.
//Se remplaza la grande con la pequeña que se clickeó
//y debe ser igual e grande.
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

img1.addEventListener("click", ()=>{
    cambioImg(img1);
});
img2.addEventListener("click", ()=>{
    cambioImg(img2);
});
img3.addEventListener("click", ()=>{
    cambioImg(img3);
});
img4.addEventListener("click", ()=>{
    cambioImg(img4);
});
img5.addEventListener("click", ()=>{
    cambioImg(img5);
});
img6.addEventListener("click", ()=>{
    cambioImg(img6);
});
img7.addEventListener("click", ()=>{
    cambioImg(img7);
});