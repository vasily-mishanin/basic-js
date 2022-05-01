const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  if (!date) return "Unable to determine the time of year!";
  if (
    date.toString() === "Invalid Date" ||
    typeof date !== "object" ||
    date.__proto__.constructor.name !== "Date"
  ) {
    throw new Error("Invalid date!");
  }
  let monthNumber;
  try {
    monthNumber = date.getMonth();
    monthNumber = date.getUTCMonth();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let winter = monthNumber == 11 || monthNumber == 0 || monthNumber == 1;
  let spring = 1 < monthNumber && monthNumber <= 4;
  let summer = 4 < monthNumber && monthNumber <= 7;
  let fall = 7 < monthNumber && monthNumber <= 10;
  if (winter) return "winter";
  if (spring) return "spring";
  if (summer) return "summer";
  if (fall) return "fall";
}

module.exports = {
  getSeason,
};
