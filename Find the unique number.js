function findUniq(arr) {
    // do magic





    // let obj = {}

    // for (let num of arr) {

    //     if (obj[num]) {
    //         obj[num]++
    //     } else {
    //         obj[num] = 1
    //     }
    // }


    // for (let i = 0; i < arr.length; i++) {
    //     if (obj[arr[i]] == 1) {
    //         return arr[i]
    //     }
    // }

    /**********************************************************/


    // arr.sort((a, b) => a - b)

    // return arr[0] == arr[1] ? arr.pop() : arr[0]

    /**********************************************************/

    // return arr.find(n => arr.indexOf(n) == arr.lastIndexOf(n))

    /**********************************************************/


    arr.sort((a, b) => a - b)


    return arr[0] == arr[1] ? Number(arr.slice(-1).join('')) : Number(arr.slice(0, 1).join(''))


}



console.log(findUniq([1, 0, 0]))
console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([0, 0, 0.55, 0, 0]))
console.log(findUniq([2, 3, 3, 3, 3]))