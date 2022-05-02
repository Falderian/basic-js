const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let countArray = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        countArray = Math.max(this.calculateDepth(element) + 1, countArray);
      }
    })
  return countArray;
  }
}

module.exports = {
  DepthCalculator
};
