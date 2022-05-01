const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  // throw new NotImplementedError('Not implemented');
  const countCatsInRow = (row) =>
    row.reduce((a, c) => (c == "^^" ? ++a : a), 0);
  return cats.reduce((amount, currentRow) => {
    return amount + countCatsInRow(currentRow);
  }, 0);
}

module.exports = {
  countCats,
};
