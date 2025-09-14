//Link video youtube: https://youtu.be/4dbOFqLeFW8
let img;
let grilla = 152;
let inicioX, inicioY;
let cuadrado = 76;
let rotacionGlobal = 0;
let estadoAnimacion = 0;
let velocidadRotacion = 0.01;
let colorCuadrado;

function preload() { 
 img = loadImage("data/LeParc.png");
  }

function setup() {
 createCanvas(800, 400);
  inicioX = width / 2;
  inicioY = 0;
  imageMode(CORNER);
  rectMode(CENTER);
  noStroke();
  colorMode(HSB, 800, 400, 800, 255);
  colorCuadrado = color(0,0,800);
  }
  
 function draw() {
  background(0);
  image(img, 0, 0);

  rectMode(CORNER);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = inicioX + i * grilla;
      let y = inicioY + j * grilla;
      dibujarMarco(x, y, grilla);
    }
  }
  let dentroDerecha = mouseX > 400 && mouseX < 800 && mouseY >= 0 && mouseY <= 400;

  if (dentroDerecha) {
    estadoAnimacion = 1;
    velocidadRotacion = map(mouseY, 0, 400, 0.03, 0.01);
  } else {
    reiniciarValores();
  }

  push();
  translate(628, 228);

  if (estadoAnimacion == 1) {
    rotacionGlobal += velocidadRotacion;
    rotate(rotacionGlobal);
  }

  for (let i = 0; i < 21; i++) {
    push();

   let angulo = radians(i * 22.5);
    rotate(angulo);

   let d = i * 15;
    translate(-d * 0.718, d * 0.038);

   let alpha, tam;
   
     if (estadoAnimacion == 1) {
      alpha = map(sin(frameCount * 0.05 + i * 0.2), -1, 1, 90, 175);
      tam = cuadrado + sin(frameCount * 0.05 + i * 0.5) * 5;
    } else {
      alpha = 130;
      tam = cuadrado;
    }

    let c = color(hue(colorCuadrado), saturation(colorCuadrado), brightness(colorCuadrado), alpha);
    fill(c);
    stroke(c);
    strokeWeight(1);
    rect(0, 0, tam, tam);
    pop();
  }
  pop();
}

function dibujarMarco( x,  y, tam) {
  strokeWeight(2);
  stroke(255, 120);
  fill(0);
  rect(x, y, tam, tam);
}

function mousePressed() {
  if (mouseX > 400 && mouseX < 800 && mouseY >= 0 && mouseY <= 400) {
    let h = mouseX;
    let s = mouseY;
    let b = mouseX;
    colorCuadrado = color(h, s, b);
  }
}

function reiniciarValores() {
  grilla = 152;
  inicioX = width / 2;
  inicioY = 0;
  cuadrado = 76;
  rotacionGlobal = 0;
  estadoAnimacion = 0;
  velocidadRotacion = 0.01;
  colorCuadrado = color(0, 0, 800);  // Blanco en HSB
}
