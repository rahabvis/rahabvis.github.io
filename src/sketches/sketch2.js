class tri {
  constructor(x, y, r, R, G, B, rot, rotAmnt) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colR = R;
    this.colG = G;
    this.colB = B;
    this.rot = rot;
    this.rotAmnt = rotAmnt
  }

  show() {
    noStroke(2);
    fill(this.colR, this.colG, this.colB, 50);
    triangle(this.x + this.r * sin(radians(0 + this.rot)), this.y + this.r * cos(radians(0 + this.rot)),
      this.x + this.r * sin(radians(120 + this.rot)), this.y + this.r * cos(radians(120 + this.rot)),
      this.x + this.r * sin(radians(240 + this.rot)), this.y + this.r * cos(radians(240 + this.rot))
    );
  }
  rotate() {
    this.rot += this.rotAmnt;
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = random(currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var triangles = [];
var params;

function setup() {
  params = getURLParams();
  createCanvas(windowWidth, windowHeight);
  var i = 0;
  var x;
  var y;
  for (x = 0; x <= width+25; x+=25) {
    for (y = 0; y <= height+25; y+=25) {
      triangles[i] = new tri(x, y, random(20, 50), 0, random(100), random(150, 250), random(360), 2*round(random(1)) - 1);
      i++;
    }
  }
  triangles = shuffle(triangles);
}

function draw() {
  if (params.light == "true"){
    background(255);
  } else {
    background(0)
  }
  var i;
  for (i = 0; i < triangles.length; i++) {
    triangles[i].show();
  }
  for (i = 0; i < triangles.length; i++) {
    triangles[i].rotate();
  }
}
