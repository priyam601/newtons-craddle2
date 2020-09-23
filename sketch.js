
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5


function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Chat(300,200,250,30);


	bob1 = new Bob(400,450,40);
	bob2 = new Bob(440,450,40);
	bob3 = new Bob(480,450,40);
	bob4 = new Bob(520,450,40);
	bob5 = new Bob(560,450,40);

	rope1 = new Rope(bob1.body,roof.body,-100, 10);
	rope2 = new Rope(bob2.body,roof.body,-60, 10);
	rope3 = new Rope(bob3.body,roof.body,-22, 10);
	rope4 = new Rope(bob4.body,roof.body,20, 10);
	rope5 = new Rope(bob5.body,roof.body,60, 10);


}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();
  /*if(keyCode == 32){
	bob1.velocityX = 2;
	console.log("working");

  }*/

  //bob1.velocityY = bob1.velocityX + 0.8;

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();

}

function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(body.bob1,body.bob1.position,{x:65,y:-55});
		


	}

}



