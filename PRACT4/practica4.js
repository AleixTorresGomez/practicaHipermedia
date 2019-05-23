
var x, y;
var player;
var coin;
var unigresca;
var birra;
var netflix;
var cor1;
var cor2;
var cor3;
var bg;
var end;
var num;
var score;
var font;
var speed1 = 0;
var vides;
inici = true;
puntuacio = false;
var score;
speed = 4;
vides = 3;



class Score{
  constructor(valor, dificultat){
    this.x = 0;
    this.y = 0;
    this.valor = valor;
    this.dificultat = dificultat;
   
  }
   suma1(){
     this.valor += 1;
     this.dificultat += 0.5;
   }

   posicionar(c){
      if(c == 0){
        this.x = 140;
        this.y = 62;
      }
      else{
        this.x = 330;
        this.y = 167;
      }
     }
  }
  

function setup() {
  createCanvas(500,600);

  score = new Score(0, 4);
  score.posicionar(0);


  coin = createSprite();
  coin.addAnimation("animaCoin", "imatges/excellentA.png");
  coin.position.x = Math.floor(Math.random() * 360)+ 140;
  coin.position.y = -50;
  coin.scale = 0.3;

  unigresca = createSprite();
  unigresca.addAnimation("animaUG", "imatges/unigresca.png");
  unigresca.position.x = Math.floor(Math.random() * 360)+ 140;
  unigresca.position.y = -100;
  unigresca.scale = 0.4;

  birra = createSprite();
  birra.addAnimation("animaBirra", "imatges/birra.png");
  birra.position.x = Math.floor(Math.random() *360);
  birra.position.y = -100;
  birra.scale = 0.2;

  netflix = createSprite();
  netflix.addAnimation("animaNetflix", "imatges/logoNetflix.png");
  netflix.position.x = Math.floor(Math.random() * 360);
  netflix.position.y = -100;
  netflix.scale = 0.3;


  bg = createSprite();
  bg.addAnimation("bgscroll", "imatges/background.png")
  bg.position.x = 250
  bg.position.y = 0;


  cor1 = createSprite();
  cor1.addAnimation("cor1", "imatges/corazon.png");
 

  cor2 = createSprite();
  cor2.addAnimation("cor1", "imatges/corazon.png");
  

  cor3 = createSprite();
  cor3.addAnimation("cor1", "imatges/corazon.png");
 

  player = createSprite();
  player.addAnimation("animacio", "imatges/sprite1.png", "imatges/sprite4.png" );
  player.position.x = 250;
  player.position.y = 500;
  
  
  portada = createSprite();
  portada.addAnimation("portada", "imatges/portada.png");
  portada.position.x = 250;
  portada.position.y = 300;

  end = createSprite();
  end.addAnimation("end", "imatges/end.png");
  end.position.x = -500;
  end.position.y = -600; 

}

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './json.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);  
}
 
loadJSON(function(json) {
  //console.log(json); 
  document.getElementById("titol").innerHTML=json.titol;
  document.getElementById("left").innerHTML=json.controlsleft;
  document.getElementById("right").innerHTML=json.controlsright;
  document.getElementById("stop").innerHTML=json.controlstop;
  document.getElementById("rules").innerHTML=json.rules;
  document.getElementById("text").innerHTML=json.text;
});

//funció de replay
function keyR(){
  if(keyCode == 82){
    score.valor = 0;
    score.posicionar(0);
    player.position.x = 250;
    end.position.x = -500;
    vides = 3;
    num = 3;
    coin.position.y = -100;
    birra.position.y = -100;
    unigresca.position.y = -100;
    netflix.position.y = -100;
    score.dificultat = 4;
    puntuacio = true;
  }
}

//Funció de tornar al menu principal
function keySpace(){
  if(keyCode == 32){
    score.valor = 0;
    score.posicionar(0);
    player.position.x = 250;
    end.position.x = -500;
    portada.position.x = 250;
    portada.position.y = 300;
    vides = 3;
    coin.position.y = -100;
    birra.position.y = -100;
    unigresca.position.y = -100;
    netflix.position.y = -100;
    score.dificultat = 4;
    inici = true;
  }
}

