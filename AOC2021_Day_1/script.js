let fs = require("fs");

var text = fs
  .readFileSync("test.txt", "utf8")
  .split("\r\n")
  .map((el) => Number(el));
console.log(text);
let total = 0;
let sum = text.reduce((accum, curr, index) => {
  if (accum < curr) {
    total += 1;
  }
  return curr;
});

console.log(total);
