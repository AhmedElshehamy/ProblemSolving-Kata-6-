function arrayDiff(a, b) {

    // let arr = a.concat(b)
    // return arr

    // let arr = [a, b]
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         newArr.push(arr[i][j])
    //     }
    // }
    // return newArr



    // let arr = a.concat(b)
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (b.indexOf(arr[i]) == -1) {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr

    return a.filter((e) => !(b.includes(e)))
}

console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2], [1]))
console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
console.log(arrayDiff([], [1, 2]))
console.log(arrayDiff([1, 2, 2], []))
console.log(arrayDiff([1, 2, 3], [1, 2]))