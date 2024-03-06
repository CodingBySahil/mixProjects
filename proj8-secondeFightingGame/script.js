// here I stored the canvas of html
const canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 576;

// here we declare c for storing the canvas having 2d graphics
const c = canvas.getContext("2d");
// this will fill the c by default color black with 0 and 0 position and same width and height as canvas
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;
// here we create a sprite class
class sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }
  ubdate() {
    this.draw()
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        this.velocity.y = 0
    }else this.velocity.y += gravity

    
  }
}

// here we draw the player rectangle
const player = new sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
});

// here we draw the enemy rectangle
const enemy = new sprite({
  position: { x: 400, y: 100 },
  velocity: { x: 0, y: 0 },
});

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.ubdate()
  enemy.ubdate()
}
animate();
