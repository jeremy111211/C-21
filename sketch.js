const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball, pushButton, rightButton, upButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  ball = Bodies.circle(200,200,25);
  World.add(world, ball);

  pushButton = createImg("push.png");
  pushButton.position(50,50);
  pushButton.size(40,40);

  pushButton.mouseClicked(pushForce);

  rightButton = createImg("right.png");
  rightButton.position(200,50);
  rightButton.size(40,40);

  rightButton.mouseClicked(rightForce);

  upButton = createImg("up.png");
  upButton.position(325,50);
  upButton.size(40,40);

  upButton.mouseClicked(upForce);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 25, 25);
}

function rightForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
}

function upForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
}

function pushForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:-0.1});
}