function setup() {
	createCanvas(620, 600);
	textSize(32);
	rectMode(CENTER);
	strokeWeight(10);
	textFont('arial black');
}

function draw() {
	background(255);
	strokeWeight(10);
	text("The Computer for the 21st Century", width /2 -300, height * 1/3 - 100);
	rect(width/2, height/2, 400, 300, 20);
	rect(width/2, height/2-20, 300, 150, 20);
	rect(width/2, height* 2/3, 400, 10, 20);
	rect(width/2, height* 4/5, 500, 10, 20);
	strokeWeight(5);
	ellipse(width/2, height* 3/4 - 20, 20, 20);
	text("Hello World!", width /2 - 100, height/2-10);
}