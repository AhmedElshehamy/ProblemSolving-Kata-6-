var countBits = function (n) {
    // Program Me
    // if (n >= 0) {
    //     return n.toString(2).split('').filter((e) => e == '1').length
    // }

    return n.toString(2).replace(/0+/g, '').length
};

console.log(countBits(0))
console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
console.log(countBits(10))
console.log(countBits(-1))