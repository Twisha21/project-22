const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;

var roof;  

//Create multiple bobs, mulitple ropes varibale here
var ball, ball2, ball3 , ball4, ball5; 
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution : 1
	
	}


	var roof_options={
		isStatic:true			
	}


	//roof
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	//ball
	ball = Bodies.circle(320, 300, 40, ball_options); 
	World.add (world,ball);
	
	ball2 = Bodies.circle(360, 300, 40, ball_options); 
	World.add (world,ball2);

	ball3 = Bodies.circle(400, 300, 40, ball_options); 
	World.add (world,ball3);
	
	ball4 = Bodies.circle(440, 300, 40, ball_options); 
	World.add (world,ball4);

	ball5 = Bodies.circle(480, 300, 40, ball_options); 
	World.add (world,ball5);


	//ropes
	rope1 = new rope (ball,roof,-80,0);
	rope2 = new rope (ball2,roof,-40,0);
	rope3 = new rope (ball3,roof,0,0);
	rope4 = new rope (ball4,roof,40,0);
	rope5 = new rope (ball5,roof,80,0);


	
	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine); 

  rect(roof.position.x,roof.position.y,230,20);

  

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse ( ball.position.x  , ball.position.y,  37,37 );
  ellipse ( ball2.position.x , ball2.position.y, 37,37 );
  ellipse ( ball3.position.x , ball3.position.y, 37,37 );
  ellipse ( ball4.position.x , ball4.position.y, 37,37 );
  ellipse ( ball5.position.x , ball5.position.y, 37,37 );
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed () {
	if  ( keyCode === RIGHT_ARROW) {
	  Matter.Body.applyForce ( ball , {x : 0, y :0} , {x : -0.05 , y : 0} )
	}
}