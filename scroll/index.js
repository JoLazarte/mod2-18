/*
Crear un documento html con un body de 2000px de 
alto. Cuando se scrollea el body, cambiar el color 
de fondo cada 500px, por ejemplo:

Scroll	Color de fondo
0px - 500px	red
501px - 1000px	green
1001px - 1500px	blue
1501px - 2000px	orange

*/
const body = document.querySelector("body");

window.onscroll = function() {cambioColorDeFondo()};
   const cambioColorDeFondo = () => {
  if ((document.body.scrollTop > 0 && document.body.scrollTop <= 500) 
    || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 500)) {
    body.className = "blue";
  } else if ((document.body.scrollTop > 500 && document.body.scrollTop <= 1000) 
  || (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop <= 1000)) {
    body.className = "red";
  } else if ((document.body.scrollTop > 1000 && document.body.scrollTop <= 1500) 
  || (document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop <= 1500)) {
    body.className = "green";
  } else if ((document.body.scrollTop > 1500 && document.body.scrollTop <= 2000) 
  || (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop <= 2000)) {
    body.className = "yellow";
  }
};
body.addEventListener("scroll", cambioColorDeFondo);