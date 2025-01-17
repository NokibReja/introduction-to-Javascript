const address = 'Brahmanbaria';
const part = address.slice(7,12)
console.log(part)

const sentence = 'He is a good person and adopt'
// console.log(sentence.split(""))
// console.log(sentence.split(" "))
// console.log(sentence.split("e"))
// console.log(sentence.split("a"))
// console.log(sentence.split("is"))

const friendStr = 'akib, nakib, sakib, obkib, fahim';
const friend =friendStr.split(',')
const friend2 =friendStr.split(' ')
console.log(friend)
console.log(friend2)

const friendAry = ['nakib', 'akib', 'sakib', 'okib','fahim']
console.log(friendAry.join(''))
console.log(friendAry.join())
console.log(friendAry.join(' '))
console.log(friendAry.join(' a'))
console.log(friendAry.join('|'))
console.log(friendAry.join(','))
