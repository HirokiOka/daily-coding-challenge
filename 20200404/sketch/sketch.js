function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);
	textFont('monospace');
	noLoop();
}

function draw() {
	background(random(360), 80, 80);
	fill(255);
	textSize(64);
	text("Hello Neighbor!", width/2-230, height * 1 / 7);
	noStroke();
	let xstart = random(10);
	let ynoise = random(10);
	translate(width/2, height/2, 0);
	for (let y = -(width/8); y <= (height/8); y+=2) {
		ynoise += 0.02;
		let xnoise = xstart;
		for (let x = -(width/8); x <= (width/8); x+=2) {
			xnoise += 0.02;
			drawPoint(x, y, noise(xnoise, ynoise));
		}
	}
}

function drawPoint(x, y, noiseFactor) {
	push();
	translate(x * noiseFactor * 4, y * noiseFactor * 4, -y);
	let distance = dist(width/2, height/2, x, y) % 200;
	let edgeSize = noiseFactor * distance;
	fill(edgeSize % 180, 80, 100);
	ellipse(0, 0, edgeSize, edgeSize);
	pop();
}
