var bullet, wall;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(800,400);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321)); 
  weight = Math.round(random(30,52));

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";

  wall = createSprite(730,200,thickness,height/2);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    //bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
    
    if(damage >= 10){
      bullet.shapeColor = "red";
    }

    if(damage < 10){
      bullet.shapeColor = "green";
    }
  }

  else{
    bullet.velocityX = 10;
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width/2;
    wallLeftEdge = lwall.x - lwall.width/2;
    
    if(bulletRightEdge >= wallLeftEdge){
      lbullet.velocityX = 0;
        return true;
    }
    return false;
}