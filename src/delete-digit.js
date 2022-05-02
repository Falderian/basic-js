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
	let numToString = "" + n;
	let maxNum = 0;

	for (let i = 0; i < numToString.length; i++) {
		let currentMax = numToString.replace(numToString.charAt(i), '');
		currentMax > maxNum ? maxNum = currentMax : maxNum;
	}

	return +maxNum;
}

module.exports = {
  deleteDigit
};
