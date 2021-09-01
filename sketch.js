var input;
var button;
var name;
var gameState=0
var obstacle,food;
function preload(){
  restrauntImg1=loadImage("restraunt.png")
  restrauntImg2=loadImage("restraunt1.png")
  boyImg1=loadImage("boy1.png")
  boyImg2=loadImage("boy2.png")
  boyImg3=loadImage("boy3.png")
  boyImg4=loadImage("boy4.png")
  girlImg1=loadImage("girl1.png")
  girlImg2=loadImage("girl2.png")
  girlImg3=loadImage("girl3.png")

  pizzaImg=loadImage("pizza.png")
  noodlesImg=loadImage("noodles.png")
  burgerImg=loadImage("burger.png")
  frenchfriesImg=loadImage("french fries.png")
  colddrinkImg=loadImage("cold drink.png")
  coffeeImg=loadImage("coffee.png")

}
function setup() {
  createCanvas(800,400);

  background1=createSprite(400,200,800,400)
  background1.addImage(restrauntImg1)
  
  kitchen=createSprite(400,400,800,50)
  kitchen.visible=false
  input=createInput("ENTER YOUR NAME")
  input.position(300,200)
  button=createButton("START")
  button.position(300,300)
  button.mousePressed(()=>{
    var name=input.value()
   greeting=createElement("h3")
   greeting.html("WELCOME " +  name)
   greeting.position(300,150)
   input.hide()
   button.hide()
   gameState=1
  })
obstaclesGroup=createGroup()
foodGroup=createGroup()
}


function draw() {
  background("pink");  
if(gameState===1){
  kitchen.visible=true
  if(obstaclesGroup.isTouching(kitchen)){
    obstaclesGroup.setVelocityYEach(0)
    spawnFood()
  }
  greeting.hide()
  spawnObstacles()
  background1.addImage(restrauntImg2)
  background1.changeImage(restrauntImg2)

}
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 400 === 0){
     obstacle = createSprite(random(100,600),165,10,40);
    obstacle.velocityY= 6;
    obstacle.lifetime=500
    obstacle.debug=true
    
     //generate random obstacles
     var rand = Math.round(random(1,7));
     switch(rand) {
       case 1: obstacle.addImage(boyImg1);
        obstacle.scale=0.3
               break;

    case 2: obstacle.addImage(boyImg2);
     obstacle.scale=0.5
               break;
       case 3: obstacle.addImage(boyImg3);
        obstacle.scale=0.3
               break;
       case 4: obstacle.addImage(boyImg4);
        obstacle.scale=0.3
               break;
       case 5: obstacle.addImage(girlImg1);
        obstacle.scale=0.5
               break;
       case 6: obstacle.addImage(girlImg2);
       obstacle.scale=0.3
               break;
        case 7: obstacle.addImage(girlImg3);
         obstacle.scale=0.5
                break;
       default: break;
     }


    
     //assign scale and lifetime to the obstacle           
     
    // obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }

 }
 function spawnFood(){
  if(frameCount % 500===0){

  
     food = createSprite(obstacle.x+20,obstacle.y-80,10,40);
    
    food.lifetime=500
    
     //generate random obstacles
     var rand = Math.round(random(1,7));
     switch(rand) {
       case 1: food.addImage(pizzaImg);
      food.scale=0.2
               break;

    case 2: food.addImage(burgerImg);
     food.scale=0.2
               break;
       case 3: food.addImage(noodlesImg);
        food.scale=0.2
               break;
       case 4: food.addImage(frenchfriesImg);
        food.scale=0.1
               break;
       case 5:food.addImage(colddrinkImg);
        food.scale=0.3
               break;
       case 6: food.addImage(coffeeImg);
       food.scale=0.2
               break;
        
       default: break;
     }


    
     //assign scale and lifetime to the obstacle           
     
    // obstacle.lifetime = 300;
    
    //add each obstacle to the group

     foodGroup.add(food);
  }
  }
  
 
 
 