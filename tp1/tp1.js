//Mia Manghi
//David Bedoian
//https://youtu.be/AN6QR6gTHdg

let miImagen;

let columnas = 16;
let filas = 16;
let tamañoCelda = 25;            
let inicioColumna = 3;
let inicioFila = 4;
let columnasZonaCentral = 10;
let filasZonaCentral = 8;

let usarColoresAleatorios = false;

function preload() {
  miImagen = loadImage("data/op_art.jpg");
}

function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(255);

  image(miImagen, 0, 0, 400, 400);

  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      let x = 400 + columna * tamañoCelda;
      let y = fila * tamañoCelda;

      let c = calcularColor(fila, columna);
      dibujarCelda(x, y, tamañoCelda, c);
    }
  }

  for (let fila = 0; fila < filasZonaCentral; fila++) {
    for (let columna = 0; columna < columnasZonaCentral; columna++) {
      let x = 400 + (inicioColumna + columna) * tamañoCelda;
      let y = (inicioFila + fila) * tamañoCelda;

      fill(0);
      rect(x, y, tamañoCelda, tamañoCelda);

      fill(255);
      rect(x + tamañoCelda / 3, y, tamañoCelda / 3, tamañoCelda);
    }
  }
}

function dibujarCelda(x, y, tamaño, c) {
  fill(c);
  rect(x, y, tamaño, tamaño);
}

function calcularColor(fila, columna) {
  if (usarColoresAleatorios) {
    return color(random(255), random(255), random(255));
  } else {
    if (fila % 2 === 0) {
      if (columna % 2 === 0) {
        return color(0);
      } else {
        return color(255);
      }
    } else {
      if (columna % 2 === 0) {
        return color(255);
      } else {
        return color(0);
      }
    }
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    usarColoresAleatorios = true;
    redraw();  
  } else if (key === 'r' || key === 'R') {
    usarColoresAleatorios = false;
    redraw();
  }
}    
