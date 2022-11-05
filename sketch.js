var ball


var groundObj



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		Density:1.2
		} 

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(900,600,20,120);


		

	

	//Create the Bodies Here.
ball = Bodies.circle(400,640,30,ball_options);

	Engine.run(engine);

	

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30,30);
groundObj.display();
leftSide.display();
rightSide.display();
  drawSprites();


}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		console.log("Check")
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}





