const { NotImplementedError } = require('../extensions/index.js');

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
  str = n.toString(10).split('').map(int => parseInt(int, 10));
  let maxNum = 0;
  let res = 0;
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < str.length; i++) {
      res = ''+str[i]+str[j];
      res = parseInt(res);
      if(res >= maxNum) maxNum = res;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
