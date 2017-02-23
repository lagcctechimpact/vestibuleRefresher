var bubble = {
	x: 300,
	y: 200,
	display: function() {
		stroke(255, 0, 255); // why don't we use the keyword "this" here? hint: pay attention to placement. 
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
	bubble.move();
	bubble.display();
}