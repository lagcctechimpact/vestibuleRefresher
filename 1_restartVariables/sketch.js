/* code inspired by:
https://vimeo.com/channels/learningp5js/139587733
*/

// these variables are accessible throughout the program. the scope is global
var ballX = 300;
var ballY = 200;
var speedX = 2;
var speedY = 3;


function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	// functions are commands that are used when called, call functions in code with the syntax below
	move(); // call the move function
	restart(); // call the restart function
	display(); // call the display function
}

// this function is one that we create. it is not drawn in any system functions such as draw() or setup(),
// however, a function can be called or used inside them
function display() {
	stroke(255);
	strokeWeight(4);
	fill(200, 0, 200);
	ellipse(ballX, ballY, 24, 24);
}

function move() {
	ballX = ballX + speedX;
	ballY = ballY + speedY;

}

function restart() {
	if (ballX > width || ballY > height) { // if the ballX exceeds the canvas width OR the ballY exceeds the canvas height
		ballX = 300; // draw ballX at 300
		ballY = 200; // draw ballY at 200
	}
}