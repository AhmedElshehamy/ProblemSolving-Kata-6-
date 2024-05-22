var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array

    // let arr = []

    // for (let i = 0; i < iterable.length; i++) {
    //     if (iterable[i] != iterable[i + 1]) {
    //         arr.push(iterable[i])
    //     }
    // }
    // return arr

    return Array.from(iterable).filter((a, i) => a != iterable[i - 1])
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))