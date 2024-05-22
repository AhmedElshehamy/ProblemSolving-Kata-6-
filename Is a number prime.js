function isPrime(num) {
    //TODO


    if (num <= 1) { return false }

    if (num === 2) { return true }

    if (num % 2 == 0) { return false }

    let maxDiv = Math.floor(Math.sqrt(num)) + 1
    for (let i = 3; i < maxDiv; i += 2) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(75))
console.log(isPrime(239003))