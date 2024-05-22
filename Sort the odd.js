function sortArray(array) {
    // Return a sorted array.
    // let oddIndex = []
    // let oddValues = []

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2) {
    //         oddIndex.push(i)
    //         oddValues.push(array[i])
    //     }
    // }
    // return oddValues

    // oddValues.sort((a, b) => a - b)

    // for (let i = 0; i < oddIndex.length; i++) {
    //     array[oddIndex[i]] = oddValues[i]
    // }
    // return array

    let odd = array.filter((x) => x % 2).sort((a, b) => a - b)
    // return odd.shift()
    return array.map((x) => x % 2 ? odd.shift() : x)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([]))