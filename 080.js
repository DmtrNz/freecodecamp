function arrayDiff(a,b) {
    return a.filter(e => !b.includes(e));
}

const result = arrayDiff([1, 2, 11, 8, 10],[1, 2, 11])
console.log(result)