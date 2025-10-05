# Notes

## 1. What is the Canvas?

The `<canvas>` is an HTML element used to draw **graphics**, like:

- shapes, lines, and text
- images and sprites
- animations and even full 2D games

Think of it as an **empty drawing board** — and **JavaScript is your paintbrush**.

---

## 2. The Setup

In HTML:

```html
<canvas id="game" width="400" height="400"></canvas>
```

In JS:

```js
const canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("game")
);
const ctx = canvas.getContext("2d");
```

- `canvas` → name for the HTML element
- `getContext("2d")` → gives you a **2D drawing context**, stored in `ctx`
  (you can also use `"webgl"` for 3D, but for now we only need 2D)

---

## 3. Understanding `ctx` (CanvasRenderingContext2D)

Think of `ctx` as your **artist’s hand** — every drawing command happens through it.

> Note: `ctx` is just a variable name, you can name it anything you like.

```js
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

🟥 This draws a red square starting at `(50,50)` with width & height `100`.

---

## 4. Basic Drawing Commands

### 🔹 Rectangles

```js
ctx.fillStyle = "blue";
ctx.fillRect(x, y, width, height); // Filled rectangle

ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.strokeRect(x, y, width, height); // Outlined rectangle
```

### 🔹 Lines

```js
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();
```

### 🔹 Circles

```js
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "green";
ctx.fill();
```

### 🔹 Text

```js
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello!", 50, 50);
```

### 🔹 Clear part of the screen

```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

(This is what you’ll use every frame in your game loop.)

---

## 5. Making Things Move (Animation Loop)

The secret: **redraw everything each frame**.
You use `requestAnimationFrame()` for smooth animation.

Example:

```js
let x = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear screen

  ctx.fillStyle = "lime";
  ctx.fillRect(x, 50, 50, 50); // draw moving box

  x += 2; // move right
  requestAnimationFrame(gameLoop); // repeat
}

gameLoop();
```

This is how you’ll move your snake, food, etc.

---

## 6. Keyboard Input

You’ll need to track keys:

```js
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
```

In your game loop, you’ll move the snake based on direction.

---

## 7. Grid-based Games (like Snake)

Canvas doesn’t force a grid, but you can create one:

```js
const box = 20;
const snake = [{ x: 5 * box, y: 5 * box }];

ctx.fillRect(snake[0].x, snake[0].y, box, box);
```

When moving:

- increase/decrease `x` or `y` by `box` size
- redraw each frame
- check collision with wall or self

---

## 8. Useful Canvas Methods (Quick Reference)

| Method                       | Purpose                             |
| ---------------------------- | ----------------------------------- |
| `fillRect(x, y, w, h)`       | Draw filled rectangle               |
| `strokeRect(x, y, w, h)`     | Draw rectangle outline              |
| `clearRect(x, y, w, h)`      | Clear area                          |
| `beginPath()`                | Start drawing shape                 |
| `moveTo(x, y)`               | Move drawing cursor                 |
| `lineTo(x, y)`               | Draw line                           |
| `arc(x, y, r, start, end)`   | Draw circle/arc                     |
| `fill()`                     | Fill current shape                  |
| `stroke()`                   | Outline current shape               |
| `drawImage(img, x, y, w, h)` | Draw an image/sprite                |
| `fillText(text, x, y)`       | Draw text                           |
| `measureText(text)`          | Get text width                      |
| `translate(x, y)`            | Move coordinate system              |
| `rotate(angle)`              | Rotate drawing                      |
| `save()` / `restore()`       | Save/restore state (for transforms) |

---

## 9. Canvas Coordinates

- Top-left corner = `(0, 0)`
- X increases → right
- Y increases → down

Example:

```
(0,0)------> x
  |
  |
  v
  y
```

---

## 10. How this applies to your Snake game

| Component  | Canvas Task                                  |
| ---------- | -------------------------------------------- |
| Snake body | Draw rectangles                              |
| Food       | Draw small square or circle                  |
| Movement   | Change x/y each frame                        |
| Score      | Use `ctx.fillText()`                         |
| Game loop  | `requestAnimationFrame()` or `setInterval()` |
| Collision  | Compare positions in grid                    |

---

## Pro Tip

Your entire snake game will follow this simple cycle:

```js
update(); // move snake, check collisions, etc.
draw(); // clear + draw snake + food + score
requestAnimationFrame(gameLoop);
```

That’s literally 90% of 2D game logic!

---
