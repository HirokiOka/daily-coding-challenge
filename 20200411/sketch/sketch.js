let img;

function preload() {
	img = loadImage("../img/sansyouo.jpg");
	img.resize(600, 600);
}

function setup() {
	filter(GRAY);
	
	createCanvas(600, 600);
	image(img, 0, 0);
}


// function draw() {
// 	// img.filter(GRAY);
	

// }