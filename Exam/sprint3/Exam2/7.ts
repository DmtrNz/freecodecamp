const myFunction = (a: number, b = 2) => a * b;

const result = myFunction(10, undefined) % 2;

const winner = result ? "Alice" : "Bob";
console.log(winner);

// Какое значение получит переменная winner?
//anser: "Bob"