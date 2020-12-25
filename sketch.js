
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(900,900);
	bob2=new bob(700,700);
	bob3=new bob(700,700);
	bob4=new bob(700,700);
	bob5=new bob(700,700);

	roof=new Roof(100,100,20,20);

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject1.body,roofObject.body,-bobDiameter*4,0);
	rope3=new Rope(bobObject1.body,roofObject.body,-bobDiameter*6,0);
	rope4=new Rope(bobObject1.body,roofObject.body,-bobDiameter*8,0);
	rope5=new Rope(bobObject1.body,roofObject.body,-bobDiameter*10,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

    bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  drawSprites();
 
}



