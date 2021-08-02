
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var ground2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
  ground2 = Bodies.rectangle(300,250,100,20,ground_options);
  World.add(world,ground2);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rock = Bodies.circle(300,10,20,ball_options);
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  fill ("#246397");
  ellipse(rock.position.x,rock.position.y,20);
  fill ("#354943");
  ellipse(ball.position.x,ball.position.y,20);
  fill("#173f32")
  rect(ground.position.x,ground.position.y,400,20);
  fill("#123456");
  rect(ground2.position.x,ground2.position.y,100,20);
}

