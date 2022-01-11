let fs = require("fs");

let map = fs
  .readFileSync("test.txt", "utf8")
  .split("\n")
  .map((el) => el.split(""));

const RIGHT = '>';
const DOWN = 'v';
const EMPTY = '.';

const makeStep = () => {
  const moveRight = [];
  const moveDown = [];
  for (let i = 0; i < map.length; i += 1) {
    const row = map[i];
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === RIGHT && row[(j + 1) % row.length] === EMPTY) moveRight.push([i, j]);
    }
  }

  for (let i = 0; i < moveRight.length; i += 1) {
    const [row, col] = moveRight[i];
    const elRight = (col + 1) % map[row].length;
    map[row][col] = EMPTY;
    map[row][elRight] = RIGHT;
  }
  
  for (let i = 0; i < map.length; i += 1) {
    for (let j = 0; j < map[i].length; j += 1) {
      if (map[i][j] === DOWN && map[(i + 1) % map.length][j] === EMPTY) moveDown.push([i, j]);
    }
  }
  
  for (let i = 0; i < moveDown.length; i += 1) {
    const [row, col] = moveDown[i];
    const elDown = (Number(row) + 1) % map.length;
    map[row][col] = EMPTY;
    map[elDown][col] = DOWN;
  }
  return moveRight.length > 0 || moveDown.length > 0;
}

let steps = 0;
while (makeStep()) {
  steps += 1;
}
console.log(steps + 1);