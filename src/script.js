console.log("Web Launched");

const board = /** @type {HTMLCanvasElement} */ (
  document.getElementById("board")
);
if (!board) throw new Error("Canvas element with id 'board' not found");
const ctx = board.getContext("2d");

