function setup() {
  createCanvas(650,637);
}




function draw() 
{
  background("black");
  
if(keyDown(RIGHT_ARROW)) {
  background("yellow");
}

if(keyDown(LEFT_ARROW)) {
  background("red");
}

if(keyDown(32)) {
  background("blue");
}

if(keyDown(UP_ARROW)) {
  background("green");
}

if(keyDown(DOWN_ARROW)) {
  background("orange");
}
  drawSprites();
}





