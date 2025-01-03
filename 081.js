function encode(str) {
    let toArray = str.split("")
    return toArray.map(char => String.fromCharCode(char.charCodeAt(0) * 6)).join("");
}

console.log(encode("Hello World!"))

function decode(str) {
    let toArray = str.split("")
    return toArray.map(char => String.fromCharCode(char.charCodeAt(0)/6)).join("");
}

console.log(decode("ưɞʈʈʚÀȊʚʬʈɘÆ"))



// This cipher involves taking each character of a string and multiplying their char codes by 6.

// For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

// You must write two functions:
// `encode` to encode a given string,
// `decode` to decode a given string.
