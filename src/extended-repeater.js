const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = '';
  if(options.repeatTimes === undefined) {
    return (result = `${str}${options.addition}`);
  }
  else {
    if(options.separator === undefined){
      for(let i = 0; i < options.repeatTimes; i++) {
        result += `${str}+`;
      }
      return result.slice(0, -1);
    }
    else {
      for(let i = 0; i < options.repeatTimes; i++) {
        if(options.addition === undefined) options.addition = '';
        result += `${str}${options.addition}${options.separator}`;
      }
      return (result.slice(0, -(options.separator.length)));
    }
  }
}

module.exports = {
  repeater
};
