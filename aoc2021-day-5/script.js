const fs = require("fs");

const text = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((el) => el.replace(" -> ", ","));

const coordinates = new Array(1000);
for (let i = 0; i < coordinates.length; i += 1) {
  coordinates[i] = new Array(1000).fill(0);
}

text.forEach((el) => {
  const [x1, y1, x2, y2] = el.split(",").map((el) => Number(el));

  let xUp = true;
  let yUp = true;
  if (x1 > x2) xUp = false;
  if (y1 > y2) yUp = false;

  for (let i = 0; i <= Math.abs(x1 - x2); i += 1) {
    for (let j = 0; j <= Math.abs(y1 - y2); j += 1) {
      if (x1 === x2 || y1 === y2 || i === j) {
        const x = xUp ? x1 + i : x1 - i;
        const y = yUp ? y1 + j : y1 - j;
        coordinates[x][y] += 1;
      }
    }
  }
});

let moreThanTwo = 0;
coordinates.forEach((row) => {
  row.forEach((point) => { if (point >= 2) moreThanTwo += 1; });
});

console.log(moreThanTwo);
