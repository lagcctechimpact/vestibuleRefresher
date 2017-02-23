/* 
Original code by Daniel Shiffman: Code below is for https://vimeo.com/channels/learningp5js/141211396
Modified by Dawn C. Hayes

*/

// an array is a list of items
var nums = [200, 43, 29, 96]; // an array with 4 items, index 0-3
var num = 55; // a variable

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255, 135, 23);
	ellipse(100, 200, num, num); // width and height are drawn at the variable num
	ellipse(200, 200, nums[3], nums[3]); //width and height are drawn at index 3 for a value of 96
	ellipse(300, 300, nums[2], nums[2]); //width and height are drawn at index 2 for a value of 29
}