const formResolution = 8;
const stepSize = 2;
const radius = 100;
let centerX, centerY;
let x = new Array(formResolution);
let y = new Array(formResolution);
let col;
let questions = [];


function setup(){
	createCanvas(600, 600);
	pixelDensity(2);
	centerX = width/2; 
	centerY = height/2;

	let angle = radians(360/float(formResolution));
	for (let i=0; i<formResolution; i++){
		x[i] = cos(angle*i) * radius;
		y[i] = sin(angle*i) * radius;  
	}
	stroke(255);
	textFont('Courier New');
	textSize(64);
	// for (let i = 0; i < 40; i++) {
	// 	questions[i] = new Question(random(width), random(height), random(128));
	// }
}


function draw(){
	background('red');
	drawBackground();
	centerX += noise(10) * 0.001;
	centerY += noise(10) * 0.001;
	fill(0);
	noStroke();
	fill(0);
	for (let i=0; i<formResolution; i++){
		x[i] += random(-stepSize,stepSize);
		y[i] += random(-stepSize,stepSize);
	}

	beginShape();
	curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);
	for (let i=0; i<formResolution; i++){
		curveVertex(x[i]+centerX, y[i]+centerY);
	}
	curveVertex(x[0]+centerX, y[0]+centerY);
	curveVertex(x[1]+centerX, y[1]+centerY);
	endShape();
	stroke(255);
	// questions.forEach((q) => {
	// 	q.display();
	// 	q.update();
	// });
}

function drawBackground() {
	stroke(0);
	// fill('red');
	for (let j = 0; j < height; j+=30) {
		for (let i = 0; i < width; i+=30) {
			let r = sin(frameCount * (i + j) * 0.0002) * 20;
			ellipse(i, j, r, r);
		}
	}
}

class Question {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	display() {
		textSize(this.size);
		fill(0);
		text("?", this.x, this.y);
	}

	update() {
		this.x += random(-1, 1);
		this.y += random(-1., 1);
	}
}