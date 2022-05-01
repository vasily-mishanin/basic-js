const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The re[-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  let ridOfNegative = arr.filter((el) => el > -1);
  let sorted = ridOfNegative.sort((a, b) => a - b);
  let result = [];
  for (let el of arr) {
    if (el === -1) {
      result.push(el);
    } else {
      result.push(sorted.shift());
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
