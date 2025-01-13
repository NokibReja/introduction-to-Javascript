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
console.log(friend)

const friendAry = ['nakib', 'akib', 'sakib', 'okib','fahim']
console.log(friendAry.join(''))
console.log(friendAry.join())
console.log(friendAry.join(' '))
console.log(friendAry.join('|'))
console.log(friendAry.join(','))
