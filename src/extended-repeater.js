const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  str = "" + str;
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  let fullAddition = (addition + additionSeparator).repeat(additionRepeatTimes);
  fullAddition = fullAddition.slice(
    0,
    fullAddition.length - additionSeparator.length
  );
  let resultStr = (str + fullAddition + separator).repeat(repeatTimes);
  return resultStr.slice(0, resultStr.length - separator.length);
}

module.exports = {
  repeater,
};
