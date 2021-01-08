class Box{
constructor(x,y, width , height){
var options ={
isStatic:false,  
restitution:0.3,
friction:0.5,
density:1.2,
}
 this.Body = Bodies.rectangle(x,y,width,height);
 this.width = width;
 this.height = height;

  World.add(world, this.Body);
 }

 display(){
 var pos = this.Body.position;
 var angle = this.Body.angle;
push();  
translate(pos.x , pos.y);
rotate(angle);
rectMode(CENTER);
fill(255);
rect (0 , 0 , this.width , this.height);
pop();
 }



}