const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let answerArr = []
  if(Array.isArray(arr)){
    arr.forEach(name=>{
      if(typeof name == 'string'){
         answerArr.push(name.split(' ').join('')[0].toUpperCase())
      }
   })
   if(answerArr.length>0){
      let answer = answerArr.sort().join('')
      return answer
   }else return false
  }else{return false}

}

module.exports = {
  createDreamTeam
};
