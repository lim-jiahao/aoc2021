const fs = require("fs");

const positions = fs.readFileSync("input.txt", "utf8").split(",").map((el) => Number(el));

const min = Math.min(...positions);
const max = Math.max(...positions);

let curOptimalPos = -1;
let curOptimalFuel = Infinity;
for (let i = min; i <= max; i += 1) {
  const outcome = positions.reduce((acc, cur) => {
    const n = Math.abs(cur - i);
    return acc + n * (n + 1) / 2;
  }, 0);

  if (outcome <= curOptimalFuel) {
    curOptimalPos = i;
    curOptimalFuel = outcome;
  }
  else break;
}

console.log(curOptimalPos, curOptimalFuel);