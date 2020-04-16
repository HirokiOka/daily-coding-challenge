
function setup() {
	createCanvas(600, 600);
	// drawingContext.shadowOffsetX = 5;
	// drawingContext.shadowOffsetY = -5;
	drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = 'black';
	noStroke();
	rectMode(CENTER);
}

function draw() {
	background(255);
	
	// rect(0, 0, width-20, height-20);
	translate(width/2, height/2);
	rect(0, 0, width * 3/4, height *  3/4);
	drawingContext.shadowOffsetX = 5 * sin(frameCount * 0.02);
	drawingContext.shadowOffsetY = -5 * cos(frameCount * 0.02);
	for (let i = 50; i > 0; i-=5) {
		if (i % 10 === 0) {
			fill(255);
		} else {
			
			fill(0);
		}

		drawSomething(i * 10);
	}
}

function drawSomething(r) {
	// let color = pickColor();
	// fill(color);
	beginShape();
	for (let i = 0; i < TWO_PI;i+=radians(1)) {
		let x = r * sin(i) * noise(i * 0.002, frameCount * 0.002);
		let y = r * cos(i) * noise(i * 0.002, frameCount * 0.002);
		curveVertex(x, y);
	}
	endShape(CLOSE);
}

function pickColor() {
	let colors = ["#2e5ec0", "#f7470e", "#e9eb2e", "#50b490"];
	return colors[floor(random(colors.length))];
}