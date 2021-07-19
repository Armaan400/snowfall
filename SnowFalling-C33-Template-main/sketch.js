const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,background

var snowfall=[]




function preload() {
  backgroundImg=loadImage("snow2.jpg")

}

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,600);



}

function draw() {
  background(backgroundImg)

  Engine.update(engine);


  

  if (frameCount %60 === 0) {
    snowfall.push(new Snow(random(width/8-30, width+30),70,70));
  }
  
  for (var h = 0; h<snowfall.length; h++) {
    snowfall[h].display();
  
  
  

 

  
  }
}