function tribonacci(signature, n) {
    //your code here


    let sum = 0

    let arr = [...signature]


    while (arr.length < n) {

        newArr = arr.slice(-3)

        sum = newArr.reduce((cur, acc) => cur + acc)

        arr.push(sum)
    }
    return arr.slice(0, n)
}

console.log(tribonacci([1, 1, 1], 10))
console.log(tribonacci([0, 0, 1], 10))
console.log(tribonacci([0, 1, 1], 10))
console.log(tribonacci([0, 0, 0], 10))
console.log(tribonacci([1, 2, 3], 10))
console.log(tribonacci([3, 2, 1], 10))
console.log(tribonacci([1, 1, 1], 1))