function draw(){

  background (156,154,168);

  player.scale = 2;
  if (keyCode === LEFT_ARROW && player.position.x > 75) {
    player.position.x -= score.dificultat;

  } else if (keyCode === RIGHT_ARROW && player.position.x < 425) {
    player.position.x += score.dificultat;
  }

  //Coin
  if(num == 1 && coin.position.y < 600 ){
    coin.position.y += score.dificultat;
   
  }
  else if(num == 1 && coin.position.y >599){ 
    coin.position.y = -60;
    coin.position.x = Math.floor(Math.random() * 360) + 140;
    num =  Math.floor(Math.random() * 4)+1;
  }  

//Unigresca
  if(num == 2 && unigresca.position.y <= 600 ){
    unigresca.position.y += score.dificultat;
  }
  else if(num == 2 && unigresca.position.y > 599)
  {
    unigresca.position.y = -56;
    unigresca.position.x = Math.floor(Math.random() * 360) + 140;
    num =  Math.floor(Math.random() * 4)+1;
  }  

  //Birra
  if(num == 3 && birra.position.y < 600){
    birra.position.y += score.dificultat;
    
  }
  else if(num == 3 && birra.position.y > 599){
    birra.position.y = -120;
    birra.position.x = Math.floor(Math.random() * 360) + 140;
    num =  Math.floor(Math.random() * 4)+1;
  }  

  //Netflix
  if(num == 4 && netflix.position.y < 600 ){
    netflix.position.y += score.dificultat;
  }
  
  else if(num == 4 && netflix.position.y > 599){
    netflix.position.y = -80;
    netflix.position.x = Math.floor(Math.random() * 360) + 140;
    num =  Math.floor(Math.random() * 4)+1;

  }

//Col·lisió amb excellent i suma d'score i velocitat
  if(coin.position.y + 40 >= player.position.y - 40){
    
    if(coin.position.x + 50 >= player.position.x-30 && coin.position.x - 50 <= player.position.x + 30 ){
      score.suma1();
      coin.position.y=-50;
      coin.position.x = Math.floor(Math.random() * 360) + 140;
      num =  Math.floor(Math.random() * 4)+1;
    }
  }

  //Col·lisió amb birra
  if(birra.position.y + 40 >= player.position.y - 40){
    
    if(birra.position.x + 70 >= player.position.x-30 && birra.position.x - 70 <= player.position.x + 30 ){
      birra.position.y=-100;
      birra.position.x = Math.floor(Math.random() * 360) + 140;
      num =  Math.floor(Math.random() * 4)+1;
      vides -= 1;
      
    }
  }

  //Col·lisió amb unigresca
  if(unigresca.position.y + 40 >= player.position.y - 40){
    
    if(unigresca.position.x + 70 >= player.position.x-30 && unigresca.position.x - 70 <= player.position.x + 30 ){
      unigresca.position.y=-100;
      unigresca.position.x = Math.floor(Math.random() * 360) + 140;
      num =  Math.floor(Math.random() * 4)+1;
      vides -= 1;
      
    }
  }


  //Col·lisó amb netflix
  if(netflix.position.y + 40 >= player.position.y - 40){
    
    if(netflix.position.x + 70 >= player.position.x-30 && netflix.position.x - 70 <= player.position.x + 30 ){
      netflix.position.y=-100;
      netflix.position.x = Math.floor(Math.random() * 360) + 140;
      num =  Math.floor(Math.random() * 4)+1;
      vides -= 1;
      
    }
  }

  //Scrolling background
  if(bg.position.y <= 600){
    bg.position.y += score.dificultat;
  }
  else{
    bg.position.y = -26;
  }


  //Perdre vides
 if(vides == 3){
  
  cor1.position.x = 20;
  cor1.position.y = 580;
  cor1.scale = 0.2;

  cor2.position.x = 100;
  cor2.position.y = 580;
  cor2.scale = 0.2;

  cor3.position.x = 60;
  cor3.position.y = 580;
  cor3.scale = 0.2;
 }
if(vides <= 2){
  cor2.position.x = 60;
  cor2.position.y = -200;
}
if(vides <= 1){
  cor3.position.x = 60;
  cor3.position.y = -200;
 }

  drawSprites();
  
//Inici
  if(keyCode === ENTER && inici == true){
    portada.position.x = 900;
    num =  3;
    inici = false;
    puntuacio = true;
  }

  if(puntuacio == true){
    fill(255);
    textSize(40);
    text("score:",20, 60);
    text(score.valor, score.x, score.y);
  }

  //Final
  if(vides == 0){
    end.position.x = 250;
    end.position.y = 300;
    puntuacio = false;
    textSize(70);
    fill(184,183,153);
    score.posicionar(1);
    text(score.valor, score.x, score.y);
    num = 0;
    keyR();
    keySpace();  
   }
} 
  
  


