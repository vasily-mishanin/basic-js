const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented'); //daabccab
  let amount = 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let prev = str[i - 1],
      current = str[i],
      next = str[i + 1];
    if (current === prev) {
      amount++;
      if (current !== next) {
        result += amount + current;
        amount = 1;
      }
    }
    if (current !== prev && current !== next) {
      result += current;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
