function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length === 0) {
        return [];
    }
    const positiveCount = input.filter(num => num > 0).length; //число полож.чисел в массиве input
    const summNegativeCount = input.filter(num => num < 0).reduce((prev, curr) => prev + curr, 0);
    return [positiveCount, summNegativeCount]; //возращение массива 
}

let input = [0, 1122];
console.log(countPositivesSumNegatives(input)); 