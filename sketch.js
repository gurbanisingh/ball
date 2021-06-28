const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var bin1
var bin2

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  img = createImg(
    "right.png"
  );
  img.position(100,30);
  img.size(50,50)
  img.mouseClicked(hForce)

  img1 = createImg(
    "up.png"
  );
  img1.position(20,30);
  img1.size(50,50)
  img1.mouseClicked(vForce)

  ground =new Ground(200,390,1160,20);
  right = new Ground(790,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,1160,20);
  bin1 = new Ground(500,390,18,300);
  bin2 = new Ground(666,390,18,300);

  var ball_options={restitution:0.95}
  ball= Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  ellipse(ball.position.x,ball.position.y,20)
  top_wall.show();
  left.show();
  right.show();
  bin1.show();
  bin2.show();
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.05})
}