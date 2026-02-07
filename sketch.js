let cam;
let started = false;

function setup() {
  createCanvas(1000, 1000);
  textAlign(LEFT, TOP);
  textSize(5);
  colorMode(HSB, 360, 100, 100, 1);
  background(0);

  fill(0, 0, 100);
  text("Click to start camera", 20, 20);
}

function mousePressed() {
  if (!started) {
    cam = createCapture(VIDEO);
    cam.size(1000, 1000);
    cam.hide();
    started = true;
  }
}
function draw() {
  if (!started) return;

  cam.loadPixels();
  if (cam.pixels.length === 0) return; // ← THIS is the missing line

  background(0);

  for (let x = 0; x < cam.width; x += 6) {
    for (let y = 0; y < cam.height; y += 6) {
      let idx = 4 * (y * cam.width + x);

      let r = cam.pixels[idx];
      let g = cam.pixels[idx + 1];
      let b = cam.pixels[idx + 2];

      let pixCol = color(r, g, b);

      let h = hue(pixCol);
      let s = saturation(pixCol);
      let br = brightness(pixCol);

      fill(h, s, br);

      let brit = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      brit = map(brit, 0, 255, 0, 100);

      let ch = ' ';
      if (brit > 15) ch = '.';
      if (brit > 20) ch = ':';
      if (brit > 30) ch = '-';
      if (brit > 40) ch = '|';
      if (brit > 50) ch = '=';
      if (brit > 60) ch = '+';
      if (brit > 62) ch = '%';
      if (brit > 64) ch = 'O';
      if (brit > 68) ch = '#';
      if (brit > 75) ch = '@';

      text(ch, x, y);
    }
  }
}
