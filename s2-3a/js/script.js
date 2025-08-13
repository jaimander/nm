// audio

let ventana2 = document.getElementById("ventana2");
let sonido1 = document.getElementById("audio1");

ventana2.onclick = function () {
    sonido1.play();
};


// cuadro de texto

let ventana3 = document.getElementById("ventana3");
let informacionVentana3 = document.getElementById("informacion-ventana3");
let visible = false;

ventana3.onclick = function () {
    if(visible == true){
        visible = false;
    }
    else{
        visible = true;
    }

    if(visible == true){
        informacionVentana3.style.opacity = "1";
    }
    else{
        informacionVentana3.style.opacity = "0";
    }
    
};
