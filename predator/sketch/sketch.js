let t;

function setup() {
	createCanvas(600, 600);
	// noLoop();
	noFill();
	t = random(10);
	colorMode(HSB, 360, 100, 100, 100);
	stroke(0, 100, 80);
	strokeWeight(0.7);
	strokeCap(ROUND);
}

function draw() {
	translate(width/2, height/2);
	background(0, 80);
	for (let j = -height/2; j < height/2; j+=2) {
		beginShape();
		for (let i = -width/2; i < width/2; i+=4) {
			let x = i * noise(i * 0.02, j * 0.02, t);
			let y = j ;
			curveVertex(x, y);
		}
		endShape();
	}
	t+=0.01;
}