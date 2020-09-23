var wall;
var speed;
var damage;
var weight;
var bullet;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(800, 200, 10, 30);
  bullet.shapeColor = color("white");
  bullet.velocityX = speed;
  bullet.weight = weight;

  wall = createSprite(1600, 200, 50, 200);
  wall.shapeColor = color("grey");
  wall.width = thickness;

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);
  
  fill(80, 80, 80);
}

function draw() {
  background("black");

  damage = (0.5*bullet.weight*bullet.speed*bullet.speed) / (wall.width*wall.width*wall.width);

  if(wall.x * bullet.x < (wall.width + bullet.width)/2){
    bullet.velocityX = 0;
    return true
  }
   
    if(damage > 10) {
      bullet.shapeColor = color(255, 0, 0);
   }
   
    if(damage < 10) {
      bullet.shapeColor = color(0, 255, 0);
   }

  drawSprites();
}