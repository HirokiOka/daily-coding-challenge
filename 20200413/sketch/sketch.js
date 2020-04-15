let myFont;
let backgroundColor;

function preload() {
	myFont = loadFont('../font/fonts-DSEG_v046/DSEG7-Classic/DSEG7Classic-Bold.ttf');
}

function setup() {
	createCanvas(600, 600);
	textFont(myFont);
}

function draw() {
	backgroundColor = sin(frameCount * 0.004) * 255;
	background(backgroundColor);
	fill(255 - backgroundColor);
	for (let j = 0; j < height; j+=60) {
		for (let i = 0; i < width; i+=60) {
			let number = floor(frameCount * noise(i, j) * 0.02 % 9) + 1;
			textSize(abs(sin(frameCount * (i + j) * 0.00002)) * 30);
			text(number, i+20, j);
		}
	}

}

