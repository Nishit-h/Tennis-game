
 var Player1
 var Player2
 var player1_img
 var player2_img


 function preload(){
     player1_img=loadAnimation("Sprite/player 1.gif ");
     player2_img=loadAnimation("Sprite/Player 2.gif ");
 }


 function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
     Player1=createSprite(displayWidth/2-100,displayHeight/2);
      Player2=createSprite(displayWidth/2+100,displayHeight/2);
      Player1.addAnimation("player1",player1_img);
      Player2.addAnimation("player2",player2_img);
 }

      function draw() {
          background(0);
          drawSprites(); 
      
        }