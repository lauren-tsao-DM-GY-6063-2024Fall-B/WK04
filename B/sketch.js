function setup() {
  createCanvas(windowWidth, windowHeight);

  print(width, height, width*height);

  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100; //skip (gap)
  let sqDim = 0.9 * pitch; // 90 percent of the pitch
  translate(pitch / 2, pitch / 2);

  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      // draw concentric squares
      for (let dd = 100; dd > 0; dd -=8) {
        print(dd) //the exact dimensions of what is being drawn by the loop
        push();
        translate(x, y);
        rotate(100 - dd);
        rect(0, 0, dd);
        pop();
      }
    }
  }
}

function draw() {

}
