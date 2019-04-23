class tri {
  constructor(x, y, r, R, G, B, rot) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colR = R;
    this.colG = G;
    this.colB = B;
    this.rot = rot;
  }

  show() {
    noStroke();
    fill(this.colR, this.colG, this.colB, 50);
    triangle(this.x + this.r * sin(radians(0 + this.rot)), this.y + this.r * cos(radians(0 + this.rot)),
      this.x + this.r * sin(radians(120 + this.rot)), this.y + this.r * cos(radians(120 + this.rot)),
      this.x + this.r * sin(radians(240 + this.rot)), this.y + this.r * cos(radians(240 + this.rot))
    );
  }
  update() {
    this.rot += noise(this.x, this.y)*radians(10) + radians(5)
  }
}

var triangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < (width*height/150); i++) {
    triangles[i] = new tri(random(width), random(height), random(25), 0, random(255), 255, random(360));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < triangles.length; i++) {
    triangles[i].show();
    triangles[i].update();
  }
}
