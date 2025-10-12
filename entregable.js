//https://youtu.be/Or5s2tFRaeg//

let imgPantallas = [];
let pantallas = [];
let pantallaActual = 0;
let lineasNarrativa;

function preload() {
  for (let i = 0; i <= 35; i++) {
    imgPantallas[i] = loadImage('data/' + i + '.png');
  }
  lineasNarrativa = loadStrings('data/lineas.txt');
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i <= 35; i++) {
    pantallas[i] = {
      img: imgPantallas[i],
      texto: lineasNarrativa[i] || "",
      botones: []
    };
  }
  botonesPantalla();
}

function draw() {
  background(0);
  let p = pantallas[pantallaActual];

  if (p.img) image(p.img, 0, 0, width, height);

  if (pantallaActual === 0 && p.texto !== "") {
    fill(255);
    textAlign(CENTER, TOP);
    textSize(56);
    text(p.texto, width / 2, 50);
  } else if (p.texto !== "") {
    mostrarTextoCentrado(p.texto);
  }

  for (let b of p.botones) {
    mostrarBoton(b.texto, b.x, b.y, b.w, b.h);
  }
}

function mostrarBoton(texto, x, y, ancho, alto) {
  push();
  translate(x, y);
  rectMode(CENTER);
  fill(0, 100, 0, 180);
  noStroke();
  rect(0, 0, ancho, alto, 10);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, 0, 0);
  pop();
}

function mousePressed() {
  let p = pantallas[pantallaActual];
  for (let b of p.botones) {
    if (colisionRectangular(b.x, b.y, b.w, b.h)) {
      pantallaActual = b.destino;
      break;
    }
  }
}

function colisionRectangular(x, y, ancho, alto) {
  return (
    mouseX > x - ancho / 2 &&
    mouseX < x + ancho / 2 &&
    mouseY > y - alto / 2 &&
    mouseY < y + alto / 2
  );
}

function mostrarTextoCentrado(texto) {
  const rectW = width * 0.85;
  const rectH = height * 0.15;
  const rectX = width / 2;
  const rectY = height - rectH / 2 - 75;
  const padding = 20;

  push();
  fill(0, 0, 0, 180);
  noStroke();
  rectMode(CENTER);
  rect(rectX, rectY, rectW, rectH, 10);
  pop();

  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);

  text(
    texto,
    rectX - rectW / 2 + padding / 2,
    rectY - rectH / 2 + padding / 2,
    rectW - padding,
    rectH - padding
  );
  pop();
}

function botonesPantalla () {
  pantallas[0].botones = [
    { texto: "Empezar", x: width / 2, y: 430, w: 150, h: 40, destino: 1 }
  ];

  pantallas[1].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 2 }
  ];

  pantallas[2].botones = [
    { texto: "Decision 1", x: 180, y: 430, w: 140, h: 40, destino: 3 },
    { texto: "Decision 2", x: 460, y: 430, w: 160, h: 40, destino: 11 }
  ];

  pantallas[3].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 4 }
  ];

  pantallas[4].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 5 }
  ];

  pantallas[5].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 6 }
  ];

  pantallas[6].botones = [
    { texto: "Decision 1", x: 180, y: 430, w: 140, h: 40, destino: 7 },
    { texto: "Decision 2", x: 460, y: 430, w: 160, h: 40, destino: 22 }
  ];

  pantallas[7].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 8 }
  ];

  pantallas[8].botones = [
    { texto: "Decision 1", x: 100, y: 430, w: 140, h: 40, destino: 9 },
    { texto: "Decision 2", x: 270, y: 430, w: 160, h: 40, destino: 25 },
    { texto: "Decision 3", x: 470, y: 430, w: 160, h: 40, destino: 28 }
  ];

  pantallas[9].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 10 }
  ];

  pantallas[10].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];

  pantallas[11].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 12 }
  ];

  pantallas[12].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 13 }
  ];

  pantallas[13].botones = [
    { texto: "Decision 1", x: 180, y: 430, w: 140, h: 40, destino: 14 },
    { texto: "Decision 2", x: 460, y: 430, w: 160, h: 40, destino: 18 }
  ];

  pantallas[14].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 15 }
  ];

  pantallas[15].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 16 }
  ];

  pantallas[16].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 17 }
  ];

  pantallas[17].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];

  pantallas[18].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 19 }
  ];

  pantallas[19].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 20 }
  ];

  pantallas[20].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 21 }
  ];

  pantallas[21].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];

  pantallas[22].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 23 }
  ];

  pantallas[23].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 24 }
  ];

  pantallas[24].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];

  pantallas[25].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 26 }
  ];

  pantallas[26].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 27 }
  ];

  pantallas[27].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];

  pantallas[28].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 29 }
  ];

  pantallas[29].botones = [
    { texto: "Decision 1", x: 180, y: 430, w: 120, h: 40, destino: 30 },
    { texto: "Decision 2", x: 460, y: 430, w: 140, h: 40, destino: 33 }
  ];

  pantallas[30].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 31 }
  ];

  pantallas[31].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 32 }
  ];

  pantallas[32].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];

  pantallas[33].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 34 }
  ];

  pantallas[34].botones = [
    { texto: "Continuar", x: width / 2, y: 430, w: 150, h: 40, destino: 35 }
  ];

  pantallas[35].botones = [
    { texto: "Reiniciar", x: width / 2, y: 430, w: 150, h: 40, destino: 0 }
  ];
}
