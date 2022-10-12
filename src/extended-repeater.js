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
  if(typeof options.separator == 'undefined'){options.separator='+'}
  if(typeof options.additionSeparator == 'undefined'){options.additionSeparator='|'}
  if(typeof options.addition == 'undefined'){options.addition=''}
  if(options.addition == null){options.addition='null'}
  let additional = options.addition
  for(let i =0;i<options.additionRepeatTimes-1;i++){
     additional+=options.additionSeparator+options.addition
  }
  let semiAnswer = str+additional;
  let answer = str+additional
  for(let i=0;i<options.repeatTimes-1;i++){
     answer+=options.separator+semiAnswer
  }
  return answer
}

module.exports = {
  repeater
};
