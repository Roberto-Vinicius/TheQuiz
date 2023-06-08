let tela = 1;

//Botões da tela inicial
let largura = 180;
let altura = 45;
let xmenu = 200;
let ymenu = 230;
let ymenu2 = 285;
let ymenu3 = 340;

//botões do modo de jogo
let larMod = 130;
let altMod = 130;
let ymenuMod = 100;
let ymenuMod2 = 180;
let xmenuMod = 63;
let xmenu2 = 233;
let xmenu3 = 403;

//Botão voltar
let larguraBotao = 30;
let alturaBotao = 30;
let xvoltar = 5;
let yvoltar = 5;

//cores
const cor1 = "#01FFF4"; //ciano
const cor2 = "#4b4b4b"; //cinza
const cor3 = "#F0DB4F"; //javascrip
const cor4 = "#E44D26"; //html
const cor5 = "#1572B6"; //css

//imagens
let fundo;
let sobreMim;
let instrucoes;
let fazendo;

let toon;
let voltar;
let js;
let html;
let css;

let audio

function preload() {
  //background
  fundo = loadImage("imagens/fundo.jpg");
  sobreMim = loadImage("imagens/sobreMIm.jpg");
  instrucoes = loadImage("imagens/instrucoes.jpg");
  fazendo = loadImage("imagens/fazendo.png");

  //funções
  toon = loadImage("imagens/toon.png");
  voltar = loadImage("imagens/voltar.png");
  js = loadImage("imagens/js.png");
  html = loadImage("imagens/html.png");
  css = loadImage("imagens/css.png");

  //musica
  audio = loadSound("audio/fur.mpeg")
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  textStyle(NORMAL);
  //TELA
  if (tela == 1) {
    image(fundo, 0, 0, 600, 400)
    
    //Menu com as opções
    textAlign(CENTER);
    textFont("comic");
    textSize(23);
    stroke(1);
    strokeWeight(4)
    
    //Start
    fill(cor1)
    if ( 
      mouseX >= xmenu && 
      mouseX <= xmenu + largura &&
      mouseY >= ymenu && 
      mouseY <= ymenu + altura
    ) {
      fill(0);
      if (mouseIsPressed) {
        tela = 2;
        audio.loop()
      }
    } 
    rect(xmenu, ymenu, largura, altura, 20);
    fill(255);
    text("START", 290, 260);

    //sobre mim
    fill(cor1)
    if ( 
      mouseX >= xmenu && 
      mouseX <= xmenu + largura &&
      mouseY >= ymenu2 && 
      mouseY <= ymenu2 + altura
    ) { 
      fill(0);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
   
     rect(xmenu, ymenu2, largura, altura, 20);
     fill(255);
     text("DEVELOPER", 290, 315);

    //Informações
    fill(cor1)
    if ( 
      mouseX >= xmenu && 
      mouseX <= xmenu + largura &&
      mouseY >= ymenu3 && 
      mouseY <= ymenu3 + altura
    ) { 
      fill(0);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
  
    rect(xmenu, ymenu3, largura, altura, 20);
    fill(255);
    text("INFORMATION", 290, 370);

  }

  //JOGO EM AÇÃO
  else if (tela == 2) {
    background(cor2);

    //voltar para a tela inicial
    fill(cor1)
    if ( 
      mouseX >= xvoltar && 
      mouseX <= xvoltar + larguraBotao &&
      mouseY >= yvoltar && 
      mouseY <= yvoltar + alturaBotao
    ) {
      fill(0);
      if (mouseIsPressed) {
        tela = 1;
        audio.pause()
      }
    } 
    image(voltar, xvoltar, yvoltar, larguraBotao, alturaBotao);

    //modos de jogo
    textFont("comic");
    fill(0);
    textSize(30);
    strokeWeight(4);
    text("Escolha seu Modo de Jogo", 300, 60);
    stroke(255)
    fill(cor2);
    //javascript
    if ( 
      mouseX >= xmenuMod && 
      mouseX <= xmenuMod + larMod &&
      mouseY >= ymenuMod2 && 
      mouseY <= ymenuMod2 + altMod
    ) {
      stroke(cor3);
      strokeWeight(2);
      rect(xmenuMod, ymenuMod2, larMod, altMod, 10);
      if (mouseIsPressed) {
        tela = 5;
      }
    }
    image(js, 54, 170, 150, 150)

    //HTML
    if ( 
      mouseX >= xmenu2 && 
      mouseX <= xmenu2 + larMod &&
      mouseY >= ymenuMod && 
      mouseY <= ymenuMod + altMod
    ) {
      stroke(cor4);
      strokeWeight(2);
      rect(xmenu2, ymenuMod, larMod, altMod, 10);
      if (mouseIsPressed) {
        tela = 6;
      }
    }
    image(html, 228, 95, 140, 140)

    //CSS
    if ( 
      mouseX >= xmenu3 && 
      mouseX <= xmenu3 + larMod &&
      mouseY >= ymenuMod2 && 
      mouseY <= ymenuMod2 + altMod
    ) {
      stroke(cor5);
      strokeWeight(2);
      rect(xmenu3, ymenuMod2, larMod, altMod, 10);
      if (mouseIsPressed) {
        tela = 7;
      }
    }
    image(css, 393, 170, 150, 150)
  }

  //INFORMAÇÕES SOBRE MIM
  else if (tela == 3) {
    image(sobreMim, 0, 0, 600, 400);
    image(toon, 420,30);

    //voltar para a tela inicial
    if ( 
      mouseX >= xvoltar && 
      mouseX <= xvoltar + larguraBotao &&
      mouseY >= yvoltar && 
      mouseY <= yvoltar + alturaBotao
    ) {
      fill(0);
      if (mouseIsPressed) {
        tela = 1;
      }
    } 

    image(voltar, xvoltar, yvoltar, larguraBotao, alturaBotao);

  }
  //INFORMAÇÕES SOBRE O JOGO
  else if (tela == 4) {
    background(cor2);
    image(instrucoes, 0, 0, 600, 400);

    //voltar para a tela inicial
    fill(cor1)
    if ( 
      mouseX >= xvoltar && 
      mouseX <= xvoltar + larguraBotao &&
      mouseY >= yvoltar && 
      mouseY <= yvoltar + alturaBotao
    ) {
      fill(0);
      if (mouseIsPressed) {
        tela = 1;
      }
    } 
    image(voltar, xvoltar, yvoltar, larguraBotao, alturaBotao);
  }

  //TELA JAVASCRIPT
  else if (tela == 5) {
    background(cor2);
    image(fazendo, 0, 0, 600, 400);
  }

  //TELA HTML
  else if (tela == 6) {
    background(cor2);
    image(fazendo, 0, 0, 600, 400);
  }

  //TELA CSS
  else if (tela == 7) {
    background(cor2);
    image(fazendo, 0, 0, 600, 400);
  }
}