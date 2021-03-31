const botonIzq = document.querySelector("#botonIzquierdo");
botonIzq.style = "margin-right:220px;";

const increase = () => {
    const miBarra = document.querySelector("#myBar");
    let width = 10;
    const id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            miBarra.style.width = width + "%";
            miBarra.innerHTML = width + "%";
        }
    }
};

const decrease = () => {
    const miBarra = document.querySelector("#myBar");
    let width = 100;
    const id = setInterval(frame,10);
    function frame() {
        if (width <= 10) {
            clearInterval(id);
        } else {
            width--;
            miBarra.style.width = width + "%";
            miBarra.innerHTML = width + "%";
        }
    }
};

const body = document.querySelector("body");
body.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key == "ArrowRight") {
        increase();
    } else if (event.key == "ArrowLeft") {
        decrease();
    } else {
        alert('Pulsa la flecha izquierda o derecha');
    }
});