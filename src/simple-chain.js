const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  answer:[],
  error:false,
  getLength() {
    return this.answer.length
  },
  addLink(value='') {
    this.answer.push(value)
    return this
  },
  removeLink(index) {
      if(this.answer[index-1]==undefined){this.answer = [];throw new Error( "You can't remove incorrect link!");return this}
      this.answer = this.answer.filter((item,i)=>i!=(index-1))
      return this
  },
  reverseChain() {
    this.answer.reverse()
    return this
  },
  finishChain() {
    let ans = '';
      this.answer.forEach((item,index,array)=>{
         if(index==array.length-1){
            ans+=`( ${item} )`
         }else{ ans+=`( ${item} )~~`}
      })
      this.answer = []
      return ans
  }
};

module.exports = {
  chainMaker
};
