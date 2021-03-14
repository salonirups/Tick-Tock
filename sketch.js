var hr
var min
var sec

var minAngle
var secAngle
var hourAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES); 
}



function draw() {
  background("black");
  translate(200,200) ;
  rotate(-90);

  hr=hour();
  min=minute();
  sec=second();

  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hourAngle=map(hr,0,12,0,360)

  //drawing hour hand
      push();
       rotate(hourAngle);
        stroke("blue");
         strokeWeight(7);
          line(0,0,50,0);
           pop();

           //drawing mins hand
            push();
             rotate(minAngle);
              stroke("green");
               strokeWeight(7);
                line(0,0,75,0);
                 pop();


    //drawing seconds hand 
    push();

    //rotate the hand based on angle calculated
     rotate(secAngle);
       stroke(255,0,0); 
       strokeWeight(7);
        line(0,0,100,0);
         pop();

    stroke(255,0,255);
     point(0,0);
    
     
     //drawing the arcs
      strokeWeight(10);
       noFill();
        //Seconds 
        stroke(255,0,0);
         arc(0,0,300,300,0,secAngle);
          //Minutes
           stroke(0,255,0);
            arc(0,0,280,280,0,minAngle);
             //Hour
              stroke(0,0,255);
               arc(0,0,260,260,0,hourAngle);
  drawSprites();
}