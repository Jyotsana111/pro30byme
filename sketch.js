const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1530,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  ground1 = new Stand(735,620,390);
  ground2 = new Stand(1136,320,320);
 
  
  block1 = new Box(735,590)
  block2 = new Box(685,590)
  block3 = new Box(785,590)
  block4 = new Box(835,590)
  block5 = new Box(885,590)
  block6 = new Box(635,590)
  block7 = new Box(585,590)
  //level two
  //6 floor bottom ground
  bloack1 = new Box(705,540)
  bloack5 = new Box(855,540)
  bloack2 = new Box(755,540)
  bloack3 = new Box(805,540)
  bloack4 = new Box(655,540)
  bloack6 = new Box(605,540)
//5 floor bottom ground
  bloeck1 = new Box(835,490)
  bloeck2 = new Box(785,490)
  bloeck3 = new Box(685,490)
  bloeck4 = new Box(735,490)
  bloeck5 = new Box(635,490)
//4 floor bottom ground
  blck1 = new Box(755,440)
  blck2 = new Box(655,440)
  blck3 = new Box(705,440)
  blck4 = new Box(805,440)
//3 floor bottom ground
  blk1 = new Box(685,390)
  blk2 = new Box(735,390)
  blk3 = new Box(785,390)
//2 floor bottom ground
  bt1 = new Box(755,340)
  bt2 = new Box(705,340)
//1 floor bottom ground
  b1 = new Box(735,290)

//bottom floor top ground
 tbloeck1 = new Box(1236,290)
 tbloeck2 = new Box(1185,290)
 tbloeck3 = new Box(1085,290)
 tbloeck4 = new Box(1135,290)
 tbloeck5 = new Box(1035,290)

//4 floor top ground
 tblck1 = new Box(1060,240)
 tblck2 = new Box(1110,240)
 tblck3 = new Box(1160,240)
 tblck4 = new Box(1210,240)
 
 tblk1 = new Box(1185,190)
 tblk2 = new Box(1085,190)
 tblk3 = new Box(1135,190)

 tbt1 = new Box(1110,140)
 tbt2 = new Box(1160,140)

 tb1 = new Box(1135,90)

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  strokeWeight(2);
  stroke(15);
  slingshot.display();
  

  b1.display();

  bt1.display();
  bt2.display();

  blk1.display();
  blk2.display();
  blk3.display();

  blck1.display();
  blck2.display();
  blck3.display();
  blck4.display();

  bloeck1.display();
  bloeck2.display();
  bloeck3.display();
  bloeck4.display();
  bloeck5.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  bloack1.display();
  bloack2.display();
  bloack3.display();
  bloack4.display();
  bloack5.display();
  bloack6.display();

  tbloeck1.display();
  tbloeck2.display();
  tbloeck3.display();
  tbloeck4.display();
  tbloeck5.display();

  tblck1.display();
  tblck2.display();
  tblck3.display();
  tblck4.display();

  tblk1.display();
  tblk2.display();
  tblk3.display();

  tbt1.display();
  tbt2.display();

  tb1.display();


  ground1.display();
  ground2.display();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}