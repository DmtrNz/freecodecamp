function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // Check if the entered code matches the correct code
    if (enteredCode !== correctCode) {
        return false;
    }

    // Parse the expiration date and current date
    const expiration = new Date(expirationDate);
    const current = new Date(currentDate);

    // Check if the dates are valid
    if (isNaN(expiration) || isNaN(current)) {
        return false;
    }

    // Compare the dates
    if (current > expiration) {
        return false;
    }

    return true;
}

// Example usage:
const enteredCode = "123";
const correctCode = "123";
const currentDate = "December 21, 2024";
const expirationDate = "December 22, 2024";

console.log(checkCoupon(enteredCode, correctCode, currentDate, expirationDate)); // Output: true

// Test cases
const testCases = [
    { enteredCode: "123", correctCode: "123", currentDate: "December 21, 2024", expirationDate: "December 22, 2024", expected: true },
    { enteredCode: "123", correctCode: "123", currentDate: "December 22, 2024", expirationDate: "December 22, 2024", expected: true },
    { enteredCode: "123", correctCode: "123", currentDate: "December 23, 2024", expirationDate: "December 22, 2024", expected: false },
    { enteredCode: "999", correctCode: "123", currentDate: "December 21, 2024", expirationDate: "December 22, 2024", expected: false },
    { enteredCode: "123", correctCode: "123", currentDate: "December 21, 2024", expirationDate: "Invalid Date", expected: false },
    { enteredCode: "123", correctCode: "123", currentDate: "Invalid Date", expirationDate: "December 22, 2024", expected: false }
];

testCases.forEach((testCase, index) => {
    const result = checkCoupon(testCase.enteredCode, testCase.correctCode, testCase.currentDate, testCase.expirationDate);
    console.log(`Test ${index + 1}: ${result === testCase.expected ? 'Passed' : 'Failed'}`);
});
