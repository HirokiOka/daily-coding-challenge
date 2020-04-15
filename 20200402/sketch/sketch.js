let system;
let a = 0.0;



function setup() {
	createCanvas(600, 600);
	system = new ParticleSystem(createVector(width / 2, height * 2/3));
	rectMode(CENTER);
}

function draw() {
	background(0);
	for (let i = 0; i < 20; i++) {
		system.addParticle();
	}
	system.run();
	strokeWeight(1);
	stroke(255);
	fill(0);
	rect(width / 2, height * 2/3, 200, 100);
	push();
	translate(width/2-100, height/2+50);
	for (let i = 0; i < 50; i++) {
		line(i * 4, 50, i * 4, 50 + sin(a) * 40.0);
		a = a + TWO_PI / 50.0;
	}
	pop();
}



class Particle {
	constructor(position) {
		this.acceleration = createVector(0, -0.05);
		this.velocity = createVector(random(-1, 1), random(-1, 0));
		this.position = position.copy();
		this.lifespan = 255;
	}

	run() {
		this.update();
		this.display();
	}

	update() {
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.lifespan -= 2;
	}

	display() {
		stroke(200, this.lifespan);
		strokeWeight(random(3));
		// noStroke();
		// fill(250, this.lifespan);
		// ellipse(this.position.x, this.position.y, random(12), random(12));
		point(this.position.x, this.position.y);
	}

	isDead() {
		return this.lifespan < 0;
	}
}

class ParticleSystem {
	constructor(position) {
		this.origin = position.copy();
		this.particles = [];
	}
	
	addParticle() {
		this.particles.push(new Particle(this.origin));
	}

	run() {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			let p = this.particles[i];
			p.run();
			if (p.isDead()) {
				this.particles.splice(i, 1);
			}
		}
	}
	
}