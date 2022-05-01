const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  let board = [];
  const getNumberOfMines = (m, i, j) => {
    let amount = 0;
    if (m[i - 1] && m[i - 1][j - 1] === true) amount++;
    if (m[i - 1] && m[i - 1][j] === true) amount++;
    if (m[i - 1] && m[i - 1][j + 1] === true) amount++;
    if (m[i][j - 1] === true) amount++;
    if (m[i][j + 1] === true) amount++;
    if (m[i + 1] && m[i + 1][j - 1] === true) amount++;
    if (m[i + 1] && m[i + 1][j] === true) amount++;
    if (m[i + 1] && m[i + 1][j + 1] === true) amount++;
    return amount;
  };
  for (let i = 0; i < matrix.length; i++) {
    board.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      board[i][j] = getNumberOfMines(matrix, i, j);
    }
  }
  return board;
}

module.exports = {
  minesweeper,
};
