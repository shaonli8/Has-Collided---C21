function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width/2;
    wallLeftEdge = lwall.x - lwall.width/2;
    
    if(bulletRightEdge >= wallLeftEdge){
      lbullet.velocityX = 0;
        return true;
    }
    return false;
}