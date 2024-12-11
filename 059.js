function reverseBits(n) {
    // Convert the number to a binary string
    let binary = n.toString(2);

    // Reverse the binary string
    let reversedBinary = binary.split('').reverse().join('');

    // Convert the reversed binary string back to an integer
    let reversedNumber = parseInt(reversedBinary, 2);

    return reversedNumber;
}

console.log(reverseBits(120));