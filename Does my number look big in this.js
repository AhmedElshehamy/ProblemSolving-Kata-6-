function narcissistic(value) {
    // Code me to return true or false

    let lengthOfValue = String(value).length
    // return lengthOfValue
    let arr = Array.from(String(value), Number)
    // return arr

    return arr.map((e) => Math.pow(e, lengthOfValue)).reduce((cur, acc) => cur + acc) == value
}

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(122))
console.log(narcissistic(487))