const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  //throw new NotImplementedError("Not implemented");
  let DNSStats = {};
  domains = domains.map((d) => "." + d.split(".").reverse().join(".")); // . + reverse
  for (let d of domains) {
    while (d !== "") {
      if (DNSStats[d]) {
        DNSStats[d] ? (DNSStats[d] += 1) : (DNSStats[d] = 1);
      } else if (!DNSStats[d]) {
        DNSStats[d] = 1;
      }
      d = d.split(".");
      d.pop();
      d = d.join(".");
    }
  }
  return DNSStats;
}
module.exports = {
  getDNSStats,
};
