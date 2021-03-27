const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,ground2,ground3,ground4, box,m;

function setup(){
    var canvas = createCanvas(1340,600);
    engine = Engine.create();
    world = engine.world;
    x=5
    var order1={
        isStatic: true
    }

    ground1 = Bodies.rectangle(160,590,100,20,order1);
    World.add(world,ground1);

    ground2 = Bodies.rectangle(500,590,100,20,order1);
    World.add(world,ground2);

    ground3 = Bodies.rectangle(840,590,100,20,order1);
    World.add(world,ground3);
    
    ground4 = Bodies.rectangle(1180,590,100,20,order1);
    World.add(world,ground4);

    
    box = Bodies.rectangle(500,30,100,100);
    World.add(world,box);



    
}

function draw(){
    
    background(0);
    Engine.update(engine);
  
    text(mouseX+"   "+mouseY,mouseX,mouseY)
    rectMode(CENTER);
    
    fill ("indigo")
    rect(ground1.position.x,ground1.position.y,300,20);
    
    fill ("purple")
    rect(ground2.position.x,ground2.position.y,300,20);
   
    fill ("Magenta")
    rect(ground3.position.x,ground3.position.y,300,20);
  
    fill ("#f96dea")
    rect(ground4.position.x,ground4.position.y,300,20);
  
    fill ("blue")
   rect(box.position.x, box.position.y, 100, 100);

   
   
    if(box.position.y>500&&box.position.x<320){
        fill ("indigo")
        rect(box.position.x, box.position.y, 100, 100);
   console.log("abc")
   
}


if(box.position.y>500&&box.position.x>320&&box.position.x<601){
    fill ("purple")
 rect(box.position.x, box.position.y, 100, 100);
console.log("abc")

}


if(box.position.y>500&&box.position.x>660&&box.position.x<901){
    fill ("Magenta")
 rect(box.position.x, box.position.y, 100, 100);
console.log("abc")

}


if(box.position.y>500&&box.position.x>1000&&box.position.x<1340){
    fill ("#f96dea")
 rect(box.position.x, box.position.y, 100, 100);
console.log("abc")

}



}