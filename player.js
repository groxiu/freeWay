let yPlayer = 366;
let xPlayer = 90;
let hit = false;
let meusPontos = 0;

function player(){
   image(imagePlayer, xPlayer, yPlayer, 30, 30);
  //PLAYER MOVIMENT
  if(keyIsDown(UP_ARROW)){
    yPlayer -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    
    yPlayer += 3;
  }
  }
}
function colisao(){
  for(let i = 0; i < images.length; i++){
  hit = collideRectCircle(xCarros[i], yCarros[i], comprimento, largura, xPlayer, yPlayer, 1);
    if(hit){
      yPlayer = 366
      meusPontos -= 1
      somHit.play();
      if(meusPontos < 0){
        meusPontos = 0;
      }
    
    }
  }
}
function pontos(){
  textSize(30)
  text(meusPontos, 90, 30);
}
function marcarPontos(){
  if(yPlayer < 15){
    yPlayer = 366;
  meusPontos += 1
    somPonto.play();
    
    
  }
  
}
function podeSeMover(){
  return yPlayer < 366;
}