/* inspired by:
https://vimeo.com/channels/learningp5js/138935677
*/

var toggle = false; // global variable with a boolean data type (implied) of false

function setup() {
	createCanvas(600, 400);
}

function draw() {
	if (toggle) { // don't get confused. the state is false or "off", so the background starts out black, not red  
		background(255, 0, 0); // since the state is set to false, this code is ignored and the else or "otherwise" code is executed
	} else {
		background(0);
	}

	stroke(255);
	strokeWeight(4);
	noFill();

	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { // checking for the mouse position to effect the fill
		fill(0, 0, 255);
	} else {
		fill(255, 255, 255);
	}
	ellipse(300, 200, 50, 50);
}

function mousePressed() {
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		// if (toggle) {
		//   toggle = false;
		// } else {
		//   toggle = true;
		// }
		toggle = !toggle; // in this case the state is switched from false to true based on the global declaration and initialization. see above.

	}
}