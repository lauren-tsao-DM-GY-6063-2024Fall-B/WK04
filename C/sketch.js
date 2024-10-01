function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  // for (let cnt = 0; cnt < 10; cnt++) {
  //   print(random(10, 100));
  // }

  // randomSeed(1010)
  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      let dd = random(16, sqDim); //drawing dimension, randomize size between 16 to sqDim
      let vx = random(-30, 30); //vx = variation in x btw the numbers -30 to 30
      let vy = random(-30, 30); //vy = variation in y btw the numbers -30 to 30
      push();
      translate(x, y);
      rect(vx, vy, dd);
      pop();
    }
  }
}

function draw() {}
