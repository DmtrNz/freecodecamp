const letters = ['a', 'b', 'c', 'd', 'e'];

// Удаляем 2 элемента, начиная с индекса 1, и добавляем 'x', 'y', 'z'
const removedLetters = letters.splice(1, 2, 'x', 'y', 'z');

console.log(letters); // ['a', 'x', 'y', 'z', 'd', 'e']
console.log(removedLetters); // ['b', 'c']