let holes = [];
let num = 50;

function setup() {
    createCanvas(400, 400);
    noStroke();
    for (let i = 0; i < num; i++) {
        holes[i] = new Hole(random(width), random(height), random(10, 60));
    }
    holes.forEach((h1) => {
        holes.forEach((h2) => {
        if (h1 === h2) { return; }
        if (h1.isOverlap(h2)) {
            h1.visibility = false;
        }
        });
    });
}

function draw() {
    background('yellow');
    fill(40, 80);
    holes.forEach((h) => {
        h.draw();
    });
}

class Hole {
    constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.visibility = true;
    this.randomness = random(1) * 0.02;
    }

    draw() {
        if (this.visibility === true) {
            circle(this.x, this.y, this.r * sin(this.randomness * frameCount));
        }
    }

    isOverlap(otherHole) {
        let distance = dist(this.x, this.y, otherHole.x, otherHole.y);
        let border = this.r / 2 + otherHole.r / 2;
        return distance > border ? false : true;
    }
}