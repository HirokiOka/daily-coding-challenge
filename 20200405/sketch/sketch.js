let manImg;
let womanImg;
let musicianImg;
let num = 20;
let humans = new Array(num);
let state = true;
let count = 0;

function preload() {
	manImg = loadImage('img/man.png');
	womanImg = loadImage('img/woman.png');
	musicianImg = loadImage('img/musician.png');
}

function setup() {
	createCanvas(600, 600);
	imageMode(CENTER);
	translate(width / 2, height / 2);
	for (let i = 0; i < num; i++) {
		let src = random(1) > 1/2 ? manImg : womanImg;
		let x = (i % 10) * 50;
		let y = (i % 4) * 80;
		humans[i] = new Human(x, y, src);
	
	}
}

function draw() {
	count++;
	background(200);

	image(musicianImg, width * 2/3, height * 3/4);
	
	humans.forEach((h) => {
		h.draw();
		if (state) {
			h.up();
		} else {
			h.down();
		}
	});
	if (count % 20 === 0) {
		if (state) {
			state = false;
		} else {
			state = true;
		}
	}
	
}

class Human {
	constructor(x, y, img) {
		this.x = x;
		this.y = y;
		this.img = img;
		this.seed = random(1) * 0.02;
	}

	draw() {
		image(this.img, this.x, this.y, this.img.width / 2, this.img.height / 2);
	}
	up() {
		this.y--;
	}
	down() {
		this.y++;
	}
}