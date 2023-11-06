let gravity;
let systems = [];

function setup() {
  createCanvas(200, 300);
  gravity = createVector(0, 0.05);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.add(gravity);
    s.run();
  }
}

//마우스y 축변경
function mouseClicked() {
  let mpos = createVector(mouseX, height + 10);
  let s = new ParticleSystem(mpos);
  systems.push(s);
}