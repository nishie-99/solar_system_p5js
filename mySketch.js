var speed = 1;
var planets;
var stars;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	stars = []
	createStars()
	mercury = {colour:'White', radius:10, phase:5, distance:30, orbitSpeed:0.02}
	venus = {colour:'Orange', radius:15, phase:5, distance:60, orbitSpeed:0.03}
	earth = {colour:'Blue', radius:17, phase:8, distance:85, orbitSpeed:0.006}
	mars = {colour:'Brown', radius:12, phase:3, distance:100, orbitSpeed:0.0035}
	jupiter = {colour:'Khaki', radius:30, phase:9, distance:155, orbitSpeed:0.0042, }
	saturn = {colour:'LightGoldenRodYellow', radius:25, phase:5, distance:200, orbitSpeed:0.014, customDraw: drawSaturn}
	uranus = {colour:'PowderBlue', radius:22, phase:8, distance:230, orbitSpeed:0.0055}
	neptune = {colour:'DarkSlateBlue', radius:22, phase:2, distance:260, orbitSpeed:0.0069}
	planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
}

function drawStar(s) {
	if (random() >= 0.93){
		//do nothing
	} else {
		fill('white');
		ellipse(s.x, s.y, s.r, s.r)
	}
}

function createStars(){
	for (var i = 0; i <= 200; i++){
		var s = {x: random(0, windowWidth), y: random(0, windowHeight), r: random(1, 5)}
		stars.push(s)
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

function drawJupiter(p){
		basicEllipse(p);
		fill('Red')
		ellipse(p.distance * 1.5 * cos((p.phase + 1)), p.distance*sin((p.phase + 1)), p.radius/5, p.radius/5);
}

function drawSaturn(p) {
	basicEllipse(p);
	fill('Peru')
	ellipse(p.distance * 1.5 * cos(p.phase), p.distance*sin(p.phase), p.radius * 2, p.radius*0.4);
}


function draw() {
	speed = (mouseX + mouseY)/500;
	background(0);
	stars.forEach(drawStar)
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
