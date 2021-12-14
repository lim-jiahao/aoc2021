const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split("\n");

const mappings = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
}

const points = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
}

const openings = ['(', '[', '{', '<'];
const scores = [];

lines.forEach((line) => {
  const openingArray = [];

  let isCorrupt = false;
  const chars = line.split('');
  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    if (openings.includes(char)) openingArray.push(char);
    else {
      const rightOpening = mappings[char];
      if (openingArray[openingArray.length - 1] !== rightOpening) {
        isCorrupt = true;
        break;
      } else {
        openingArray.pop();
      }
    }
  }

  if (!isCorrupt) {
    const correctClosings = openingArray.map((el) => mappings[el]).reverse();
    console.log(correctClosings);
    scores.push(correctClosings.reduce((acc, cur) => acc * 5 + points[cur], 0));
  }
}) 

scores.sort((a, b) => a - b);
console.log(scores[(scores.length - 1) / 2]);