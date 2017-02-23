var bubble1 = {
  x: 300,
  y: 200,
  display: function() {
    stroke(255, 0, 255);  // why don't we use the keyword "this" here? hint: pay attention to placement. 
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 10, 10);
  },
  move: function() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
}

var bubble2 = {
  x: 350,
  y: 250,
  display: function() {
    stroke(255, 0, 255);  // why don't we use the keyword "this" here? hint: pay attention to placement. 
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 10, 10);
  },
  move: function() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.display();
  bubble2.move();
  bubble2.display();
} 