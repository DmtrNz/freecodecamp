function isDivisible(n, x, y) {
    return n%x===0 && n%y===0
}

const result = isDivisible(3,1,1)
console.log(result);