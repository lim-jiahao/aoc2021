const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split("\n");

const mappings = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
}

const points = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}

const openings = ['(', '[', '{', '<'];
const illegalChars = [];

lines.forEach((line) => {
  const openingArray = [];

  const chars = line.split('');
  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    if (openings.includes(char)) openingArray.push(char);
    else {
      const rightOpening = mappings[char];
      if (openingArray[openingArray.length - 1] === rightOpening) openingArray.pop();
      else {
        illegalChars.push(char);
        break;
      }
    }
  }
}) 

const total = illegalChars.reduce((acc, cur) => acc + points[cur], 0);
console.log(total);