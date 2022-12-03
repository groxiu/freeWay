let imageRoad;
let imagePlayer;
let imageCar1;
let imageCar2;
let imageCar3;


let somAmbiente;
let somHit;
let somPonto;


function preload(){
  imageRoad = loadImage("imagens/estrada.png");
  imagePlayer = loadImage("imagens/ator-1.png");
  imageCar1 = loadImage("imagens/carro-1.png");
  imageCar2 = loadImage("imagens/carro-2.png");
  imageCar3 = loadImage("imagens/carro-3.png");
  images = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2,imageCar3];
  
  somAmbiente = loadSound("sons/trilha.mp3");
  somHit = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}