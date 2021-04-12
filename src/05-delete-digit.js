/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let min = 1000;
  const array = n.toString().split('');
  for (let i = 0; i < array.length; i++) {
    if (+array[i] < min) {
      min = +array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (+array[i] === min) {
      array.splice(i, 1);
    }
  }

  return +array.join('');
}

module.exports = deleteDigit;
