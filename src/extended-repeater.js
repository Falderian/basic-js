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
  str = str + '';

  let result = '';
  if (options) { 
    if (!(options.separator)) {options.separator = '+';}
    if (!(options.additionSeparator)) { options.additionSeparator = '|'; }
    if(options.addition !== undefined) {options.addition = String(options.addition);
      if(options.additionRepeatTimes) {let add2 = `${options.addition}${options.additionSeparator}`;
        result  = str + add2.repeat(options.additionRepeatTimes - 1) + (`${options.addition}`);
      } else result = str + options.addition;
      if(options.repeatTimes) {
        let rep = result + options.separator;
        result = rep.repeat(options.repeatTimes - 1)+ result;
      }
    } else {
      if(options.repeatTimes > 1) {
        let rep = str + options.separator;
        result = rep.repeat(options.repeatTimes - 1)+ str;
      } else result = str;
    }
  }
  else {
    result = str;
  }
  return result;

}

module.exports = {
  repeater
};
