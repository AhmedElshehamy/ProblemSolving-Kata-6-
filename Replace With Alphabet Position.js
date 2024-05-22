function alphabetPosition(text) {

    // let alp = Array.from('abcdefghijklmnopqrstuvwxyz')
    // let arr = text.toLowerCase().split('').filter((e) => e != ' ' && e != '.' && e != "'")
    // let result = ''

    // for (let i = 0; i < arr.length; i++) {
    //     if (alp.includes(arr[i])) {
    //         result += alp.indexOf(arr[i]) + 1 + ' '
    //     }
    // }
    // return result.slice(0, result.length - 1)

    return text.toUpperCase().replace(/[^A-Z]/g, "").split('').map((e) => e.charCodeAt(0) - 64).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))


// let text = "HELLOk WORLD"
// let code = text.charCodeAt()
// console.log(code)