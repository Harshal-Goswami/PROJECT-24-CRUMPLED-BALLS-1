
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var engine , world ;
var paperObject;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject.Bodies.circle(200,200,10,10)
    World.add(world,paperObject);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("BLACK");
  
  drawSprites();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW){
	 Matter.body.applyForce(paperObject.body , paperObject.position , {x:85 ,y:-85});
 }
}