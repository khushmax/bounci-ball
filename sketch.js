const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object, ball;
 

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  var object_options = {
    isStatic :  true
  } 
  
  object = Bodies.rectangle(400,390,800,20,object_options);
  object.width = 800;
  object.height = 20;
  
  World.add(world,object);

  var ball_options = {
    restitution : 1
  } 
  
  ball = Bodies.circle(200,50,30,ball_options);
  ball.r1 = 30;
  ball.r2 = 30;
  
  World.add(world,ball);
  console.log(object);
  console.log(object.position.x);
}

function draw() {
  background("black");
 Engine.update(engine);
  
  fill("brown");
  rectMode(CENTER); 
  rect(object.position.x, object.position.y,object.width, object.height);
  
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, ball.r1, ball.r2);
}