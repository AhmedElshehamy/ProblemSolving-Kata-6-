function findOdd(A) {
    //happy coding!

    // let object = {}

    // for (let i = 0; i < A.length; i++) {
    //     let currentElement = A[i]

    //     if (object[currentElement]) {
    //         object[currentElement]++
    //     } else {
    //         object[currentElement] = 1
    //     }
    // }
    // for (let i in object) {
    //     if (object[i] % 2 !== 0) {
    //         return parseInt(i)
    //     }
    // }

    // return A.reduce((a, b) => a ^ b)

    // return A.find((item) => A.filter(el => el == item).length % 2)

    var result, sum = 0
    let arr = A.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            sum++
        } else {
            sum++
            if (sum % 2 != 0) {
                result = arr[i]
                break
            }
        }
    }
    return result

}

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([0, 1, 0, 1, 0]))
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))





