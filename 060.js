function scoreThrows(radii) {
    // Initialize the total score to 0
    let totalScore = 0;

    // Flag to check if all radii are less than 5
    let allRadiiLessThan5 = radii.length > 0; // Initialize to true only if the array is not empty

    // Iterate through each radius in the input array
    for (let i = 0; i < radii.length; i++) {
        const radius = radii[i];

        // Add points based on the radius
        if (radius < 5) {
            totalScore += 10;
        } else if (radius <= 10) {
            totalScore += 5;
        }

        // Check if the current radius is 5 or more
        if (radius >= 5) {
            allRadiiLessThan5 = false;
        }
    }

    // Add 100 bonus points if all radii are less than 5
    if (allRadiiLessThan5) {
        totalScore += 100;
    }

    // Return the total score
    return totalScore;
}

// Examples
console.log(scoreThrows([1, 5, 11]));    
console.log(scoreThrows([15, 20, 30]));  
console.log(scoreThrows([1, 2, 3, 4]));  
console.log(scoreThrows([]));           