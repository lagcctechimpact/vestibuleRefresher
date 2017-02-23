/* inspired by:
https://vimeo.com/channels/learningp5js/139587732
*/

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(50);
	lollipop(100, 100, 50); // calling the first lollipop with arguments
	lollipop(300, 200, 150); // calling the second lollipop with arguments

}

// this function is defined by you and includes parameters defined by you. When called, arguments are passed in as specific values
function lollipop(x, y, diameter) {
	fill(125, 225, 35);
	rect(x - 10, y, 20, 150); // x argument with an offset of 10. the width and height are hardcoded here.

	fill(155, 0, 200);
	ellipse(x, y, diameter, diameter); // don't get confused. the x, y and diameter parameters are local variables passed into the ellipse function
}