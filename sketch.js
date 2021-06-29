const Engine = Matter.Engine; 
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world;
var backimg;
var hr,mn,sc;

function preload(){
backimg=loadImage("back.png");

}

function setup() {
  createCanvas(600,800);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world = engine.world;

  angleMode(DEGREES);
}

function draw() {
  background(backimg);  
translate (200,280)
rotate (-90)

hr=hour();
mn=minute();
sc=second();

scAngle = map(sc,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr % 12 ,0,12,0,360)

push ();
rotate(scAngle);
stroke (0, 100, 0)
strokeWeight(4);
line (0,0,100,0)
pop ();

push ();
rotate(mnAngle);
stroke (255, 0, 255)
strokeWeight(7);
line (0,0,75,0)
pop ();

push ();
rotate(hrAngle);
stroke (0, 0, 139)
strokeWeight(7);
line (0,0,50,0)
pop ();

stroke(255,0,255)
point (0,0)
strokeWeight(8);
noFill();
stroke (0, 100, 0)
arc (0,0,300,300,0,scAngle)
stroke (255, 0, 255)
arc (0,0,280,280,0,mnAngle)
stroke (0, 0, 139)
arc (0,0,260,260,0,hrAngle)
  drawSprites();




}