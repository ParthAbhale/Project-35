var dog,dogImg,dog2Img,database,foodStock;
var Foods = 20;
function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dog2Img = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value",redStock)
  foodStock.set(20)
  dog = createSprite(width/2,height/2+50,10,10)
  dog.addImage(dogImg)
  dog.scale=0.4
}


function draw() {  
 background("green")

 

 if (keyWentDown(UP_ARROW)){
   writeStocks(Foods)
  dog.addImage(dog2Img)
 } if (keyWentUp(UP_ARROW)){
  //  writeStocks(Foods)
  dog.addImage(dogImg)
 }

 drawSprites();
 textSize(30)
 fill("yellow")
 text("Food Remeaning: "+Foods,width/2-100,height/2-100)
 text("Note: Press UP_ARROW Key To Feed Drogo Milk",width/2-350,30)
}

function redStock(data){
  Foods=data.val();

}

function writeStocks(x){
    if (x<=0){
        x=0
    }else{
      x=x-1
    }
    database.ref('/').update({
      Food:x
    })
  
}


