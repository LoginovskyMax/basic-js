

// let userAnswer2 = 0
// let userAnswer3 = 0
// let nod = 0
// let answer = 0
// let end = 0
// do{
//     userAnswer2= +prompt("Введите первое число")
//     userAnswer3= +prompt("Введите второе число")
//     nod= prompt("Введите знак")
//     if(nod=="+"){answer = +userAnswer2 + +userAnswer3;console.log(answer)}
//     else
//     if(nod=="-"){answer = +userAnswer2 - +userAnswer3;console.log(answer)}
//     else
//     if(nod=="*"){answer = +userAnswer2 * +userAnswer3;console.log(answer)}
//     else{answer = +userAnswer2 / +userAnswer3;console.log(answer)}
//     end = +prompt("Введите 1 чтобы закончить")
// }while(+end != 1)
// console.log("Конец")
// Это работающий цикл

// const { green } = require("gulp-cli/lib/shared/ansi");


// function calculator(a,b,c){
//     let answer = 0
//     let userNumber = 0
//     let userNumber2 = 0
//     let userNumber3 = 0
//     do{
//     userNumber = prompt("Введите 1 число")
//     userNumber2 = prompt("Введите 2 число")
//     userNumber3 = prompt("Введите знак")
//         switch(userNumber3){
//         case "+":answer= confirm("Ответ "+ +userNumber + +userNumber2+" Продолжить?");break
//         case "*":answer= confirm("Ответ "+ +userNumber * +userNumber2 +" Продолжить?");break
//         case "-":answer=confirm("Ответ "+ +userNumber - +userNumber2 + " Продолжить?");break
//         case "/":answer= confirm("Ответ "+ +userNumber / +userNumber2 + " Продолжить?");break
//         default: answer=confirm("Продолжить?")
//     }
// }while(answer==true)
// document.write("Конец")

// тоже пытался через функцию сделать но так и не понял и как все это вставить в функцию,
// по идее нужно просто чтобы она запускалась ))


// function calculator2(a){
// let answer=0
// for(let i = 1; i<=10;i++){
//    answer = a*i ;document.write(a+" * "+i+ " = "+ answer);document.write("<br>")
// }return answer
// }
// let go = 0
// do{let userAnswer4 = prompt("Введите число от 1 до 9")
// calculator2(userAnswer4)
// go = confirm("Продолжить?")}
// while(go==true)
// document.write("Конец")

// я пытался его зациклить тоже , но почему то он выдает ответы только при выходе из цикла,почему так?

// let arr = [
//    1,
//    3,
//    [2,[3,[5]]]
// ]
// function deep(arr){
//     if(arr.length==0){return 0};
//     let res = 0;
//     for(let elem of arr){
//         if(typeof elem == "object"){
//         res+=1; 
//         res+=deep(elem);
//         }else{ res+=1;}
//     }
//     console.log(res)
//     return res
// }
// deep(arr)

function Isogram(str){
   // for(let i=0;i<str.length;i++){
   //   let char = str[i].toLowerCase()
   //   for(let j=i+1;j<=str.length;j++){
   //    if(j==str.length){
   //       break
   //    }
   //     if(char==str[j].toLowerCase()){console.log(false);return false}
   //   }
   // } 
   // return true
   return new Set(str.toLowerCase()).size == str.length;

}
// Isogram("aboasdfsfd")

