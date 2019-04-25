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
    if (params.light == "true"){
      fill(0, 0, 50, this.opc);
    } else {
      fill(200, 200, 255, this.opc);
    }
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
var params;

function r(x, y) {
  return random(x, y)
}

function setup() {
  params = getURLParams();
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < (width*height/1000); i++) {
    circles[i] = new cir(r(0, width), r(0, height), r(0, ((width<height)? width : height)/20), r(0, TWO_PI), r(0, width/750), r(0, 75));
  }
}

function draw() {
  if (params.light == "true"){
    background(255);
  } else {
    background(0);
  }
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].show();
  }
  
  filter(POSTERIZE, 2);
  noStroke()
  if (params.light == "true"){
    fill(255, 150);
  } else {
    fill(0, 150);
  }
  rect(0, 0, width, height);
}
