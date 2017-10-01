// Set up!
var JScript_canvas = document.getElementById("theIDThatJScriptCalls");
var context = JScript_canvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
//context.arc(95, 85, 40, 0, 2*Math.PI);
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
//context.fillStyle = "black";

// Draw the left eye
context.fillStyle = "green";
context.beginPath();
//context.arc(75, 75, 5, 0, 2*Math.PI);
context.arc(75, 75, 5, Math.PI, 0, true);
//context.closePath();
context.stroke();
//context.fill();

// Draw the right eye
context.beginPath();
//context.arc(114, 75, 5, 0, 2*Math.PI);
context.arc(114, 75, 5, 0, Math.PI, false);
//context.closePath();
context.stroke();
//context.fill();

// Draw the mouth
context.beginPath();
//context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.arc(95, 90,  26, Math.PI, 2*Math.PI, true);
//(x increase goes to right, y increase goes down, scale, circumference start with positive number starting from 0 degree angle, circumference end with positive number starting from , counterclockwise?)
//context.closePath();
context.stroke();
//context.fill();

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("AOL Goodbye",15,175);