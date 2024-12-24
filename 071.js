function sumArray(array) {
    // Input validation
    if (!Array.isArray(array) || array.length < 2) {
        return 0;
    }

    // Finding the highest and lowest values
    const max = Math.max(...array);
    const min = Math.min(...array);

    // Calculate the sum excluding the first occurrence of min and max
    let minFound = false;
    let maxFound = false;

    return array.reduce((sum, num) => {
        if (num === min && !minFound) {
            minFound = true; // Skip the first occurrence of min
            return sum;
        }
        if (num === max && !maxFound) {
            maxFound = true; // Skip the first occurrence of max
            return sum;
        }
        return sum + num; // Add the number to the sum
    }, 0);
}