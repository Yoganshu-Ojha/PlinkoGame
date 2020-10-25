const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, sling;
var plinko;
var PlinkoGroup = [];

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    log1 = new Division(0,650,20,300);
    log2 = new Division(100,650,20,300);

    log3 =  new Division(200,650,20,300);

    log4 = new Division(300,650,20,300);
    log5 = new Division(400,650,20,300);

    bird = new Particle(350,100,10);


    plinko = new  Plinko(100,100,20)
}

function draw(){
    background("lavender");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    log1.display();

    log3.display();

    log4.display();
    log5.display();

    log2.display();

    bird.display();
    plinko.display();

    for (var j = 40; j <=width; j = j+50){
        PlinkoGroup.push(new Plinko(j,75));
    }
    for (var j = 15; j <=width - 10; j = j+50){
        PlinkoGroup.push(new Plinko(j,175));
    }

}