const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file", file(1)],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  let resultNames = [];
  for (let i = 0; i < names.length; i++) {
    if (resultNames.includes(names[i])) {
      let k = 0;
      for (let j = 0; j < i; j++) {
        if (names[j] === names[i]) {
          k++;
        }
      }
      if (k === 0) {
        k = 1;
      }
      resultNames.push(names[i] + `(${k})`);
    } else {
      resultNames.push(names[i]);
    }
  }
  return resultNames;
}

module.exports = {
  renameFiles,
};
