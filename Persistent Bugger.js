function persistence(num) {
    //code me

    let arr = []

    while (num > 9) {
        num = Array.from(String(num), Number).reduce((cur, acc) => cur * acc)
        arr.push(num)
    }
    return arr.length
}

console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))