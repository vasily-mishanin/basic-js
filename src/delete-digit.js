const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError("Not implemented");
  let max = -Infinity;
  let nArr = n.toString().split("");
  nArr.forEach((n, i) => {
    let guess;
    if (i === 0) {
      guess = nArr.slice(1).join("");
    }
    if (i === nArr.length - 1) {
      guess = nArr.slice(0, i).join("");
    }
    guess = [...nArr.slice(0, i), ...nArr.slice(i + 1)].join("");
    guess = parseInt(guess);
    max = guess > max ? guess : max;
  });
  return max;
}

module.exports = {
  deleteDigit,
};
