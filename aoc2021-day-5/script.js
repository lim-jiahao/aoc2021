const fs = require("fs");

const text = fs.readFileSync("input.txt", "utf8").split("\n").map((el) => el.replace(' -> ', ','));

const coordinates = new Array(1000);
for (let i = 0; i < coordinates.length; i += 1) {
  coordinates[i] = new Array(1000).fill(0);  
}

text.forEach((el) => {
  const [x1, y1, x2, y2] = el.split(',');
  if (x1 === x2 || y1 === y2) {
    let xLow;
    let xHigh;
    let yLow;
    let yHigh;

    yLow = Math.min(y1, y2);
    yHigh = Math.max(y1, y2);
    xLow = Math.min(x1, x2);
    xHigh = Math.max(x1, x2);

    for (let i = xLow; i <= xHigh; i += 1) {
      for (let j = yLow; j <= yHigh; j += 1)
        coordinates[i][j] += 1;
    }
  }
})

let moreThanTwo = 0;
coordinates.forEach((row) => {
  row.forEach((point) => { if (point >= 2) moreThanTwo += 1; } );
})

console.log(moreThanTwo);