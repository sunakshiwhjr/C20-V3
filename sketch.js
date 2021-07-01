
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let myEngine;
let myWorld;

var ball, ground;
function setup()
{
  createCanvas(400,400);

  //create the engine of your own
  myEngine = Engine.create();

  //create world of the engine created
  myWorld = myEngine.world;


  //create ball for your own world

  var ball_options ={

    restitution: 0.85,
    frictionAir:0.01
   
  }

  ball = Bodies.circle(100, 10, 10, ball_options);
  World.add(myWorld,ball);

  //create the ground

  var ground_options = {

    isStatic: true
  }
  ground = Bodies.rectangle(200, 370, 400, 20, ground_options);
  World.add(myWorld,ground);
  
 

}

function draw() 
{
  background(51);

  Engine.update(myEngine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10);

 
}

