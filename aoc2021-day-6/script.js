const fs = require("fs");

let fishTimers = fs.readFileSync("input.txt", "utf8").split(",").map((el) => Number(el));

const NUM_DAYS = 80;

const passOneDay = (arr) => {
  let fishToAdd = 0;
  arr = arr.map((timer) => {
    if (timer === 0) {
      timer = 6;
      fishToAdd += 1;
    } else timer -= 1;

    return timer;
  });

  for (let i = 0; i < fishToAdd; i += 1) {
    arr.push(8);
  }
  return arr;
}

for (let i = 0; i < NUM_DAYS; i += 1) {
  fishTimers = passOneDay(fishTimers);
}

console.log(fishTimers.length);