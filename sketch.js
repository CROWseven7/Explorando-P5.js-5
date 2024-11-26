//variaveis da bolinha
let xBolinha = 350;
let yBolinha = 250;
let diametro = 30;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha =10;
let velocidadeYBolinha = 10;

//variaveis da raquete
let xRaquete = 0;
let yRaquete = 150;
let raqueteComprimento = 15;
let raqueteAltura = 100;

//variaveis da raquete oponente
let xRaqueteOponente = 681;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raq;
let ponto;
let trilha;

//imagem
let bg;

function preload(){
  raq = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
  bg = loadImage("corvo.jpg");
}

function setup() {
  createCanvas(700, 450);
  trilha.loop();
}

function draw() {
  image(bg, 0, 0, 700, 750);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa()
  
}

function bolinhaNaoFicaPresa(){

    if (xBolinha - raio < 10){
    XBolinha = 23

    }

}

function mostraBolinha(){
  
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1;
  }
  
}

function mostraRaquete(x, y){
  
   rect(x, y, raqueteComprimento,raqueteAltura);
  
}

function movimentaMinhaRaquete(){
  
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
    
  }
}

  function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura &&  yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
      raq.play();
      
    }
  }

function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
    velocidadeXBolinha *= -1;
      raq.play();
      
    }
}

function movimentaRaqueteOponente(){
  
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if  (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
       }
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(35);
  stroke(255);
  fill(255, 140, 0);
  rect(280, 4, 40, 30);
  fill(255);
  text(meusPontos, 300, 30);
  fill(255, 140, 0);
  stroke(255);
  rect(380, 4, 40, 30);
  fill(255);
  text(pontosDoOponente, 400, 30);
}

function marcaPonto(){
  if (xBolinha > 680){
    meusPontos += 1;
    ponto.play();
  }
    if (xBolinha < 20){
    pontosDoOponente += 1;
       ponto.play();
  }
}