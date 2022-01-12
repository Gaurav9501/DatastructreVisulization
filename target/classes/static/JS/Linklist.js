
var links = [];
function setup() {
	createCanvas(1024, 768);
}

function draw() {
	background(255);
	for (var i = 0; i < links.length; i++) {
		links[i].block();
		links[i].arrow();
		links[i].point();
		links[i].part();
		links[i].data();
		links[i].add();
		links[i].end();
		links[i].details();

	}
}

var x = 50;
/*
function mousePressed() {
	links.push(new Linked(50 + x, int(random(10, 100)), int(random(1000, 8000))));
	x = x + 125;
}
*/

function Linked(x, d, rad) {
	this.x = x;
	this.d = d;
	this.rad = rad;

	this.block = function() {
		rect(this.x, 90, 80, 40);
	};
	this.arrow = function() {
		/*straight arrow*/
		//	line(this.x + 80, 90 + 25, this.x + 80 + 40, 90 + 25);
		curve(this.x + 20, 180, this.x + 20, 85, this.x + 125, 85, this.x + 130, 180);

	};
	this.point = function() {
		/*straight arrow head*/
		//		line(this.x + 80 + 40, 90 + 20, this.x + 80 + 45, 90 + 25);
		//		line(this.x + 80 + 45, 90 + 25, this.x + 80 + 40, 90 + 30);
		line(this.x + 125, 85, this.x + 125, 75);
		line(this.x + 125, 85, this.x + 115, 90);

	};
	this.part = function() {
		line((this.x + 80 + this.x) / 2, 90, (this.x + 80 + this.x) / 2, 130);
	};
	this.data = function() {
		text(this.d, this.x + 50, 110);
	};
	this.add = function() {
		text(this.rad, this.x + 10, 110);
	};
	this.end = function() {
		text("NULL", this.x + 125, 110);
	}
	this.details = function() {
		text("add", this.x + 5, 150);
		text("data", this.x + 50, 150);
	}
	this.updatePosition = function() {
		this.x = this.x + 125;
	}
	this.updatePosition2 = function() {
		this.x = this.x - 125;
	}

}



function addFirst() {
	for (var i = 0; i < links.length; i++) {
		links[i].updatePosition();
	}
	console.log("Before", links);
	links.unshift(new Linked(100, int(random(10, 100)), int(random(1000, 8000))));
	x = x + 125;
	console.log("After", links);

}
function addLast() {
	links.push(new Linked(50 + x, int(random(10, 100)), int(random(1000, 8000))));
	x = x + 125;
}

function addPosition() { }
function printArr() {
	for (var i = 0; i  < links.length; i++) {
		console.log(links[i]);
	}
}

function removeFirst() {
	for (var i = 0; i < links.length; i++) {
		links[i].updatePosition2();
	}
	links.shift()
	x = x - 125;
}

function removeLast() {
	links.pop();
	x = x - 125;

	  }
	function removePosition() { }










