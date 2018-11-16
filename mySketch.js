var speed = 1;
var planets;
var stars;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	stars = []
	createStars()
	mercury = {colour:'White', radius:10, phase:5, distance:30, orbitSpeed:0.048}
	venus = {colour:'Orange', radius:15, phase:5, distance:60, orbitSpeed:0.035}
	earth = {colour:'Blue', radius:17, phase:8, distance:85, orbitSpeed:0.03}
	mars = {colour:'Brown', radius:12, phase:3, distance:100, orbitSpeed:0.024}
	jupiter = {colour:'Khaki', radius:30, phase:9, distance:155, orbitSpeed:0.013, }
	saturn = {colour:'LightGoldenRodYellow', radius:25, phase:5, distance:200, orbitSpeed:0.01, customDraw: drawSaturn}
	uranus = {colour:'PowderBlue', radius:22, phase:8, distance:230, orbitSpeed:0.007}
	neptune = {colour:'DarkSlateBlue', radius:22, phase:2, distance:260, orbitSpeed:0.005}
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
}
