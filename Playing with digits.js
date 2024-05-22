function digPow(n, p) {
    // ...

    // let newArr = []

    // let arr = Array.from(String(n), Number)
    // // return arr

    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(Math.pow(arr[i], p + i))
    // }
    // let sum = newArr.reduce((cur, acc) => cur + acc)

    // if (sum % n == 0) {
    //     return sum / n
    // } else {
    //     return -1
    // }


    let x = Array.from(String(n), Number).reduce((cur, acc, i) => cur + Math.pow(acc, p + i), 0)
    return x % n ? -1 : x / n
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(46288, 3))