const fs = require("fs");

const entries = fs.readFileSync("input.txt", "utf8").split("\n");

let total = 0;

entries.forEach((entry) => {
  const outputVals = entry.split(' | ')[1];
  const outputSplit = outputVals.split(' ');
  outputSplit.forEach((digitsStr) => {
    if ([2, 3, 4, 7].includes(digitsStr.length)) total += 1;
  })
})

console.log(total);