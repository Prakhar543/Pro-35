var canvas;

var database;
var dog,dogImage,dogHappy;
var x=20;
function preload(){
dogImage=loadImage("dogImg.png")
dogHappy=loadImage("dogImg1.png")
}

function setup(){
  canvas = createCanvas(600,600);

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
 
  dog = createSprite(300,450,40,40)
  dog.addImage(dogImage);
  dog.scale=0.3;
}


function draw(){
 background("cyan");

 if(keyWentDown(UP_ARROW)){
   writeStock('foodS');
   dog.addImage(dogHappy);

   if(x<=0){
    x=0;
   }
   else{
    x--;
   }
 }
 drawSprites();
 
textSize(25);
text("Food Remaining:"+x,200,200);

textSize(25);
text("Press Up Arrow key to Feed the Dog",120,50);
}
function readStock(data){
  foodS=data.val();

}

function writeStock(x){
database.ref('/').update({
  food:x
})
}