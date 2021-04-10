
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	startX = width/2;
	startY = height/4 + 500
	diameter = 20
	
	roof= new Roof(width/2,height/4,width/7,20);

	bob1= new Bob(startX - diameter*2,startY,diameter);
	rope1= new Rope(bob1.body,roof.body,-diameter*2,0);

	bob2= new Bob(startX - diameter,startY,diameter);
	rope2= new Rope(bob2.body,roof.body,-diameter,0);

	bob3= new Bob(startX ,startY,diameter);
	rope3= new Rope(bob3.body,roof.body,0,0);

	bob4= new Bob(startX + diameter,startY,diameter);
	rope4= new Rope(bob4.body,roof.body,diameter,0);

	bob5= new Bob(startX + diameter*2,startY,diameter);
	rope5= new Rope(bob5.body,roof.body,diameter*2,0);


	Engine.run(engine);
}


function draw() {
  
  background(0);


  roof.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();
}

function keyPresssed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}



