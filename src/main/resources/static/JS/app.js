var x = 0;

var stack = {
  display: function () {
    line(40, 80, 40, 400);
    line(160, 80, 160, 400);
    line(40, 400, 160, 400);
  },
};

var stuff = [];
function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(255);
  stack.display();
  for (var i = 0; i < stuff.length; i++) {
	stuff[i].check();
	stuff[i].insert();
	}
}


function Stuff(x,d) {
  this.y = 380 - x;
  this.d = d 
  this.insert = function () {
	strokeWeight(5);
    line(40, this.y, 160, this.y);
    text(this.d,80,this.y+12);
  };
  this.check = function(){
	if(this.y<=80){
			text("stackoverflow",width/2,height/2);
		}
	};
}

function pushData(){
  stuff.push(new Stuff(x,
	round(random(10,20))));
  x = x + 20;	
}

function popData(){
    stuff.pop();
    x = x - 20;

}


