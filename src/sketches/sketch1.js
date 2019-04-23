class cir {
  constructor(x, y, r, dir, spd, opc) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dir = dir;
    this.spd = spd;
    this.opc = opc;
  }

  show() {
    noStroke();
    fill(255, 255, 255, this.opc);
    circle(this.x, this.y, this.r, this.r)
  }
  update() {
    this.x = this.x + sin(this.dir) * this.spd
    if (this.x > width+this.r) {
      this.x -= width + 2*this.r
    } else if (this.x < -this.r) {
      this.x += width + 2*this.r
    }
    this.y = this.y + cos(this.dir) * this.spd
    if (this.y > height+this.r) {
      this.y -= height + 2*this.r
    } else if (this.y < -this.r) {
      this.y += height + 2 * this.r
    }
  }
}

var circles = [];

function r(x, y) {
  return random(x, y)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < (width*height/750); i++) {
    circles[i] = new cir(r(0, width), r(0, height), r(0, ((width<height)? height : width)/50), r(0, TWO_PI), r(0, width/750), r(0, 75));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].show();
  }
  
  filter(POSTERIZE, 2);
  noStroke()
  fill(0, 150)
  rect(0, 0, width, height);
}
