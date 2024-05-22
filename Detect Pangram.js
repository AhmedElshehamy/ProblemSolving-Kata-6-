function isPangram(string) {
    //...

    let str = string.toLowerCase()

    let pattern = /[A-Z]/gi

    return new Set(str.match(pattern)).size == 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("Cwm fjord bank glyphs vext quiz"))
console.log(isPangram("Pack my box with five dozen liquor jugs."))