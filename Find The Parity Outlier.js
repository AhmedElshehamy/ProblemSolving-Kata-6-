function findOutlier(integers) {
    //your code here
    // let sumOfEven = 0
    // let sumOfOdd = 0
    // let arrOfSum = []
    // let arrOfOdd = []
    // for (let i = 0; i < integers.length; i++) {
    //     if (!(integers[i] % 2)) {
    //         sumOfEven++
    //         arrOfSum.push(integers[i])
    //     } else {
    //         sumOfOdd++
    //         arrOfOdd.push(integers[i])
    //     }
    // }
    // if (sumOfEven > sumOfOdd) {
    //     return Number(arrOfOdd.join(""))
    // } else {
    //     return Number(arrOfSum.join(''))
    // }

    let sumOfEven = integers.filter((e) => !(e % 2))

    let sumOfOdd = integers.filter((e) => e % 2)
    return sumOfEven.length == 1 ? sumOfEven[0] : sumOfOdd[0]
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([0, 0, 3, 0, 0]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2, 6, 8, 10, 3]))