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
  const mass = email.split('');
  const arr = [];
  let i = mass.length;
  while (mass[i] !== '@') {
    arr.push(mass[i]);
    i--;
  }
  return arr.reverse().join('');
}
module.exports = getEmailDomain;
