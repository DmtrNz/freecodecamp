
test('should sort the numbers', () => {

    function largest(n, array) {
        let numbers = array.sort((a, b) => b - a)
        numbers.splice(n);
        numbers.sort((a, b) => a - b)
        return numbers;
    }

    expect(largest(4, [9, 6, 99, 4, 3, 2, 1])).toEqual([4, 6, 9, 99]);
})

