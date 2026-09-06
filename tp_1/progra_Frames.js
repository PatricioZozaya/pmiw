let FramesPato = [];
let frameActual = 0;
let animacionIniciada = false;
let contador = 0;
let Fondo;

function setup() {
  createCanvas(800, 600);
// Cargo los sprites de la carpeta data en el For
  for (let i = 0; i < 15; i++) {
    FramesPato[i] = loadImage("Data/00" + i + ".png");
  }

  fondo = loadImage("Data/Fondo.png");
}

function draw() {

  if (animacionIniciada == false) {

    background(54, 209, 224);

    textAlign(CENTER, CENTER);
    textSize(30);
    fill(255);
    text("Empezar", 400, 300);

  } else {

    image(fondo, 0, 0, 800, 600);

    image(FramesPato[frameActual], 400, 300, 200, 200);

    if (mouseIsPressed) {
// cambio de velocidad en los frames 
      if (frameCount % 20 == 0) {
        frameActual++;

        if (frameActual >= FramesPato.length) {
          frameActual = 0;
        }
      }

    } else {

      if (frameCount % 20 == 0) {
        frameActual++;

        if (frameActual >= FramesPato.length) {
          frameActual = 0;
        }
      }
    }
  }
}
//reinicio de animacion
function mousePressed() {
  frameActual = 0;
  contador = 0;
  animacionIniciada = true;
}
