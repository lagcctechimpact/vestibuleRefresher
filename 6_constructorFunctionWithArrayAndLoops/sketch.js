/* 
6.4 p5.js The Constructor Function 
Code for https://vimeo.com/channels/learningp5js/141211393
*/

var bubbles = []; // declaring and empty array

function setup() {
	createCanvas(600, 400);
	for (var i = 0; i < 4; i++) { // use a for loop to make copies of the bubble object, in this case, 4. the array is used to track the bubble objects.
		bubbles[i] = new Bubble(); // use the keyword "new" to instantiate, invoke or make a bubble object from the Bubble template. 
	} // It's like a cookie cutter that makes as many cookies as you want. In this case, 4.
}

function draw() {
	background(0);
	for (var i = 0; i < bubbles.length; i++) { // go through or iterate through the length of the array to display and move each bubble. 
		bubbles[i].move();
		bubbles[i].display();
	}
}

// a constructor function is defined here. notice the difference in syntax vs the object literal notation. Remember the keyword "this" references the implied object function
function Bubble() {
	this.x = random(0, width);
	this.y = random(0, height);

	this.display = function() {
		stroke(255);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	}

	this.move = function() {
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);

	}
}

