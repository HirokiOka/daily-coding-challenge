let factor;
let notesNum = 50;
let notes = [];
let img;

function preload() {
	img = loadImage("../img/score.png");
}


function setup() {
	createCanvas(600, 600);
	img.resize(width, height);
	factor = random(10);
	for (let i = 0; i < notesNum; i++) {
		notes[i] = new Note(random(-width/2, width/2), random(-height/2, height/2), random(64), 1);
	}
}

function draw() {
	background(255);
	// image(img, 0, 0);
	translate(width / 2, height / 2);
	noFill();
	for (let j = -height; j < height; j+=20) {
		if (j % 120 !== 0) {
			beginShape();
			for (let i = -width; i < width; i+=20) {
				let x = i * noise(i * 0.002, j * 0.002, factor);
				let y = j * noise(i * 0.002, j * 0.002, factor);
				curveVertex(x, y);
			}
			endShape();
		}
	}
	fill(0);
	notes.forEach((n) => {
		n.display();
		n.update();
	});

	factor+=0.002;
}



class Note {
	constructor(x, y, size, rotateSpeed) {
		let notesType = ['♩', '♪', '♫', '♬'];
		this.vector = createVector(x, y);
		this.randomVector = p5.Vector.random2D();
		this.size = size;
		this.rotateSpeed = rotateSpeed;
		this.noteType = notesType[floor(random(notesType.length))];
	}

	display() {
		textSize(this.size);
		text(this.noteType, this.vector.x, this.vector.y);
	}

	update() {
		this.vector.add(this.randomVector);
		if (this.vector.x < -width/2) {
			this.vector.x = width/2;
		} else if (this.vector.x > width/2) {
			this.vector.x = -width/2;
		}

		if (this.vector.y < -height/2) {
			this.vector.y = height/2;
		} else if (this.vector.y > height/2) {
			this.vector.y = -height/2;
		}

	}
}