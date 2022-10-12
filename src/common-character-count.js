const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1,str2) {
  let count = 0 
  function strToObject(str){
     let arr = str.split('')
     let object = arr.reduce((accum,element)=>{
        accum[element] = (accum[element] || 0 ) + 1
        return accum
     },{})
     return object
  }
  let object1 = strToObject(str1)
  let object2 = strToObject(str2)
  for(let item in object1){
     for(let item2 in object2){
        if(item==item2){
           count+=Math.min(object1[item],object2[item2])
        }
     }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
