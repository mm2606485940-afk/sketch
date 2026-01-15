let numRaindrops = 500; // total number of raindrops
let x = [];
let y = [];
let size = [];
let speed = [];
let r = [];
let g = [];
let b = [];
const TIME_SCALE = 1;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(20);
  translate(width / 2, height / 2);

  // sun
  fill(255, 180, 0);
  circle(0, 0, 30);

  // r
  let r1 = 60;   // 1s/circle
  let r2 = 100;  // 1min/circle
  let r3 = 140;  // 1h/circle

  // speed
  let T1 = 1000 / TIME_SCALE;    // 1s
  let T2 = 60000 / TIME_SCALE;   // 1 min
  let T3 = 3600000 / TIME_SCALE; // 1 h

  let t = millis();

  // angle ： 2π
  let a1 = TWO_PI * (t % T1) / T1;
  let a2 = TWO_PI * (t % T2) / T2;
  let a3 = TWO_PI * (t % T3) / T3;

  // line
  stroke(255, 60);
  noFill();
  circle(0, 0, r1 * 2);
  circle(0, 0, r2 * 2);
  circle(0, 0, r3 * 2);
  noStroke();

  // ball1：1s/circle
  let x1 = cos(a1) * r1;
  let y1 = sin(a1) * r1;
  fill(100, 200, 200);
  circle(x1, y1, 12);

  // ball2：1min/circle
  let x2 = cos(a2) * r2;
  let y2 = sin(a2) * r2;
  fill(120, 200, 150);
  circle(x2, y2, 12);

  // ball3：1h/circle
  let x3 = cos(a3) * r3;
  let y3 = sin(a3) * r3;
  fill(200, 120, 180);
  circle(x3, y3, 12);
  
  
}