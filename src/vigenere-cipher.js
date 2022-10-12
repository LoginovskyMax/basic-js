const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direction
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  square = []
  constructor(direction=true){
     this.direction = direction
   }
  createSquare(){
     for(let i = 0; i<this.alphabet.length;i++){
        let row = this.alphabet.slice(i)
        row += this.alphabet.slice(0,i)
        this.square.push(row)
     }
  }
  encrypt(message,key) {
    if(message==undefined || key==undefined){throw new Error('Incorrect arguments!')}
    let answer = ''
    let newKey = ''
    let j=0
    for(let i=0;i<message.length;i++){
       if(j>key.length-1){j=0}
       if(this.alphabet.indexOf(message[i].toUpperCase())!=-1){
          newKey+=key[j++]
       }else{ newKey+=' '}
    }
    this.createSquare()
    for(let i = 0;i<message.length;i++){
       if(this.alphabet.indexOf(message[i].toUpperCase())!=-1){
          let column = this.alphabet.indexOf(message[i].toUpperCase())
          let row = this.alphabet.indexOf(newKey[i].toUpperCase())
          answer+=this.square[column][row]
       }else{ answer+=message[i]}
    }
    if(this.direction){
       return answer
    }else{ return answer.split('').reverse().join('')}
  }
  decrypt(message,key){
    if(message==undefined || key==undefined){throw new Error('Incorrect arguments!')}
    let answer = ''
    let newKey = ''
    let j=0
    for(let i=0;i<message.length;i++){
       if(j>key.length-1){j=0}
       if(this.alphabet.indexOf(message[i].toUpperCase())!=-1){
          newKey+=key[j++]
       }else{ newKey+=message[i]}
    }
    this.createSquare()
    for(let i = 0;i<message.length;i++){
       if(this.alphabet.indexOf(newKey[i].toUpperCase())!=-1){
          let column = this.alphabet.indexOf(newKey[i].toUpperCase())
          let row = this.square[column].indexOf(message[i].toUpperCase())
          answer+=this.alphabet[row]
       }else{ answer+=newKey[i]}
    }
     if(this.direction){
       return answer
     }else{ return answer.split('').reverse().join('')}
  }
}

module.exports = {
  VigenereCipheringMachine
};
