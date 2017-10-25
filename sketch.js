var x = 0;
var y = 0;


function setup() {
  createCanvas(800,500);
  stroke(0);
  strokeWeight(10);
  
    while (x < width) {
    stroke(random(256),random(256),random(256));
    line(x, 0, x, random(windowHeight));
    x = x + 30;
  }
  
  while (y < height) {
    stroke(random(256),random(256),random(256), 100);
    line(0, y, random(windowWidth), y);
    y = y + 30;
  }
}

function draw() {
  
}