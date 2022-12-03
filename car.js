let xCarros = [600, 550, 400, 300, 600, 500];
let yCarros = [40, 97, 150, 210, 260, 310];
let velocidade = [2, 4, 3, 3, 5, 3];
let comprimento = 50;
let largura = 40;

function mostrarCarros(){
  for (let i = 0; i < images.length; i++){
     image(images[i], xCarros[i] , yCarros[i], comprimento ,largura);
  }

}

function movimentarCarros(){
  for (let i = 0; i< xCarros.length; i++){
    xCarros[i] -= velocidade[i];
  }
}
function loopCarros(){
  for (let i = 0; i < xCarros.length; i ++)
  if (xCarros[i] <-40){
    xCarros[i] = 600;
  }

  }
