function digitalRoot(n) {
    // ...

    // let string = Array.from(String(n), Number)
    // let sum = string.reduce((cur, acc) => cur + acc)
    // let newArr = Array.from(String(sum), Number)
    // let sum_2 = newArr.reduce((cur, acc) => cur + acc)
    // let arr = Array.from(String(sum_2), Number)
    // return arr.reduce((cur, acc) => cur + acc)


    while (n > 9) {
        n = Array.from(String(n), Number).reduce((cur, acc) => cur + acc)
    }
    return n
}

console.log(digitalRoot(16))
console.log(digitalRoot(456))
console.log(digitalRoot(456))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))