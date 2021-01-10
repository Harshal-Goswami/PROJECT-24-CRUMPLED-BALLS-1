
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustBinObj , paperObject , groundObject ;
var engine , world ;

function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

dustbinObj=new Dustbin(1200 , 650);
paperObject=new paper(200,450,40);
groundObject=new groundObject(width/2,670,width,20);
//Create a Ground


var render = Render.create();
  element: document.body,
  engine.engine,
  options:    {
	width: 1200,
	height : 700,
    wireframes : false,
}

	Engine.run(engine);
	//Render.run(render);


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