function towerBuilder(nFloors) {
    // build here
    // let array = Array.from({ length: nFloors * 2 }, (_, i) => i + 1).filter((e) => e % 2).map((e) => '*'.repeat(e))

    // let newArr = []
    // for (let i = 0; i < nFloors; i++) {
    //     newArr.push(`${' '.repeat(array.length - i - 1)}${array[i]}${' '.repeat(array.length - i - 1)}`)
    // }
    // return newArr

    return [...Array(nFloors)].map((_, i) => ''.repeat(nFloors - 1 - i) + '*'.repeat(i * 2 + 1) + ''.repeat(nFloors - 1 - i))
}

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))
console.log(towerBuilder(6))