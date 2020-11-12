var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(400,200,50,50);
  gameObject3.shapeColor = "blue";
  gameObject4 = createSprite(400,600,50,50);
  gameObject4.shapeColor = "red";

  gameObject3.velocityY = 5;
  gameObject4.velocityY = -5;

}

function draw() {
  background(0, 0, 0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(gameObject1, movingRect)){
  gameObject1.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
}else{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
}
if(isTouching(gameObject2, movingRect)){
  gameObject2.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
}else{
  gameObject2.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  bounceOff(gameObject3, gameObject4); 
  drawSprites();
}
