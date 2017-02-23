/*
Original code by Daniel Shiffman. 
Modified by Dawn C. Hayes February 2017
*/

var bubbles = []; // array


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 5; i++) { // loop through each item in the array based on the bubbles object
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {  // remember, functions can be values/variables in an object
        stroke(255, 125, 35);
        noFill();
        ellipse(this.x, this.y, 38, 38);  // remember, since the function is referenced inside the objec,the keyword "this" refers to the implied object's x and y
      },
      move: function() {
        this.x = this.x + random(-3, 3); 
        this.y = this.y + random(-3, 3);
      }
    }
  }

}

function draw() {
  background(125, 0, 255);
  for (var i = 0; i < bubbles.length; i++) {
  	console.log(bubbles[i].move()); 
  	console.log(bubbles[i].display());
  	//console.log("hmmm...");
  	
    // bubbles[i].move();
    // bubbles[i].display();
  }
}