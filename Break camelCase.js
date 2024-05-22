function solution(string) {


    // let result = ''
    // for (let i = 0; i < string.length; i++) {
    //     if (string[i].charCodeAt(0) >= 97) {
    //         result += string[i]
    //     } else {
    //         result += ' ' + string[i]
    //     }
    // }
    // return result

    return string.replace(/([A-Z])/g, ' $1')

}
console.log(solution(""))
console.log(solution("camelCasing"))
console.log(solution("camelCasingTest"))