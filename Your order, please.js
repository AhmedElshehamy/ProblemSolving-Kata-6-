function order(words) {
    // ...

    // if (!words) {
    //     return ''
    // }

    // const arr = words.split(' ')

    // arr.sort((a, b) => {

    //     const numA = Number(a.match(/\d+/), [0])
    //     const numB = Number(b.match(/\d+/), [0])

    //     return numA - numB
    // }
    // )

    // return arr.join(' ')



    let arr = words.split(' ')

    let newArr = []

    for (let i = 0; i <= arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[j].indexOf(i) >= 0) {
                newArr.push(arr[j])
            }
        }
    }
    return newArr.join(' ')

}
console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))