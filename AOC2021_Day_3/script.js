let fs = require("fs");

var text = fs.readFileSync("input.txt", "utf8").split("\n");
console.log(text);

let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < text.length; i += 1) {
  for (let j = 0; j < checker.length; j += 1) {
    let val = text[i][j] === "1" ? 1 : -1;
    checker[j] += val;
  }
}

let rawBin = checker.map((el) => (el > 0 ? 1 : 0));
let gamma = parseInt(rawBin.join(""), 2);
let rawBinE = checker.map((el) => (el > 0 ? 0 : 1));
let epsilon = parseInt(rawBinE.join(""), 2);
console.log(gamma * epsilon);
