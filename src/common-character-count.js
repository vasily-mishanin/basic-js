const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  let letters = {};
  let amount = 0;
  for (let c1 of s1) {
    letters[c1] ? letters[c1]++ : (letters[c1] = 1);
  }
  for (let c2 of s2) {
    if (letters[c2] > 0) {
      amount++;
      letters[c2]--;
    }
  }
  return amount;
}

module.exports = {
  getCommonCharacterCount,
};
