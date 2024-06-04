let grid;
let cols = 100;
let rows = 100;
let cellSize;

function setup() {
  createCanvas(800, 800);
  cellSize = width / cols;
  grid = create2DArray(cols, rows);
}

function draw() {
  background(255);
  drawGrid();
}

function mousePressed() {
  let col = floor(mouseX / cellSize);
  let row = floor(mouseY / cellSize);
  
  if (col >= 0 && col < cols && row >= 0 && row < rows) {
    grid[col][row]++;
    if (grid[col][row] > 2) {
      grid[col][row] = 0;
    }
  }
}

function create2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows).fill(0);
  }
  return arr;
}

function drawGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 1) {
        fill(0);
      } else if (grid[i][j] == 2) {
        fill(150);
      } else {
        fill(255);
      }
      stroke(200);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}
