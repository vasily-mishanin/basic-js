const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (
    sampleActivity === "" ||
    sampleActivity === " " ||
    sampleActivity === " \n\t\r"
  )
    return false;
  if (!sampleActivity) return false;
  if (typeof Number(sampleActivity) !== "number") return false;
  // if (!Number.isInteger(Math.ceil(Number(sampleActivity)))) return false;
  // if (typeof parseInt(sampleActivity) !== "number") return false;
  if (isNaN(Number(sampleActivity))) return false;
  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity <= 0 || sampleActivity > 15) return false;
  const ln2 = 0.693;
  const k = ln2 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
}

module.exports = {
  dateSample,
};
