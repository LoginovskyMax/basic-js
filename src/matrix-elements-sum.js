const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix.forEach((item,index)=>{
    item.forEach((number,index2)=>{
       if(number==0){
          for(let i=index+1;i<matrix.length;i++){
            (matrix[i].splice(index2,1,0)) 
          }
       }
    })
 })
 let answer = matrix.reduce((accum,element)=>{
    element.forEach(item=>{
       accum+=item
    })
    return accum
 },0)
  return answer
}

module.exports = {
  getMatrixElementsSum
};
