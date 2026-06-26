let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato() {
    ctx.fillStyle = "blue";
    ctx.fillRect(canvas.width/2 - 50, canvas.height/2 -15, 100, 30);
}