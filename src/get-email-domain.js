const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  let domainRegEx = new RegExp("([\\w-]+).([\\w-])+$");
  const domain = email.match(domainRegEx)[0];
  return domain;
}

module.exports = {
  getEmailDomain,
};
