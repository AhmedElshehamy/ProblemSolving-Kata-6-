function likes(names) {
    // TODO
    // return names.length

    // if (names.length == 0) {
    //     return `no one likes this`
    // }
    // if (names.length == 1) {
    //     return `${names.slice(0)} likes this`
    // }
    // if (names.length == 2) {
    //     return `${names.slice(0, 1)} and ${names.slice(1)} like this`
    // }
    // if (names.length == 3) {
    //     return `${names.slice(0, 1)}, ${names.slice(1, 2)} and ${names.slice(2, 3)} like this`
    // } else {
    //     return `${names.slice(0, 1)}, ${names.slice(1, 2)} and ${names.slice(2).length} others like this`
    // }

    return names.length == 0 ? `no one likes this` : names.length == 1 ? `${names.slice(0)} likes this` : names.length == 2 ? `${names.slice(0, 1)} and ${names.slice(1)} like this` : names.length == 3 ? `${names.slice(0, 1)}, ${names.slice(1, 2)} and ${names.slice(2, 3)} like this` : `${names.slice(0, 1)}, ${names.slice(1, 2)} and ${names.slice(2).length} others like this`
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))