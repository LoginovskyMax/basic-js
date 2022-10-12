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
function deleteDigit(number) {
  let arr = number.toString().split('')
   function returnNum(index,arr){
      let newArr = [...arr]
      newArr.splice(index,1)
      let num = parseFloat(newArr.join(''))
     return num
   }
   let answer = []
   for(let i=0;i<arr.length;i++){
      answer.push(returnNum(i,arr))
   }
   return Math.max.apply(null,answer)
}

module.exports = {
  deleteDigit
};
