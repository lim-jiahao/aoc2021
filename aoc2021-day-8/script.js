const fs = require("fs");

const entries = fs.readFileSync("input.txt", "utf8").split("\n");

let total = 0;

// Returns boolean, if letters is a subset of str
const isSubsetOf = (str, letters) => letters.split('').every((letter) => str.includes(letter));

entries.forEach((entry) => {
  const mappings = new Array(10).fill('');
  let patterns = entry.replace(' | ', ' ').split(' ');
  patterns = patterns.map((digitsStr) => digitsStr.split('').sort().join(''));
  const output = patterns.splice(-4, 4);
  
  // Unique lengths
  mappings[1] = patterns.find((el) => el.length === 2);
  mappings[7] = patterns.find((el) => el.length === 3);
  mappings[4] = patterns.find((el) => el.length === 4);
  mappings[8] = patterns.find((el) => el.length === 7);

  // Find 3, the only 5-segment where 1 is a subset
  mappings[3] = patterns.find((el) => el.length === 5 && isSubsetOf(el, mappings[1]));
  
  // Find 6, the only 6-segment where 1 is NOT a subset
  mappings[6] = patterns.find((el) => el.length === 6 && !isSubsetOf(el, mappings[1]));

  // Find 5, the only 5-segment which itself is a subset of 6
  mappings[5] = patterns.find((el) => el.length === 5 && isSubsetOf(mappings[6], el));

  // Find 2, the last remaining 5-segment
  mappings[2] = patterns.find((el) => el.length === 5 && el !== mappings[5] && el !== mappings[3]);

  // Find 9, the only 6-segment where 4 is a subset
  mappings[9] = patterns.find((el) => el.length === 6 && isSubsetOf(el, mappings[4]));

  // Find 0, the last pattern not in mappings
  mappings[0] = patterns.find((el) => !mappings.includes(el));

  total += Number(output.reduce((acc, cur) => acc + mappings.indexOf(cur).toString(), ''));
})

console.log(total);