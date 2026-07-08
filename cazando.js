let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntaje = 0;
let tiempo = 10;
let juego = null;
const ALTO_GATO =40;
const ANCHO_GATO = 150;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

function iniciarJuego(){
    juego = setInterval(restarTiempo, 1000);
    gatoX = canvas.width/2 - ANCHO_GATO/2;
    gatoY = canvas.height/2 - ALTO_GATO/2;
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "red");
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
    detectarColision()
}

function moverDerecha(){
    gatoX = gatoX + 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision()
}

function moverArriba(){
    gatoY = gatoY - 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision()
}

function moverAbajo(){
    gatoY = gatoY + 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision()
}

function detectarColision() {
    if (gatoX + ANCHO_GATO > comidaX &&
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY &&
        gatoY < comidaY + ALTO_COMIDA) {
        aparecerComida();
        puntaje++;
        mostrarEnSpan("puntos", puntaje);
    }
}

function aparecerComida() {
    comidaX = generarAleatorio (0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio (0, canvas.height - ALTO_COMIDA);
}

function restarTiempo() {
    tiempo--;
    mostrarEnSpan("tiempo", tiempo);
    if (puntaje == 6) {
        alert("Ganaste");
        clearInterval(juego);
    } else if (tiempo == 0) {
         alert("game over");
        clearInterval(juego);
    }
}

function reiniciarJuego() {
    if (juego) {
        clearInterval(juego);
        juego = null;
    }
    puntaje = 0;
    tiempo = 10;
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    limpiarCanvas();
    iniciarJuego();
}

function desaparecerPersonaje(){
    ctx.clearRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}