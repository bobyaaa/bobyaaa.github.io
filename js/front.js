var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*/////////////// Mouse Event Handler /////////////////////*/
mouse = {
	x: undefined,
	y: undefined }

window.addEventListener('mousemove', function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	updateBackgroundCircles();
});
/*//////////////// Circle Class //////////////////*/

function Point(x, y, radius, dr) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dr = dr;
	this.direction = false;

	this.draw = function() {
		c.beginPath();
		c.globalAlpha = 0.5;
		c.arc(mouse.x, mouse.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = 'black';
		c.fill();
		c.stroke()
	}

	this.update = function() {
		if (!this.direction) {
			this.radius -= this.dr;
		} else {
			this.radius += this.dr;
		}

		if (this.radius < 4.4) {
			this.direction = true;
		}

		if (this.radius > 5.6) {
			this.direction = false;
		}
		this.draw();
	}
}

function Circle(x, y, dx, dy, radius, dr, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.initialRadius = radius;
	this.color = color;

	this.draw = function() {
		//Basically just draw the object on the canvas
		//Update this later so we don't get plain circles
		c.beginPath();
		c.globalAlpha = 1;
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.color;
		c.stroke();
		c.globalAlpha = 0.5;
		c.fillStyle = this.color;
		c.fill(); 
	}

	this.update = function() {
		//Updates position, makes radius smaller
		//If the circle radius is negative, we just reset it
		//Make circles bounce off walls (?) .. Later
		this.x += dx;
		this.y += dy;
		this.radius -= dr; 

		if (this.radius <= 0) {
			this.x = mouse.x;
			this.y = mouse.y;
			this.radius = this.initialRadius; 
		}
		this.draw();
	}
}

function Circle1(x, y, dx, dy, radius, dr, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.initialRadius = radius;
	this.color = color;

	this.draw = function() {
		//Basically just draw the object on the canvas
		//Update this later so we don't get plain circles
		c.beginPath();
		c.globalAlpha = 1;
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.color;
		c.stroke();
		c.globalAlpha = 0.5;
		c.fillStyle = this.color;
		c.fill(); 
	}

	this.update = function() {
		//Updates position, makes radius smaller
		//If the circle radius is negative, we just reset it
		//Make circles bounce off walls (?) .. Later
		this.x += dx;
		this.y += dy;
		this.radius -= dr; 

		if (this.radius <= 0) {
			this.x = x;
			this.y = y; 
			this.radius = this.initialRadius; 
		}
		this.draw();
	}
}

c.font = "30px Arial";
var colors = ["#FDFFFC", "#2EC4B6", "#E71D36", "#FF9F1C"];
var circ = [];
var circ1 = [];

for (var i = 0; i < 35; i++) {
	var dx = (Math.random() - 0.5) * 3;
	var dy = (Math.random() - 0.85) * 3;
	var radius = 25;
	var dr = (Math.random() + 0.5) * 0.5;
	var color = colors[Math.floor(Math.random() * 4)];
	circ.push(new Circle(-100, -100, dx, dy, radius, dr, color));
}

updateBackgroundCircles(); 

function updateBackgroundCircles() {
	circ1 = []

	for (var i = 0; i < 70; i++) {
		var dx = (Math.random() - 0.5) * 3;
		var dy = (Math.random() - 0.5) * 3;
		var radius = 30;
		var dr = (Math.random() + 0.5) * 0.5;
		var color = colors[Math.floor(Math.random() * 4)];
		var y = (Math.random() - 0.5) * 20;
		var x = (Math.random() - 0.5) * 300;
		circ1.push(new Circle1(canvas.width/2 + x, canvas.height/2 + y, dx, dy, radius, dr, color));
	}	
}

var cPoint = new Point(mouse.x, mouse.y, 5, 0.05); 

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for (var i = 0; i < 35; i++) {
		circ[i].update();
	}

	for (var i in circ1) {
		circ1[i].update();  		
	}

	cPoint.update();
}

animate();