//Вывод даты при вводе количества секунд
function formatDuration (seconds) {
   let year = seconds/31536000|0;
   let day = (seconds - year*31536000)/86400|0;
   let hours = (seconds- day*86400 - year*31536000)/3600|0;
   let minute =(seconds- hours*3600 - year*31536000 - day*86400 )/60|0;
   let sec = seconds%60;
   let result = '';
   switch(year){
      case 0:; break;
      case 1:if(day!=0){result+= year + " year, "}else{result+= day + " year"};break;
      default:if(day!=0){result+= year + " years, "}else{result+= hours + " years "};break;
   }
   switch(day){
      case 0:; break;
      case 1:if(hours!=0){result+= day + " day, "}else{result+= day + " day"};break;
      default:if(hours!=0){result+= day + " days, "}else{result+= day + " days"};break;
   }
   switch(hours){
      case 0: ; break;
      case 1:if(minute!=0){result+= hours + " hour, "}else{result+= hours + " hour"}
      ;break;
      default:if(minute!=0 && sec!=0){result+= hours + " hours, "}else{
         result+= hours + " hours"};break;
   }
   switch(minute){
      case 0: if(sec!=0 && hours!=0){result += " and "}; break;
      case 1:if(sec!=0){result+= minute + " minute and "}else{result+="and" + minute + " minute"};break;
      default:if(sec!=0){result+= minute + " minutes and "}else{result+="and" + minute + " minutes"};break;
   }
   switch(sec){
      case 0:; break;
      case 1:result+= sec + " second";break;
      default:result+= sec + " seconds";break;
   }
    console.log(result);
    return result
 }
 //Убрать гласные из строки
 function disemvowel(str) {
   let arr = str.split('')
    let vowels = 'euioa'
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
         if(vowels.indexOf(arr[i].toLowerCase())>-1){
            arr.splice(i,1)
         }
      }
    }
    return arr.join('');
 }
 //возарат строки с числами, выведенными столько раз какое число
 function ret(str){
   let arr = str.split('');
   let newStr = ''
   arr.forEach(element => {
      for(let i=0;i<element;i++){
         newArr+=element
      }
   });
  return newStr
 }
 
 //ЗАдача с рукопожатиями, минимальное количество человек, на ввод рукопожатия
 function getParticipants(h){
   let n = 0
   let count = 1
   while(n< h){
   count +=1
   n+=(count-1)
   }
   return count
}
//Замена букв на скобки в строке
function getString(str){
   let str2 = str
   let skobka = 0
   for(let i=0;i<str.length;i++){
      if(str[i]==')'){
            skobka=i 
            console.log(skobka);
      }
   }
   for(let i=0;i<str.length;i++){
      let count = 0
   for(let j=0;j<str2.length;j++)
     if(str[i].toLowerCase()==str2[j].toLowerCase()){
      count++
      if(count>1){
         str = str.substring(0,i)+ ')' + str.substring(i+1,str.length)
      }
    }
}
for(let i=0;i<str.length;i++){
   if(str[i]!=')'){
      str = str.substring(0,i)+ '(' + str.substring(i+1,str.length)
   }
}  
if(skobka!=0){
   str = str.substring(0,skobka)+ '(' + str.substring(skobka+1,str.length)
   console.log(skobka)
}
console.log(str)
return str
}

//числа фибоначи
function fib(num){
  if(num==1){return 0}
  let fibo1 = 1
  let fibo2 = 1
  for(let i=4;i<=num;i++){
   let fibo3 = fibo1+fibo2
   fibo1=fibo2
   fibo2=fibo3
}
return fibo2
}
//сумма делителей числа на 3 и 5
function delitel(num){
   if(num<0){return 0}
let sum = 0
for(let i=3;i<num;i++){
   if(i%3==0 || i%5==0){
      sum+=i
   }
}
console.log(sum)
return sum
}

//обрезка хвостов
function head(arr){
   return arr[0]
}
function tail(arr){
   arr.splice(0,1)
   return arr
}
function init(arr){
   arr.splice(arr.length-1,1)
   return arr
}
function last(arr){
   return arr[arr.length-1]
}
//пропущенный массив
function misArr(arr){
   lengthArr=[]
   for(let i=0;i<arr.length;i++){
      if(arr[i]==null){return 0}
      if(arr[i].length==0){return 0}else{
         lengthArr.push(arr[i].length)
      }
   }
   lengthArr.sort((a,b)=>a-b)
  for(let i=0;i<lengthArr.length;i++){
   if(lengthArr[i]+1!=lengthArr[i+1]){return (lengthArr[i]+1)

   }
  }
}
// console.log(misArr([[1,2,3,4,5],[2],[1,2,3],[1,2,3,4],]))

