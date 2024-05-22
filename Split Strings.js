function solution(str) {


    // if (str.length == 0) {
    //     return []
    // }

    // let arr = []

    // let newStr = str.split('')
    // if (newStr.length % 2) {
    //     newStr.push('_')
    // } else {
    //     newStr
    // }


    // while (newStr.length > 0) {
    //     arr.push(newStr.slice(0, 2).join(''))
    //     newStr.splice(0, 2)
    // }
    // return arr


    return (str + "_").match(/.{2}/g) || []
}

console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(''))
console.log(solution('abc'))