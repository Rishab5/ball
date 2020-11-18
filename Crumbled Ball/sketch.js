var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	
	engine = Engine.create();
	world = engine.world;
ball1=new Ball(200,450,40)
box1=new Box(1200,650)
ground = new Ground(width/2,670,width,20)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball1.display()
 box1.display()
 ground.display()
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
  }


}



