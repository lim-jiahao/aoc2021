let fs = require("fs");

var text = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((el) => el.split(" "));
console.log(text);

let x = 0;
let y = 0;
let aim = 0;

text.forEach((element) => {
  if (element[0] === "forward") {
    x += Number(element[1]);
  } else if (element[0] === "up") {
    y -= Number(element[1]);
  } else {
    y += Number(element[1]);
  }
});

console.log(x);

console.log(y);
let result = x * y;
console.log(result);
