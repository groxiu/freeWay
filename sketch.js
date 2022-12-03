
function setup() {
  createCanvas(500, 400);
  somAmbiente.loop();
}

function draw() {
  background(imageRoad);
  player();
  movimentarCarros();
  mostrarCarros();
  loopCarros();
  colisao();
  pontos();
  marcarPontos();
}


