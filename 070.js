function persistence(num) {
    let count = 0;

    // Function to multiply the digits of a number
    function multiplyDigits(n) {
        return n.toString().split('').reduce((acc, digit) => acc * Number(digit), 1);
    }

    // Continue multiplying the digits until we have a single-digit number
    while (num >= 10) {
        num = multiplyDigits(num);
        count++; 
    } 

    return count;
}

// Example usage:
console.log(persistence(39));   // Output: 3
console.log(persistence(999));  // Output: 4
console.log(persistence(4));    // Output: 0
