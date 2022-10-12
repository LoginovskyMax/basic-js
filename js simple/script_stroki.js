// Количество слов в предложении
// function slov(a){
//     let z = a.split(" ")
//     let counter = 0
//     for(let i = 0;i<z.length;i++){
//           counter ++ 
//     }
//     return counter  
// }
// let t = slov("Ехали медведи,100% бесплатно");
// document.write(t)

//самое длинное слово в предложении
// function maxLength(a){
//     let z = a.split(" ")
//     let counter = 0
//     let max = z[0].length
//     for(let i = 0;i<z.length;i++){
//       if(max<z[i].length ){
//           max=z[i].length
//       }
//     }
//     let answer = 0
//     for(let i = 0;i<z.length;i++){
//         if(max=z[i].length ){
//             answer =i
//         }
//       } return "самое длинное слово" + z[answer]
// }
// let t = maxLength("Ехали медведи 100% бесплатно програмирование");
// document.write(t)

// Средняя длина слова в предложении
// function averageLength(a){
//     let z = a.split(" ")
//     let answer = 0
//     let counter = 0
//     for(let i = 0;i<z.length;i++){
//         answer += z[i].length
//         counter++
//     }
//  return "средняя длина слова = " + answer/counter
// }
// let t = averageLength("Ехали медведи на велосипеде за програмированием");
// document.write(t)


// Индексы повторяющегося символа
// function indexOfSimvol(a,b){
//     let simvol = b
//     let counter = 0
//     a = a.toLowerCase()
//     for(let i = 0;i<a.length;i++){
//         if(a[i]==b){
//             document.write(i)
//             document.write("<br>")
//             counter++ 
//         }
//     }return "столько раз встречается "+ counter
// }
// let t = indexOfSimvol("Ехали медведи на велосипеде за програмированием","е");
// document.write(t)

// Статистика строки
// function statistics(a){
//     let letter = "йцукенгшщзхъфывапролджэячсмитьбю"
//     let number = "1234567890"
//     let symvol = "!@#$%^&*()_+?<>: "
//     let counterLetter = 0
//     let counterNumber = 0
//     let counterSymvol = 0
//     a = a.toLowerCase()
//     for(let i = 0;i<a.length;i++){
//         let indexLetter = letter.indexOf(a[i])
//         if(indexLetter>=0){
//         counterLetter++
//         }
//         let indexNumber = number.indexOf(a[i])
//         if(indexNumber>=0){
//             counterNumber++
//             }
//         let indexSymvol = symvol.indexOf(a[i])
//         if(indexSymvol>=0){
//             counterSymvol++ }
//     }return `Количество букв =  ${counterLetter} <br> Количество цифр = ${ counterNumber} <br> Количество знаков = ${+ counterSymvol}`
// }
// let t = statistics("Ехали 6 медведей на 1 велосипеде за програмированием и $$$");
// document.write(t)

// Преобразование в CamelCase
// function CamelCase(a){
//     let simvol = "-"
//     a = a.toLowerCase()
//     for(let i = 0;i<a.length;i++){
//         if(a[i]==simvol){
//             let bigLetter= a.substring(i+1,i+2).toUpperCase()
//             a=a.substring(0,i)+bigLetter+a.substring(i+2,a.length)
//         }
//     }return a
// }
// let t = CamelCase("font-size, align-items, Background-color, display-flex");
// document.write(t)

// вывод числа в буквенном виде
// function letterNumber(a){
//     let answer = ""
//     if(+a[0]>1){switch(+a[0]){
//      case 2: answer += " двадцать";break;
//      case 3: answer += " тридцать";break;
//      case 4: answer += " сорок";break;
//      case 5: answer += " пятьдесят";break;
//      case 6: answer += " шестьдесят";break;
//      case 7: answer += " семьдесят";break;
//      case 8: answer += " восемьдесят";break;
//      case 9: answer += " девяносто";break;
//     }}else{switch(+a[1]){
//                 case 0: answer += " десять";break;
//                 case 1: answer += " одинадцать";break;
//                 case 2: answer += " двенадцать";break;
//                 case 3: answer += " тринадцать";break;
//                 case 4: answer += " четырнадцать";break;
//                 case 5: answer += " пятнадцать";break;
//                 case 6: answer += " шестнадцать";break;
//                 case 7: answer += " семнадцать";break;
//                 case 8: answer += " восемнадцать";break;
//                 case 9: answer += " девятнадцать";break;
//             }}
//     if(+a[0]!=1){switch(+a[1]){
//                 case 1: answer += " один";break;
//                 case 2: answer += " два";break;
//                 case 3: answer += " три";break;
//                 case 4: answer += " четыре";break;
//                 case 5: answer += " пять";break;
//                 case 6: answer += " шесть";break;
//                 case 7: answer += " семь";break;
//                 case 8: answer += " восемь";break;
//                 case 9: answer += " девять";break;
//                 }
//             }
// return answer
// }
// let t = letterNumber("25");
// document.write(t)

// Превращение в абревиатуру
//  function abbr(a){
//      a=a.split(" ")
//      let answer = ""
//      for(let i=0;i<a.length;i++){
//      let first = a[i].substring(0,1).toUpperCase()
//      answer += first
//      }
//      return "Ваша абревиатура : "+answer
//  }
//  let t = abbr("Объектно ориентированное программирование");
// document.write(t)

// Строчный калькулятор
// function calc(a){
//     a=a.split(" ")
//     let answer = 0
//         switch(a[1]){
//             case "+": answer = +a[0] + +a[2];break;
//             case "-":answer = +a[0] - +a[2];break;
//             case "*":answer = +a[0] * +a[2];break;
//             case "/":answer = +a[0] / +a[2];break;
        
//         }return answer
// }
//  let t = calc("25 / 5");
// document.write(t)
// Только через пробел получилось разделить, если без пробела а сплит сделать пустой,
//  то будет решать только с однозначными числами, не знаю как тут лучше сделать

// разделение без сплит
function split(a){
    let symbol = "/"
    let answer = ""
    let b = 0
    for(let i=0;i<a.length;i++){
     if(a[i]==symbol){
         answer +="'" + a.substring(b,i++)+"'"
         b=i
    }
     }
     return answer
    }

 let t = split("15/12/2020/");
document.write(t)