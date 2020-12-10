//vídeo explicando código:https://youtu.be/FvNzqnWU_JU
//vídeo gameplay:https://youtu.be/jr14xar5utQ
//colabeduc
var cont = 0;
let music1=1;
var tela =1;
y= 150;
menux= 10;
menuy=250;
var opcao=1;
var fundo;
var fundo1;
var mono = 1
controle = false
var nível=1
var barreiraPontos=1000;
var num = 0;
var nomes =["casa" ,"bola","lã","sol","amigo","banana"];
var pal=["casa" ,"bola","lã","sol","amigo","banana"];
var carac = ["d", "d", "m", "m", "t", "t"];
var sorteados=0;
var a=1, b=2, c=3;
var menuop=0;
var snd1;

function preload(){
  soundFormats('mp3');
  snd = createAudio("audio.mpeg")
  
  fundo= loadImage('tela menu.jpg');
  fundo1= loadImage('fundo11.jpg');
  bruno= loadImage('bruno.jpg');
  aquiles= loadImage('aquiles.jpg');
  feliz= loadImage('feliz.jpg');
  triste= loadImage('triste.jpg');
}

function setup() {
 
  createCanvas(400, 400);
  frameRate(30);
  

}
function draw() {
  //tela do menu
  	if(tela == 1){
  		menu(); 
  	}
  	if(tela == 2){
  		jogar();
  	}
  	if(tela == 3){
  		tutorial();
  	}
  	if(tela == 4){
  		creditos();
  	}
    if(tela == 5){
        acertou();
    }
    if(tela == 6){
        errou();
    }
 }
  
 function menu(){
  background(fundo);
  textSize(25);
  textAlign(CENTER)
    
  fill(0, 102, 153);
  rect(140, y, 120, 30);
  
  fill(0);
  text('QUIZ DAS SÍLABAS', 200, 100);
  text('Jogar', 200, 173);
  text('Instruções', 200, 223);
  text('Créditos', 200, 273);
   
   
  if(music1===1){
    snd.loop();
    snd.volume(0.5)
    music1 = 0;
  }

    if(keyIsPressed == false){
    controle = false
  }
  if(controle == false){
    if(keyIsDown(UP_ARROW) && (y <= 250 && y > 150)){
      y -= 50
      controle= true;
    }
    if(keyIsDown(ENTER) && y == 150){
      tela = 2
      controle = true
     } else if(keyIsDown(ENTER) && y == 200){
      tela = 3
      controle = true
     } else if(keyIsDown(ENTER) && y == 250){
      tela = 4
      controle = true
     }
     if(keyIsDown(DOWN_ARROW) && (y< 250 && y >= 150)){
      y += 50
      controle = true
     }
   }
 }


function jogar(){ 
  background(fundo1);
  time();
  textSize(24);
  fill(0);
  text("nivel: "+nível, 60, 30);
  textSize(30)
  fill(0);
  text(nomes[num], 200,190);
  
  
  if(mouseX >=10 && mouseX <= 150 && mouseY >= 245 && mouseY <= 275 ){
    fill(0, 102, 153);
    rect(10, 245, 140, 30);
  }
  
  if(mouseX >=160 && mouseX <= 270 && mouseY >= 245 && mouseY <= 275 ){
    fill(0, 102, 153);
    rect(160, 245, 140, 30);
  }
  if(mouseX >= 280 && mouseX <= 400 && mouseY >= 245 && mouseY <= 275 ){
    fill(0, 102, 153);
    rect(280, 245, 140, 30);
  }
  
  if(pal[0] == nomes[0]){
     resultado = "Dissilabo"
     }
    if(pal[1] == nomes[1]){
     resultado = "Dissilabo"
     }
    if(pal[2] == nomes[2]){
     resultado = "monossilabo"
     }   
    if(pal[3] == nomes[3]){
     resultado = "monossilabo"
     } 
    if(pal[4] == nomes[4]){
     resultado = "trissilaba"
     }
    if(pal[5] == nomes[5]){
     resultado = "trissilaba"
     }
  
    textSize(30);
    fill(0, 102, 153);
    fill(0);
    textSize(20)
    text('a)monossílaba', 80, 270);
    text('b)dissílaba', 220, 270);
    text('c)trissílaba', 340, 270);
  
    fill(0);
    text('Aperte Esc para voltar', 200, 380);
    fill(105, 200, 100);
  
    if(keyIsDown(ESCAPE)){
      tela=1;
      nível = 0;
    }
}
function acertou(){
    background(fundo1);
    textSize(25);
    textAlign(CENTER)
  
    fill(0);
    text('PARABÉNS!!!',200, 100);
    image(feliz, 150, 120, 90,90);
    text('VOCÊ ACERTOU!', 200, 250);
    text('SIGA EM FRENTE!', 200, 280);
  
    cont = cont + 1;
    timeS = parseInt(cont / 30);
  
     if(timeS == 5){
        tela = 1;
        timeS = 0;
        cont = 0;
      }
}
  
  if(keyIsDown(ESCAPE)){
      tela=2;
}
function errou(){
    background(fundo1);
    textSize(25);
    textAlign(CENTER)
  
    fill(0);
    text('QUE PENA!!!',200, 100);
    image(triste, 150, 120, 90,90);
    text('VOCÊ ERROU!', 200, 250);
    text('TENTE DE NOVO!', 200, 280);
  
    cont = cont + 1;
    timeS = parseInt(cont / 30);
  
     if(timeS == 5){
        tela = 1;
        timeS = 0;
        cont = 0;
     }
  if(keyIsDown(ESCAPE)){
      tela=2;
}
}

