// строка проверить строку на наличие . и после нее на com или ru

// function stringCheck(arr) {
//     if (arr.includes('.') &&
//         (arr.slice(arr.indexOf('.')+1, arr.length) === 'ru' ||
//         arr.slice(arr.indexOf('.')+1, arr.length) === 'com')){
//         return 'true'
//     } else {
//         return 'bye bye'
//     }
// }
//
// console.log(stringCheck('qwerty.com'))

// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4

// function CheckLength(num){
//     if (num.length <= 8 && num.length >= 4 && num.length % 2 === 0) {
//         return 'ok'
//     } else {
//         return 'num.length must be max 8, min 4 and must be honest'
//     }
// }
//
// console.log(CheckLength('qwerty'))

// строка поменять букву каждого четного индекса на E можно решить через map

// function changeLetter(qq){
//     const arr = [...qq].map((el, index) => {
//         if(index !== 0 && index % 2 === 0) {
//             return el = 'E'
//         }
//         return el
//     })
//     return arr.join('')
// }
//
// console.log(changeLetter('qwerty'))

// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале

// function checkPassword(arr, arg){
//     if (arr === arg && arg[0] !== ' ' && arr[0] !== ' ') {
//         return 'true'
//     } else {
//         return 'false'
//     }
// }
//
// console.log(checkPassword('qwerty', 'qwerty'))