let number1
let number2
let number3
let number4
let number5
let number6 = null

beforeEach(() => {
    number1 = [6, 2, 1, 8, 10]
    number2 = [1, 1, 11, 2, 3]
    number3 = []
    number4 = [1,2]
    number5 = [1]
})

test('sum without highest and lowest number ', () => {

    
    function sumArray(array) {
        if (array == null || array.length < 2) {
            return 0;
        }
        array.sort((a, b) => a - b);
        array.pop();
        array.shift();
        return array.reduce((acc, curr) => acc + curr, 0);
    }

    expect(sumArray(number1)).toBe(16)
    expect(sumArray(number2)).toBe(6)
    expect(sumArray(number3)).toBe(0)
    expect(sumArray(number4)).toBe(0)
    expect(sumArray(number5)).toBe(0)
    expect(sumArray(number6)).toBe(0)
})