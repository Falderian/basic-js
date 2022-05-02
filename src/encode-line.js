const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = '';
  let letterCount = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      letterCount = letterCount + 1;
      continue;
    }
    
    letterCount > 1 ? (result += `${letterCount}${str[i]}`) : (result += `${str[i]}`);

    str = str.substr(i);
    letterCount = 1;
    i = 0;
  }
  return result;
}

module.exports = {
  encodeLine
};