function tutorial(){
    background(fundo1);
    textSize(25);
  
    
    fill(105, 200, 100);
    rect(80, 160, 230, 40)
    fill(0)
     text('INSTRUÇÕES',200, 190);
    fill(0);
    textSize(12);
    text('2020:3º Ano fundamental', 200, 40);
    text('(EF03LP05) Identificar o número de sílabas de palavras,', 200, 60);
    text('classificando-as em monossílabas,', 200, 85);
    text('dissílabas, trissílabas e polissílabas ', 200, 110);
    text('O jogo consiste em um quiz de perguntas e respostas,', 200, 135);
    text('onde o aluno vai Identificar o número de sílabas de palavras,', 200, 155);
    fill(0);
    text('classificando-as em monossílabas, dissílabas,', 200, 215);
    text('trissílabas e polissílabas.', 200, 240);
    text('', 200, 265);
    text('', 200, 290);
    text('', 200, 315);
    textSize(20);
    text('Aperte Esc para sair', 200, 360);
     
    if(keyIsDown(ESCAPE)){
      tela=1;
      nível = 0;
    }
	
}
function creditos(){
    background(fundo1)
  
	fill(0);
    text('CRÉDITOS', 200, 50);
    fill(105, 200, 100);
    rect(135, 90, 230, 90);
    rect(135, 190, 230, 90);
    fill(0);
    text('Bruno Eduardo', 250, 110);
    text('Soares da Silva:', 250, 140);
    text('Programador', 250, 170);
    text('Aquiles Medeiros', 250, 210);
    text('Burlamaqui:', 250, 240);
    text('Orientador', 250, 270);
    fill(0);
    text('Aperte Esc para sair', 200, 350);
    image(bruno,40, 90, 90, 90);
    image(aquiles, 40, 190, 90,90);

    if(keyIsDown(ESCAPE)){
      tela=1;
      nível = 0;
    }

}

function keyPressed(){
  
  if (tela == 2) {
    
    if(key == "ArrowRight"){
      menux += 150;
    }
    if(key == "ArrowLeft"){
      menux -= 110;
    }
    
    if(menux>800/3){
      menux = 800/3;
    }
    if(menux<60){
      menux = 10;
    }
    
    
   if(keyIsPressed){
     if(key == "ENTER" && carac[num] == "m" && menux == 10){
       alert("acertou");
       num++;
     }
   }
    
    if(keyIsPressed){
     if(key == "ENTER" && carac[num] == "d" && menux > 100 && menux < 200){
        alert("acertou");
        num++;
      }
    }
    if(keyIsPressed){
     if(key == "ENTER" && menux > 200){
        if(carac[num] == "t"){
          alert("acertou");
          num++;
        }
      }
    }
  }
}

function mousePressed(){
  if(mouseX >=10 && mouseX <= 150 && mouseY >= 245 && mouseY <= 275 ){
    if(carac[num] == 'm'){
      tela=5;
      num++
    }
    else{
      tela=6;
      num++;
    }    
  }
  if(mouseX >=160 && mouseX <= 270 && mouseY >= 245 && mouseY <= 275 ){
    if(carac[num] == 'd'){
     tela=5;
      num++
    }
    else{
      tela=6;
      num++;
    }
  }
  if(mouseX >= 280 && mouseX <= 400 && mouseY >= 245 && mouseY <= 275 ){
    if(carac[num] == 't'){
      tela=5;
      num++
    }
    else{
       tela=6;
      num++;
    }
  }  
}
  
function time() {
  cont = cont + 1;
  timeS = parseInt(cont / 30);
 
  fill(0);
  textSize(25)
  text("Tempo: " + timeS, 330, 30);
    
    if(timeS == 30){
        tela = 1;
        timeS = 0;
        cont = 0;
      }
}