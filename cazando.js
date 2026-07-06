let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
const ALTO_GATO =30;
const ANCHO_GATO = 100;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

function iniciarJuego(){
    gatoX = canvas.width/2 - ANCHO_GATO/2;
    gatoY = canvas.height/2 - ALTO_GATO/2;
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "blue");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}