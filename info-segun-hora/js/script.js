// audios

let audioVentana3 = new Audio("assets/ducha.mp3");

// cuadro de texto

let ventana3 = document.getElementById("ventana3");
let informacionVentana3 = document.getElementById("informacion-ventana3");
let visible = false;

ventana3.onclick = function () {
  if (visible == true) {
    visible = false;
    informacionVentana3.style.opacity = "0";
    audioVentana3.pause();
  } else {
    visible = true;
    informacionVentana3.style.opacity = "1";
    audioVentana3.play();
  }
};

// hora local

let elementoHora = document.getElementById("hora");

function actualizarReloj() {
  let ahora = new Date();

  let horas = String(ahora.getHours()).padStart(2, "0");
  let minutos = String(ahora.getMinutes()).padStart(2, "0");
  let segundos = String(ahora.getSeconds()).padStart(2, "0");

  console.log(horas + ":" + minutos + ":" + segundos);

  elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

let textoVentana3 = document.getElementById("texto-ventana3");

function actualizarContenido() {
  let ahora = new Date();
  let horas = ahora.getHours();

  // entre 6 y 11
  if (horas >= 6 && horas < 11) {
    textoVentana3.innerHTML =
      "<b>Fernanda</b>, de 27 años, se alista para su primer día en su nuevo trabajo.";
    audioVentana3.src = "assets/ducha.mp3";
    audioVentana3.load();
    // entre 11 y 18
  } else if (horas >= 11 && horas < 18) {
    textoVentana3.innerHTML =
      "<b>Fernanda</b>, de 27 años, no está en la casa, está en su primer día de trabajo.";
    audioVentana3.src = null;
    // entre 18 y 21
  } else if (horas >= 18 && horas < 21) {
    textoVentana3.innerHTML = "<b>Fernanda</b>, de 27 años, prepara la cena.";
    audioVentana3.src = "assets/cortar-vegetales.mp3";
    audioVentana3.load();
  }
}

// Ejecutar inmediatamente
actualizarContenido();

// Volver a comprobar cada minuto
setInterval(actualizarContenido, 60000);
