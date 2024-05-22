function comp(array1, array2) {
    //your code here


    // if (array1 == null || array2 == null) { return false }

    // let counter = 0
    // for (let i = 0; i < array2.length; i++) {
    //     for (let j = 0; j < array1.length; j++) {
    //         if (Math.sqrt(array2[i]) == array1[j]) {
    //             counter++
    //         }
    //     }
    // }
    // return counter


    // if (array1 == null || array2 == null) { return false }

    // let counter = 0
    // for (let i = 0; i < array2.length; i++) {
    //     for (let j = 0; j < array1.length; j++) {
    //         if (Math.sqrt(array2[i]) === array1[j]) {
    //             counter++
    //             array1.splice(j, 1)
    //             break;
    //         }
    //     }
    // }

    // return counter === array2.length


    if (array1 == null || array2 == null) { return false }

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    return array1.map(i => i * i).every((v, i) => v === array2[i])
}


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]))

console.log(comp([2, 9, 10, 6, 7, 0, 1, 1, 2, 0, 1], [1, 1, 36, 4, 100, 81, 4, 49, 1, 0, 0]))
console.log(comp([9, 7, 6, 10, 2, 9, 4, 6, 3, 7, 5, 0, 2], [49, 4, 81, 49, 100, 9, 36, 25, 36, 81, 16, 4, 0]))

console.log(comp([2, 2, 3], [4, 9, 9]))