let bubbles = [];

function setup() {
  // put setup code here
  createCanvas(800, 800);
  extraCanvas = createGraphics(800, 800);
  extraCanvas.clear();
  background(255, 204, 0);
  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');

}

function draw() {
  // put drawing code here
square(30,20,55);
if(mouseIsPressed) {
  fill(0);
} else {
  fill(255, 0, 0, 175);
}
square(mouseX, mouseY, 80, 80);
}

function gotData(data) {

  for (var i = 0; i < data.number; i++) {
   fill(255);
   square(random(width), random(height), 16, 16);
  }

  if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    let starX = random(width);
    let starY = random(height);
    extraCanvas.ellipse(starX, starY, 10, 10);
  }

image(extraCanvas, 0, 0)

}
