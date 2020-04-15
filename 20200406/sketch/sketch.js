
function setup() {
	createCanvas(600, 600);
	blendMode(DIFFERENCE);
	noLoop();
}

function draw() {
	background(0);
	fill(255);
	for(let i = 0; i < 30; i++) {
		textSize(random(64, 128));
		push();
		let x = random(width);
		let y = random(height);
		translate(x, y);
		rotate(random(PI));
		rect(0, 0, 100, 200);
		text("漢字", 0, 0);
		pop();
	}
	
}