const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let arrayOfSymbols = n.split('-').join('').split('');
  
  for (let i = 0; i < n.length; i++) {
    const element = arrayOfSymbols[i];
        
    if (Number.isInteger(+element)) {
      if (element < 0 || element > 9) return false;
    }

    else if (typeof element === 'string') {
       if (element.charCodeAt() < 65 || element.charCodeAt() > 70) {
        return false;
      }

    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