//разбивка по парам
function pair(arr){
   let gloves = arr.reduce((accum,element)=>{
      accum[element] = (accum[element] || 0 ) + 1
      return accum
   },{})
   let pair=0
   for(color in gloves){
      pair+=(gloves[color]/2)|0
   }
   console.log(gloves,pair)
}
// pair(['red','green','blue','red','green','red','green'])

//сортировка по битам
function sortBits(arr){
//    let sortArr = arr.reduce((accum,element)=>{
//       let counter = 0
//       let inArr = []
//       for(let i=0;i<element.toString(2);i++){
//          if(element.toString(2)[i]==1){
//             counter++
//             }}
//       inArr.push(element,counter)
//       accum.push(inArr)
//       return accum
//    },[])
//    sortArr.sort((a,b)=>{
//    if((a[1]-b[1])==0){
//       return a[0]-b[0]
//    }else{return a[1]-b[1]}
// })
//     for(let i=0;i<arr.length;i++){
//       arr[i]=sortArr[i][0]
//    }
//    return arr
   function countUnit(string){
      let counter = 0;
         for(let i = 0; i<string.length; i++){
            if(string[i]=='1'){counter++}
         }return counter;
   }
   arr.sort((num1,num2)=>{if(countUnit(num1.toString(2)) == countUnit(num2.toString(2))){
      return num1-num2
   }else{return countUnit(num1.toString(2)) - countUnit(num2.toString(2))}
   })
   console.log(arr)
   return arr
}
// sortBits([3, 8, 3, 6, 5, 7, 9, 1])

//считает самый яркий цвет в 16ричной системе
function brightest(colors){
    let newArray = colors.reduce((accum,element)=>{
      let arr2 = element.slice(1,element.length).match(/.{1,2}/g);
      let bright =Math.max( parseInt(arr2[0],16),parseInt(arr2[1],16),parseInt(arr2[2],16))
      let arr = [element,bright]
      accum.push(arr);
      return accum
   },[])
   console.log(newArray)

   newArray.sort((a,b)=>b[1]-a[1])
   console.log(newArray[0][0])
   return newArray[0][0]
}
// brightest(['#297F1C','#E383BC','#BAF917','#DC3DB6','#BA21FB'])
function recycle(array) {
   let materials = ['paper','glass','organic','plastic'];
   let simpleArr = materials.map(item=>array.filter(element=>(element.material==item||element.secondMaterial==item)))
   let answer = simpleArr.map(item=>{return item.map(element=>{return element.type})})
   return answer
 }
//  recycle([
//    {"type": "rotten apples", "material": "organic"},
//    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//    {"type": "amazon box", "material": "paper"},
//    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
//  ])

//проверяет билеты на подлинность даты и кода
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode===correctCode){
    
      if(Date.parse(currentDate)<=Date.parse(expirationDate)){
         return true
      }else{return false}
      
    }else{return false}
}
// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))

//считает количество пятниц 13 в году
function   unlyckyDay(year){
   let counter = 0;
   for(let months=0;months<12;months++){
      if(new Date(year,months,13).getDay()==5){
         counter++
      }
   }
   return counter
}
// console.log(unlyckyDay(1986));

//считает значения свойств объекста если больше 60 добавляем в массив ответов
function language(obj){
   let answer = []
for(let lang in obj){
   console.log(lang);
   if(obj[lang]>=60){
    answer.push([lang,obj[lang]])
   }
}
console.log(answer)
answer.sort((a,b)=>b[1]-a[1])
let answer2 = []
answer.forEach(item=>{
   answer2.push(item[0])
}) 
return answer2
}
// console.log(language({'ruby':10,'python':68,'js':100}));

