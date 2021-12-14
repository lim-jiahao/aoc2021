let fs = require("fs");

let text = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((el) => el.split("-"));

let mappings = {};

text.forEach((edge) => {
  if (!mappings[edge[0]]) mappings[edge[0]] = [];
  if (!mappings[edge[1]]) mappings[edge[1]] = [];

  mappings[edge[0]].push(edge[1]);
  mappings[edge[1]].push(edge[0]);
});

let noOfPaths = 0;
let isVisited = {};
text.flat().forEach((el) => {
  if (!isVisited[el]) isVisited[el] = 0;
});
console.log(mappings);
// console.log(isVisited);

const findPath = (node, visitObj) => {
  if (node === "end") {
    noOfPaths += 1;
    return;
  }

  let isVisitedClone = { ...visitObj };
  isVisitedClone[node] = isVisitedClone[node] + 1;

  let length = Object.keys(isVisitedClone).filter(
    (el) => el === el.toLowerCase() && isVisitedClone[el] >= 2
  ).length;

  let smallCaveMax = length > 0 ? 1 : 2;
  if (
    !mappings[node].some(
      (el) => (el === el.toUpperCase()) || (el === el.toLowerCase() && isVisitedClone[el] < smallCaveMax)
    )
  ) {
    //check if it is a dead end
    return;
  }

  mappings[node].forEach((path) => {
    if (path !== "start") {
      if (path === path.toUpperCase() || isVisitedClone[path] < smallCaveMax) {
        findPath(path, isVisitedClone);
      }
    }
  });
};

findPath("start", isVisited);
console.log(noOfPaths);