const fs = require("fs");

const text = fs.readFileSync("input.txt", "utf8").split("\n").filter((el) => el !== '');

const inputs = text.shift().split(',').map((el) => Number(el));
const boards = [];
const BOARD_SIZE = 5;

while (text.length > 0) {
  let board = text.splice(0, BOARD_SIZE);
  board = board.map((el) => el.trim().replaceAll('  ', ' ').split(' ').map((num) => Number(num)));
  boards.push(board);
}

// console.log(inputs)
// console.log(boards);

const didBoardWin = (board, input) => {
  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === input) {
        row[j] = -1;
        if (row.every((el) => el === -1) || board.every((el) => el[j] === -1)) return true;
      }
    }
  }
  return false;
}

let winningBoard;
let winningInput;
let boardsWon = [];
loop1: for (let i = 0; i < inputs.length; i += 1) {
  for (let j = 0; j < boards.length; j += 1) {
    if (!boardsWon.includes(j) && didBoardWin(boards[j], inputs[i])) {
      boardsWon.push(j);
      if (boardsWon.length === boards.length) {
        winningBoard = boards[j];
        winningInput = inputs[i];
        break loop1;
      }
    }
  }
}

winningBoard = winningBoard.flat();
const sumUnmarked = winningBoard.reduce((acc, cur) => cur !== -1 ? acc + cur : acc, 0)
console.log(sumUnmarked * winningInput);