let xstart;
let xnoise;
let ynoise;

function setup() {
  createCanvas(600, 600);
//   noLoop();
  xstart = random(10);
  xnoise = xstart;
  ynoise = random(10);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (let j = -height/2; j <= height/2; j+=6) {
    ynoise += 0.004;
    xnoise = xstart;
    for (let i = -width/2; i <= width/2; i+=6) {
      xnoise += 0.004;
      let noiseFactor = noise(xnoise, ynoise);
      let col = noiseFactor * 255;
      let alph = noiseFactor * 100;
      let distance = dist(i, j, 0,0) * noiseFactor;
      strokeWeight(distance%17);
	  stroke(col, alph);
	//   rotate(frameCount % 2);
	// point(i, j);
      point(i * noiseFactor, j * noiseFactor);
    }
  }
}