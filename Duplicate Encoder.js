function duplicateEncode(word) {
  // ...

  // let obj = {}

  // for (let char of word) {

  //   let lowerChar = char.toLowerCase()

  //   if (obj[lowerChar]) {
  //     obj[lowerChar]++
  //   } else {
  //     obj[lowerChar] = 1
  //   }
  // }

  // let result = ''

  // for (let char of word) {
  //   let lowerChar = char.toLowerCase()

  //   if (obj[lowerChar] === 1) {
  //     result += '('
  //   } else {
  //     result += ')'
  //   }
  // }
  // return result


  return Array.from(word, (e) => e.toLowerCase()).map((e, _, w) => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ")").join("")
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))


// const numbers = [1, 2, 3, 4, 5, 2, 1];

// function findRepeatedNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 console.log(`Number ${arr[i]} is repeated at indices ${i} and ${j}`);
//             }
//         }
//     }
// }

// findRepeatedNumbers(numbers);