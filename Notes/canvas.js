console.log("Web Launched");

const board = /** @type {HTMLCanvasElement} */ (
  document.getElementById("board")
);
if (!board) throw new Error("Canvas element with id 'board' not found");
const ctx = board.getContext("2d");

// Rectangles
ctx.fillStyle = "rgba(86, 236, 116, 0.51)";
ctx.fillRect(0, 0, 300, 50);

ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(0, 100, 30, 30);

// Lines
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();

// Circles
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "pink";
ctx.fill();

// Text
ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Hello World", 50, 50);

ctx.clearRect(0, 0, board.width, board.height); // Clears the canvas, useful for animation.

// Animation loop (redraw everything each frame)
let x = 0;
function gameLoop() {
  ctx.clearRect(0, 0, board.width, board.height);

  ctx.fillStyle = "pink";
  ctx.fillRect(x, 50, 30, 30);

  x += 2; // Move the rectangle to the right
  requestAnimationFrame(gameLoop); // Call this function again on
}

// requestAnimationFrame(gameLoop); // Start the animation loop. This will call gameLoop() over and over again

// Keyboard Input
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") console.log("UP!");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") console.log("DOWN!");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") console.log("LEFT!");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") console.log("RIGHT!");
});

// Grid Setup 
// const box = 20;
// const snake = [{ x: 5 * box, y: 5 * box }];

// ctx.fillRect(snake[0].x, snake[0].y, box, box);