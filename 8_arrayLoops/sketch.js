/* 
6.2 p5.js Arrays and loops
1. Code below is from https://vimeo.com/channels/learningp5js/141211394
2. Video Referenced at 1:55 is For Loops, https://vimeo.com/channels/learningp5js/139013336 
*/



var nums = [100, 35, 46, 72]; // array

function setup() {
	createCanvas(500, 400);
}

function draw() {
	background(0);
	// iterate through each item in the array
	//print an ellipse drawn at the index incremented by 1 in the array.
	for (var i = 0; i < 4; i++) {
		stroke(255);
		fill(51);
		ellipse(i * 100 + 100, 200, nums[i], nums[i]); // multiplies the value in each spot in the array by 100 
		                                               // to get the spacing of the x coordinate at 200, 300, 400.
	}

	// ellipse(200, 200, nums[1], nums[1]);
	// ellipse(300, 200, nums[2], nums[2]);
	// ellipse(400, 200, nums[3], nums[3]);

}