// 4 4 1 4 1 20 1 4 =39 -2 - 4 - 4 -4 -4  = 21 не взял  -4 -4 -1
function find(obj,pass){
   let arr = pass.split('.')
   console.log(arr)
   let counter= 0
   try{let answer = arr.reduce((accum,element,i)=>{
      if(accum[element]==undefined){return undefined}
       if(Array.isArray(accum[element])){
            accum = accum[element]
       }else{
         accum = accum[element]
       }
       if(accum[element]==undefined){return undefined}
       return accum
   },obj)
   console.log(answer);
   return answer}catch{return undefined} 
}
// find({user:{name:['John',"second:'snow'"]}},'user.name.first.toString')

//Кодирование по символам
function encode(str){
let arr = str.split('');
let answer = []
let counter = 1
let letter = arr[0];
for(let i=1;i<arr.length;i++){
   let enter = arr[i]
   if(enter==letter){
   counter++
   }else{
      let inArr = [];
      inArr.push(counter,letter);
      answer.push(inArr)
      letter=enter
      counter=1;
   }
   if(i==arr.length-1){
      let inArr = [];
      inArr.push(counter,letter);
      answer.push(inArr)
   }
}
console.log(answer)
return answer
}
// encode('aaaabbccc!11')

function angleClock(date){
   console.log(new Date(date).getMinutes())
   let angleOfMins = new Date(date).getMinutes()*6;
   let angleOfHours = (new Date(date).getHours()*30) + (new Date(date).getMinutes())*0.5;
   let angleBetween = angleOfHours - angleOfMins;
  
   if(angleBetween<0){angleBetween=angleBetween*(-1)}
   let answer = 0
   if(angleBetween<360-angleBetween){
      answer=angleBetween
   }else{answer=360-angleBetween}
   if(answer<0){answer*=-1}
   if(answer>180){answer=360-answer}
   console.log(answer)
   return answer*Math.PI()/180
}
// angleClock('2022-09-13T01:00:28')

function createSecret(secret){
  let secretEl = secret;
  let obj = {
   setSecret: function(newSecret){
      secretEl = newSecret
   },
   getSecret: function(){
      return secretEl
   }
  }
  return obj
}

//математическая функция  с 2мя аргументами
let calc  = (...arg1)=>(...arg2)=>{
   let arr = [...arg1,...arg2]

   console.log(arr);
   let answer =[] 
   arr.reduce((accum,element)=>{
      return accum+=element
   },0)
   console.log(answer)
   return answer
}
// calc(1,2,3)(-5)

