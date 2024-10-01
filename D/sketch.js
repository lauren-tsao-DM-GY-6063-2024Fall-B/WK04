
function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);

  //l meaning loop
  for (let cnt = 0; cnt < l; cnt++){
    print(cnt);
  line(c, -c, r, 0);
  line(c, c, r, 0);
  rotate(360 / l);
  }

  pop();
}

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
      // let dd = random(16, sqDim); //drawing dimension, randomize size between 16 to sqDim
      // let vx = random(-30, 30); //vx = variation in x btw the numbers -30 to 30
      // let vy = random(-30, 30); //vy = variation in y btw the numbers -30 to 30
      // let rn = random(0, 6); //rn = random number
      let rn = random(0, 6);
      let rr = random(256);
      let rg = random(256);
      let rb = random(256);

      let rcc = random("#ff00ff", "#ff0000", "#00ffff");

      let rd = random([25, 36, 80, 120]);

      push();
      translate(x, y);

      fill(rr, rg, rb);

      if (rn < 2) {
        rect(0, 0, rd);
      } else if (rn < 4) {
        ellipse(0, 0, rd);
      } else {
        star(0, 0, rd, 10, 4);
      }

      // if (rn > 3) {
      //   ellipse(0, 0, sqDim);
      // }

      pop();
    }
  }
}

function draw() {}

function mouseClicked() {
  setup();
}
