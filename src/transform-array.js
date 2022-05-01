const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const a = [...arr].filter((elem) => elem && elem !== undefined);
  let discarded = false;
  for (let i = 0; i <= a.length - 1; i++) {
    if (discarded && (a[i] === "--double-prev" || a[i] === "--discard-prev")) {
      a.splice(i, 1);
      i--;
      discarded = null;
    }
    if (a[i] === "--discard-prev") {
      if (i > 0) {
        a.splice(i - 1, 2);
        i -= 2;
      }
      if (i === 0) {
        a.splice(i, 1);
        i--;
      }
    }

    if (a[i] === "--discard-next") {
      a.splice(i, 2);
      discarded = true;
      i--;
    }

    if (a[i] === "--double-prev") {
      if (i > 0) {
        a.splice(i, 1, a[i - 1]);
      }
      if (i === 0) {
        a.splice(i, 1);
        i--;
      }
    }

    if (a[i] === "--double-next") {
      if (i === a.length - 1) {
        a.splice(a.length - 1, 1);
        i--;
      } else {
        let next = a[i + 1];
        if (!next || next == undefined) {
          a.splice(i, 1);
          i--;
        } else {
          a.splice(i, 1, next);
        }
      }
    }
  }
  return a;
}

module.exports = {
  transform,
};
