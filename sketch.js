
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14;
var box15,box16,backgroundImg;
var bg = "sprites/bg.png";
var score=0;
function preload()
{
  getBackgroundImg();
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    var options={isStatic:true}
    g1=Bodies.rectangle(350,600,600,20,options)
World.add(world,g1)

ground=new Ground(600,height,1200,20)

 box1=new box(390,590,40,50)
 box2=new box(420,590,40,50)
 box3=new box(460,590,40,50)
 box4=new box(500,590,40,50)
 box5=new box(540,590,40,50)
 box6=new box(580,590,40,50)
 box7=new box(420,550,40,50)
 box8=new box(460,565,40,50)
 box9=new box(500,565,40,50)
 box10=new box(540,565,40,50)
 box11=new box(580,565,40,50)
 box12=new box(620,565,40,50)
 box13=new box(460,540,40,50)
 box14=new box(500,540,40,50)
 box15=new box(540,540,40,50)
 box16=new box(500,515,40,50)

all=new ball(200,525,20)
slingshot =new chain(all.body,{x:200,y:525})
 Engine.run(engine);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35)
  fill("white")
  text("Score :" + score,250, 40)
  rect(g1.position.x,g1.position.y,300,20)
  drawSprites();
 
  Engine.update(engine)
  fill("lightblue"); 
box1.display()
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("pink");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("green");
box13.display();
box14.display();
box15.display()
fill("orange");
box16.display()
fill("gold");
all.display();

ground.display();
slingshot.display();
 
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box2.score();
box3.score();
box14.score();
box15.score();
box16.score();
}
function mouseDragged(){
  Matter.Body.setPosition(all.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.yeet()
} 
function keyPressed(){
  if(keyCode == 32){
    slingshot.attach(all.body);
}  
}  
 function getBackgroundImg(){
  var response =  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
