function duplicateCount(text) {
    //...
    // let arr = Array.from(text, (e) => e.toLowerCase()).sort()
    // let sum = ''
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == arr[i + 1]) {
    //         sum += arr[i]
    //     }
    // }
    // return new Set(sum).size

    return (text.toLowerCase().split('').sort().join("").match(/([a-z])\1+/g) || []).length
}

console.log(duplicateCount(""))
console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("Indivisibility"))
console.log(duplicateCount("Indivisibilities"))