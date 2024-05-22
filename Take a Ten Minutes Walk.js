function isValidWalk(walk) {
    //insert brilliant code here



    if (walk.length !== 10) {
        return false
    }
    let n = 0
    let s = 0
    let w = 0
    let e = 0

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': n++
                break
            case 's': s++
                break
            case 'w': w++
                break
            case 'e': e++
                break
            default: break
        }
    }

    return n == s && w == e
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // => True
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])) // => false
console.log(isValidWalk(['w'])) // => false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // => false
