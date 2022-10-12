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
function isMAC48Address(string) {
  let arr = string.split('-')
  let newSTR = ''
  let str = '0123456789ABCDEF'
  let answer = true
  arr.forEach(item=>{
     if(item.length!=2){answer=false}
     newSTR+=(item[0]);
     newSTR+=(item[1])
  })
  if(!answer){return false}
  for(let i=0;i<newSTR.length;i++){
     if(str.indexOf(newSTR[i])==-1){
        answer=false
     }
  }
  console.log(answer);
  console.log(newSTR);
  return answer
}
module.exports = {
  isMAC48Address
};
