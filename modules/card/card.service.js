const { User, Card } = require("../utils/dbs")

const createCard = async({viewed, matched}) => {
    const user1 = await User.findOne({_id: viewed})
    const user2 = await User.findOne({_id: matched})
    if (!user1 || !user2) { throw new Error('User not found') }
    let card = await Card.create({name: user1.fullName, gender:user1.gender, age: user1.age, distance: 0, viewed, matched})
    return card
}

const likesHistory = async({ matched }) => {
    let cards = await Card.find({matched})
    let newCards = []
    for ( let i = 0; i < cards.length; i++) {
       let newUser = await User.findOne({_id: cards[i].viewed})
       let resCards = {}
       Object.assign(resCards, cards[i]._doc);
       resCards['newUser'] = newUser
       newCards.push(resCards)
    }
    if (cards.length === 0) { throw new Error('Cards not found') }

    return newCards
}

const factorial = (value) => {
    if ( value === 0) return 1
    return value * (factorial(value - 1))
}

// const text = "Зашифровать данный текст с помощью шифра Цезаря" // Кгылчусегхя жгррюм хзнфх ф тспсьа ылчуг Щзкгув

// const ceasarCode = (value, number) => {
//     let array = []
//     let str = ''
//     for ( let i = 0; i < value.length ; i++) { // пройтись по строке и сделать массив номеров символов
//         array.push(value.charCodeAt(i))
//     }
//     for ( let i = 0; i < array.length; i++) {
//         array[i] = array[i] + number
//     } // сдвинуть элементы на 3 позиции
//     for (let i = 0; i < array.length; i++) {
//         str = str + String.fromCharCode(array[i])
//     } // собрать новую строку преобразовав элементы массива в символы
//     return str
// }

// const vigenereCode = (value, key) => {
//     let str = 'abcdefghijklmnopqrstuvwxyz'
//     let subArray = {}
//     let res = []
//     let subIndex = 0

//     for (let j = 0; j < str.length; j++) {
//         subArray[str[j]] = j
//     } // пройтись по алфавиту и сделать объект ключ значение

//     for ( let i = 0; i < value.length ; i++) { // пройтись по ключу и сделать массив номеров символов
//         if ( i < key.length ) {
//             let number1 = subArray[value[i]] + subArray[key[i]] 
//             res.push(limiter(number1, 26))
//         } else {
//             let number2 = subArray[value[subIndex]] + subArray[key[subIndex]]
//             res.push(limiter(number2, 26))
//             subIndex++
//         } 
//     }
//     for ( i = 0; i < res.length; i++) {
//         for (const [key, value] of Object.entries(subArray)) {
//             if (res[i] === value) {
//                 res[i] = key
//                 break
//             }
//         }
//     }
//     return res
// }

// function limiter (value, limit) { 
//     return Math.ceil(( value % limit ))
// }

// const alphabet = () => {
//     let str = 'abcdefghijklmnopqrstuvwxyz'
//     let array = []
//     for (let i = 0; i < 9; i++) {
//         let subArray = []
//         let subStr = 0
//         for (let j = 0; j < str.length; j++) {
//             if (i + j < str.length) {
//                 subArray.push(str[i + j])
//             } else {
//                 subArray.push(str[subStr])
//                 subStr++
//             }
//         }
//         array.push(subArray)
//     }
//     return array
// }

// const gronsCode = (str, key) => {
//     str = str.toLowerCase()
//     let res = ''
//     let table = alphabet()
//     if ( str.length > key.length ) {
//         while ( str.length > key.length) {
//             key = key + key
//         }
//         key = key.substring(0, str.length)
//     }
//     for (let i = 0; i < str.length; i++) {
//         let m = table[0].indexOf(str[i])
//         let k = Number(key[i])
//         let c = table[k][m]
//         res = res + c
//     }
//     console.log(res)
//     return res
// }
// console.log(vigenereCode('student', 'exam'))

module.exports = {
    createCard,
    likesHistory
}