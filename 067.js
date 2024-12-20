
function permutations(str) {
    // Helper function to generate permutations
    function permute(prefix, remainder, resultSet) {
        if (remainder.length === 0) {
            resultSet.add(prefix);
        } else {
            for (let i = 0; i < remainder.length; i++) {
                permute(prefix + remainder[i], remainder.slice(0, i) + remainder.slice(i + 1), resultSet);
            }
        }
    }

    const resultSet = new Set();
    permute('', str, resultSet);

    // Convert the set back to an array and return
    return Array.from(resultSet);
}


