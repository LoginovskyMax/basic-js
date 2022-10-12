const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let answer = []
  matrix.forEach((item,index,matr)=>{
     let arr = []
     for(let j=0;j<item.length;j++){
        let count = 0
        if(item[j+1]){
           count++
        }
        if(item[j-1]){
           count++
        }
        if(matr[index-1]!=undefined){
           if(matr[index-1][j+1]){
              count++
           }
           if(matr[index-1][j-1]){
              count++
           }
           if(matr[index-1][j]){
              count++
           }
        }
        if(matr[index+1]!=undefined){
           if(matr[index+1][j+1]){
              count++
           }
           if(matr[index+1][j-1]){
              count++
           }
           if(matr[index+1][j]){
              count++
           }
        }
        arr.push(count)
     }
     answer.push(arr)
  })
  return answer
}

module.exports = {
  minesweeper
};
