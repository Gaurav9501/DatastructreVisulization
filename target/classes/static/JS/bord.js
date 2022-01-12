let r;
let g;
let b;

function setup() {
  createCanvas(1024, 768);
  background(255);
}

function draw() {
   noStroke();
   fill(0);
   if(mouseIsPressed==true)
  circle(mouseX-40,mouseY-40,20);
}