var p3 = 4;
var p4 = 5;
var p5 = 6;
var p6 = 5.03;
var p7 = 5;
var p8 = 5;
var p9 = 5;

var speed = 1;

var planets;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	mercury = {colour:'White', radius:10, phase:5, distance:50, orbitSpeed:0.02}
	venus = {colour:'Orange', radius:15, phase:5, distance:70, orbitSpeed:0.03}
	earth = {colour:'Blue', radius:20, phase:8, distance:150, orbitSpeed:0.006}
	saturn = {colour:'LightGoldenRodYellow', radius:30, phase:5, distance:180, orbitSpeed:0.014, customDraw: drawSaturn}
	planets = [mercury, venus, earth, saturn];
}

function stars() {
	for (var i = 0; i <= 200; i++){
		fill('White');
		ellipse(random(0, windowWidth), random(0, windowHeight), 2, 2)
	}
}

function updatePlanet(p){
	p.phase += p.orbitSpeed * speed;
}
function basicEllipse(p){
	fill(p.colour);
	ellipse(p.distance * 1.5 * cos(p.phase), p.distance*sin(p.phase), p.radius, p.radius);
}
function drawPlanet(p) {
	if (p.customDraw){
		p.customDraw(p);
	} else {
		basicEllipse(p);
	}
}

function drawSaturn(p) {
	basicEllipse(p);
	fill('Peru')
	ellipse(p.distance * 1.5 * cos(p.phase), p.distance*sin(p.phase), p.radius * 2, p.radius*0.4);
}


function draw() {
	speed = (mouseX + mouseY)/500;
	background(0);
	stars()
	translate (windowWidth/2, windowHeight/2);
	noStroke();

	//sun
	fill('Yellow');
	ellipse(0, 0, 40, 40);

	planets.forEach(drawPlanet);
	planets.forEach(updatePlanet);

/*
	//earth
	fill('DeepSkyBlue')
	ellipse(135*cos(p3), 90*sin(p3), 17, 17);
	p3+= 0.048 * speed;

	//mars
	fill('Brown')
	ellipse(180*cos(p4), 120*sin(p4), 15, 15);
	p4+= 0.042 * speed;

	//jupiter
	fill('Khaki')
	ellipse(225*cos(p5), 150*sin(p5), 30, 30);
	p5+= 0.018 * speed;
	//jupiter's dot
	fill('Brown')
	ellipse(225*cos(p6), 150*sin(p6), 5, 5);
	p6+= 0.018 * speed;

	//saturn


	//uranus
	fill('PowderBlue')
	ellipse(330*cos(p8), 220*sin(p8), 25, 25);
	p8+= 0.023 * speed;

	//neptune
	fill('DarkSlateBlue')
	ellipse(390*cos(p9), 260*sin(p9), 25, 25);
	p9+= 0.032 * speed;
	*/
}
