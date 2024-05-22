function spinWords(string) {
    //TODO Have fun :)

    // return string.split(' ').map((e) => e.length >= 5 ? e.split("").reverse().join("") : e).join(' ')
    // return string.replace(/\w{5,}/gi, function (w) { return w.split('').reverse().join('') })

    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = arr[i].split('').reverse().join('')
        }
    }
    return arr.join(' ')
}


console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))