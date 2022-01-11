let fs = require("fs");

let grid = fs.readFileSync("input.txt", "utf8").split("\n").map((el) => el.split(""));

const flashOctopuses = () => {
  if (grid.every((row) => row.every((energyLevel) => energyLevel <= 9))) return grid;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 10) {
        grid[i][j] = 0;

        if (grid[i - 1]?.[j - 1] && ![0,10].includes(grid[i - 1][j - 1])) grid[i - 1][j - 1] += 1;
        if (grid[i - 1] && ![0,10].includes(grid[i - 1][j])) grid[i - 1][j] += 1;
        if (grid[i - 1]?.[j + 1] && ![0,10].includes(grid[i - 1][j + 1])) grid[i - 1][j + 1] += 1;

        if (grid[i][j - 1] && ![0,10].includes(grid[i][j - 1])) grid[i][j - 1] += 1;
        if (grid[i][j + 1] && ![0,10].includes(grid[i][j + 1])) grid[i][j + 1] += 1;

        if (grid[i + 1]?.[j - 1] && ![0,10].includes(grid[i + 1][j - 1])) grid[i + 1][j - 1] += 1;
        if (grid[i + 1] && ![0,10].includes(grid[i + 1][j])) grid[i + 1][j] += 1;
        if (grid[i + 1]?.[j + 1] && ![0,10].includes(grid[i + 1][j + 1])) grid[i + 1][j + 1] += 1;
      }
    }
  }
  return flashOctopuses(grid)
}

let numSteps = 0;
while (!grid.every((row) => row.every((energyLevel) => energyLevel === 0))) {
  numSteps += 1;
  for (let j = 0; j < grid.length; j += 1) {
    for (let k = 0; k < grid[j].length; k += 1) {
      grid[j][k] = Number(grid[j][k]) + 1;
    }
  }
  grid = flashOctopuses(grid);
}

console.log(numSteps)