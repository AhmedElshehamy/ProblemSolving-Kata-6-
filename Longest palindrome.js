function longestPalindrome(str) {
    //Good Luck

    let pattern = /[a-z0-9]/g
    str = str.toLowerCase()
    let arr = str.match(pattern)
    // return str

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    // return obj

    let counter = 0
    hasOddObject = false

    let strOfObject = ''
    for (let count of Object.values(obj)) {
        if (count % 2 === 0) {
            counter += count
            strOfObject = Object.keys(obj).join('')
        } else {
            counter += count - 1
            hasOddObject = true
        }
    }
    if (hasOddObject) {
        counter += 1
    }
    return counter
}



console.log(longestPalindrome("xyz__a_/b0110//a_zyx"))
console.log(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"))
console.log(longestPalindrome("xyz__a_/b0110//a_zyx"))