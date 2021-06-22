

function Brick(pos, r) {
  this.pos = createVector(random(100, width - 100), random(100, height - 400));
  this.r = random(20, 80);
  this.total =6;
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  this.display = function() {
    push();

    stroke(color)
    fill(color)
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.r;
      var x = r * cos(angle);
      var y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    stroke(0);
    strokeWeight(1);
    pop();

  }

  this.shrink = function() {
    var newB = [];
    newB[0] = new Brick(this.pos, this.r);
    // newB[1] = new Brick(this.pos, this.r);
    return newB;
  }

  }
 