const fs = require("fs");

const fishTimers = fs.readFileSync("input.txt", "utf8").split(",").map((el) => Number(el));

const NUM_DAYS = 256;

// 9 elements -> index 0 to 8
const timerCounts = new Array(9).fill(0);

fishTimers.forEach((timer) => timerCounts[timer] += 1);

for (let i = 0; i < NUM_DAYS; i += 1) {
  const fishTimerZero = timerCounts[0];

  for (let j = 0; j < timerCounts.length; j += 1) {
    timerCounts[j] = timerCounts[j + 1];
  }
  timerCounts[6] += fishTimerZero;
  timerCounts[8] = fishTimerZero;
}

console.log(timerCounts.reduce((acc, cur) => acc + cur));