function conntext(context){
   let func = this;
   function NewFunc(...arg){
      let contextFor;
      if(this==global){
         contextFor = context
      }else{contextFor=this};
      return func.apply(contextFor,arg)
   }
   return NewFunc()
}
Array.prototype.Map = function(callbackFn) {
  let arr = new Array();              
  for (let i = 0; i < this.length; i++) { 
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
}
Array.prototype.Map = function(callbackFn) {
   let newArray = new Array()
   let object = Object(this)
   let context = this
   let length = this.length
   for(let i =0;i<length;i++){
      if(i in object){
        let item = this[i]
        arr.push(callbackFn(item, i, context));
      }
    }
    return newArray
}
 
 Array.prototype.filter = function (callback, thisArg = this) {
   let newArray = new Array()
   let object = Object(this)
   let context = this
   let length = object.length
   if(arguments.length >1){
     context = thisArg
   }
   for(let i =0;i<length;i++){
     if(i in object){
       let item = this[i]
       if(callback.call(context,item,i,this)){
         newArray.push(item)
       }
     }
   }
   return newArray
 }

 Array.prototype.myMap=function(callBack,object){
   const newArray= new Array();
   newArray.length=this.length;
   let context = this
   for(let i in context){
     if(isNaN(Number(i)))continue;
     newArray[i]=(callBack.apply(object,[context[i],Number(i),context]));
   }
   return newArray;
 }
  

//basic js 

function findCat(arr){
   let count = 0 ;
   arr.forEach(inarr=>{
      inarr.forEach(item=>{
if(item=='^^'){
   count++
}
      })
   })
   console.log(count);
   return count
}
// findCat([[1,2,'^^'],['^^'],[]])
//радио метод полураспада
function dateSample(activity){
   if(typeof activity!= 'string'){return false}
   let Activ = parseFloat(activity)
   if(typeof Activ == 'NaN'){console.log('da'); return false}
   if(Activ>15 || Activ<=0){return false}
   console.log(Number.isNaN(Activ) );
   let age = Math.ceil(Math.log((15/Activ))/(0.693/5730))
   console.log(age);
   return age
}
// dateSample('wooy')

function createDreamTeam(arr){
   let answerArr = []
   arr.forEach(name=>{
      if(typeof name == 'string'){
         answerArr.push(name[0].toUpperCase())
      }
   })
   if(answerArr.length>0){
      let answer = answerArr.sort().join('')
      return answer
   }else return false
}
// createDreamTeam(['max','oxy',null,'Anton'])

function getSeason(date){
   console.log(Object.getOwnPropertyNames(date));
   if(date==undefined){ console.log('invalid');return 'Unable to determinate the time of year!'}
   try{let month = date.getMonth()
      if(month==0 || month==1 || month==11){ console.log('w'); return 'Winter' }
      if(month==2 || month==3 || month==4){ console.log('s'); return 'Spring' }
      if(month==5 || month==6 || month==7){ console.log('sum'); return 'Summer' }
      if(month==8 || month==9 || month==10){ console.log('w'); return 'Autumn' }
   }
   catch(error){ throw 'Invalid date' }

// console.log(month);

}
// let date = new Date(2020,03,30)
// getSeason(date)

function calculateHanoi(diskNumber,turnsSpeed){
let turns = 2**diskNumber-1
let turnsperSecond = (turnsSpeed/3600)
let seconds = Math.floor(turns/turnsperSecond)
console.log({turns,seconds});
return {turns,seconds}

}
// calculateHanoi(9,4308)

function transform(arr){
   let answer = []
   let newArr = [...arr]
   newArr.forEach((item,index)=>{
      if(item=='--discard-next'){
         
         answer = newArr.filter((item2,index2)=>index2!=index && index2!=index+1)
         newArr.splice(index,2)
         // console.log(arr.splice(index,2));
      }
   })
      newArr.forEach((item,index)=>{
      if(item=='--discard-prev'){
         answer = newArr.filter((item2,index2)=>index2!=index && index2!=index-1)
         // arr.splice(index-1,index)
      }
   })
   newArr.forEach((item,index)=>{
      if(item=='--double-next'){
         answer = newArr.filter((item2,index2)=>index2!=index)
         if(arr[index+1]){answer.splice(index+1,0,newArr[index+1])}
         
      }
   })
   newArr.forEach((item,index)=>{
      if(item=='--double-prev'){
         answer = newArr.filter((item2,index2)=>index2!=index)
         if(arr[index-1]){ answer.splice(index-1,0,newArr[index-1])}
      }
   })
   console.log(answer);
}


let chainMaker = {
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
    try{
      if(this.answer[index-1]==undefined){this.error=true;throw new Error( "You can't remove incorrect link!");return this}
      this.answer = this.answer.filter((item,i)=>i!=(index-1))
      return this
    }
    catch(e){
      this.error=true;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.answer.reverse()
    return this
  },
  finishChain() {
    if(this.error){this.answer = []; return null}
    let ans = '';
      this.answer.forEach((item,index,array)=>{
         if(index==array.length-1){
            ans+=`(${item})`
         }else{ ans+=`(${item})~~`}
      })
      console.log(ans);
      return ans
  }
}
// chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(),
// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()



class DepthCalculator{
  calculateDepth(arrOfArr){
if(!Array.isArray(arrOfArr)){
   return 0
}
let count = 0;
for(let item of arr){
   count = Math.max(count,calculateDepth(item))
   return count + 1
}
  }
}
// let calcArr = new DepthCalculator()
// calcArr.calculateDepth([1,2,3,[[]],[]])

function repeater(str,options){
if(options.separator == 'undefined'){options.separator='+'}
if(options.additionSeparator == 'undefined'){options.additionSeparator='|'}
let additional = options.addition.toString()
for(let i =0;i<options.additionRepeatTimes-1;i++){
   additional+=options.additionSeparator+options.addition
}
let semiAnswer = str+additional;
let answer = str+additional
for(let i=0;i<options.repeatTimes-1;i++){
   answer+=options.separator+semiAnswer
}
console.log(additional);
return answer
}
repeater("string",{repeatTimes:4,separator:'**',addition:NaN,additionRepeatTimes:2,additionSeparator:'oo'})

function deleteDigit(number){
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
   console.log(Math.max.apply(null,answer));
   return Math.max.apply(null,answer)

}
// deleteDigit(959)

function getDNS(arr){
   let answer = {}
 arr.forEach(item=>{
  let element = item.split('.').reverse()
  let DNS = ''
  element.forEach(dns=>{
   DNS = `${DNS}.${dns}`
   if(answer.hasOwnProperty(DNS)){answer[DNS]++}else{
      answer[DNS]=1
   }
  })
})
console.log(answer);
return answer
}
getDNS(['epam.com', 'info.epam.com'])

function encode(str){
   let arr = str.split('');
   let answer = []
   let counter = 1
   let letter = arr[0];
   for(let i=1;i<arr.length;i++){
      let enter = arr[i]
      if(enter==letter){
      counter++
      }else{
         let inArr = [];
         inArr.push(counter,letter);
         answer.push(inArr)
         letter=enter
         counter=1;
      }
      if(i==arr.length-1){
         let inArr = [];
         inArr.push(counter,letter);
         answer.push(inArr)
      }
   }
   console.log(answer)
   return answer
   }

   function getEmailDomain(email){
      let arr = email.split('@')
      console.log(arr[1]);
   }
   // getEmailDomain('simole@example.com')

   function isMAC48Adress(string){
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
   // console.log(isMAC48Adress('00-1A-3F-85')); 

   function getMatrixSum(matrix){
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
      console.log(answer);
      return answer
   }
   // getMatrixSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]])

   function sortByHeight(arr){
      let newArr = []
      let index = []
      arr.forEach((item,i)=>{
        if(item==-1){
         index.push(i)
        }else{newArr.push(item)}
      })
      newArr.sort((a,b)=>a-b)
      for(let i = 0;i<index.length;i++){
         newArr.splice(index[i],0,-1)
      }
      return newArr
   }
   // sortByHeight([ -1, 190, 150, 160, 170, -1, -1, 180 ])

   function getSumOfDigits(number) {
      let arr = number.toString().split('')
      if(arr.length>1){
         getSumOfDigits(sumArr(arr))
      }
       function sumArr(arr){
          return newNum = arr.reduce((accum,item)=>{
          accum+=parseFloat(item)
          return accum
         },0)
       }
      if(arr.length==1){
         console.log(newNum);
         
         }
         return newNum
    }
   // console.log(getSumOfDigits(91));

   function getCommonCharacterCount(str1,str2){
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
console.log(count);
   }
   // getCommonCharacterCount('aabcc',"adcaa")

   function fileNames(arr){
    let prefix = 1
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
         if(arr[i]==arr[j]){
            arr[j]+=`(${prefix++})`
            if(prefix>2){
               prefix=1
            }
           
         }
      }
    }
    console.log(arr);
   }

   // fileNames(['doc', 'doc', 'image', 'doc(1)', 'doc'])

   class VigenereMachine{
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
      encrypt(message,key){
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

   // let vigi = new VigenereMachine(false)
   // vigi.createSquare()
   // vigi.encrypt('attack at dawn!','alphonse')
   // console.log( vigi.encrypt('attack at dawn!','alphonse'));
   // console.log(  vigi.decrypt('AEIHQX SX DLLU!','alphonse'));

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
      console.log(answer);
      return answer
    }
   //  minesweeper([
   //    [true, false, false],
   //    [false, true, false],
   //    [false, false, false],
   //  ])
