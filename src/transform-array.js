const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){throw new Error("\'arr\' parameter must be an instance of the Array!");}
  let answer = []
   let newArr = [...arr]
   newArr.forEach((item,index)=>{
      if(item=='--discard-next'){
        if(newArr[index+2]=='--double-prev' || newArr[index+2]=='--discard-prev'){
          newArr.splice(index,3)
          answer=newArr
        }else{
          answer = newArr.filter((item2,index2)=>index2!=index && index2!=index+1)
        }
      }
   })
   newArr.forEach((item,index)=>{
    if(item=='--double-next'){
      if(newArr[index+2]=='--double-prev' || newArr[index+2]=='--discard-prev'){
        newArr.splice(index+1,0,newArr[index+1],newArr[index+1])
        newArr = newArr.filter((item2,index2)=>index2!=index && index2!=index+2)
        answer = newArr
      }else{
        answer = newArr.filter((item2,index2)=>index2!=index)
        if(newArr[index+1]){answer.splice(index+1,0,newArr[index+1])}
       
      }
    }
 })
      newArr.forEach((item,index)=>{
      if(item=='--discard-prev'){
   
         answer = newArr.filter((item2,index2)=>index2!=index && index2!=index-1)
         newArr.splice(index-1,index)
      }
   })

   newArr.forEach((item,index)=>{
      if(item=='--double-prev'){
         answer = newArr.filter((item2,index2)=>index2!=index)
         if(newArr[index-1]){ answer.splice(index-1,0,newArr[index-1])}
      }
   })
  if(answer.length==0){
    return arr
  }else{
    return answer
  }

}

module.exports = {
  transform
};
