const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let answer = ''
  let counter = 1
  let letter = arr[0];
  for(let i=1;i<arr.length;i++){
     let enter = arr[i]
     if(enter==letter){
     counter++
     }else{
        let inArr = [];
        inArr.push(counter,letter);
        answer+= inArr.join('')
        letter=enter
        counter=1;
     }
     if(i==arr.length-1){
        let inArr = [];
        inArr.push(counter,letter);
        answer+=inArr.join('')
     }
  }
  let newAnsw = ''
  for(let i=0;i<answer.length;i++){
   if(answer[i]!=1){newAnsw+=answer[i]}
  }
  return newAnsw
}

module.exports = {
  encodeLine
};
