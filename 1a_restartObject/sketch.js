/* code inspired by:
https://vimeo.com/channels/learningp5js/139587733
*/

// objects help modularize code and make it reusable. 
// instead of using global variables, variables are defined within an object as data and properties 
// here a single ball object is created using the object literal syntax
// to access properties of the ball object, use dot syntax: ie. ball.x
var ball = {
	x: 300,
	y: 200,
	// drawing the ball so it appears to move at an angle can be set by changing the x and y speed
	// think of the slope of a line
	xspeed: 2,
	yspeed: 3
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	// functions are commands that are used when called.
	// to call a function in code use the syntax below
	move(); // call the move function
	restart(); // call the restart function
	display(); // call the display function
}

// this function is one that we create. it is not a system function that P5 will recognize such as draw() or setup(), 
// so you must define or create it outside of the system functions setup() and draw()
// however, a function can be called or used inside them
// some functions have parameters like background() and createCanvas(), while others do not, like draw()
// you can define parameters when defining a function. when the function is called, arguments are passed in as specific values for the function.
function display() {
	stroke(255);
	strokeWeight(4);
	fill(200, 0, 200);
	ellipse(ball.x, ball.y, 24, 24);
}

function move() {
	ball.x += ball.xspeed; //shorthand incrementor for the code commented out below
	ball.y += ball.yspeed; //shorthand incrementor for the code commented out below
	// ball.x = ball.x + ball.xspeed;
	// ball.y = ball.y + ball.yspeed;

}

// the ball object includes things about itself and things it can do. 
// in this case, it can display, move and restart if the x and y position exceed the canvas width or height. 
// once the the canvas width and height are exceeded, it will restart at the starting x and y values initialized in the object.
function restart() {
	if (ball.x > width || ball.y > height) { // if the ball's x position exceeds canvas width OR the ball's y position exceeds canvas height
		ball.x = 300; // draw the ball's x position at 300 
		ball.y = 200; // draw the ball's y position at 200
	}
}