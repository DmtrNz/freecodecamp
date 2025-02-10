const myFunction = (a: number, b = 3) => a + b;

const result = myFunction(346, undefined) % 2

const winner = result ? "Valera" : "Mia"
console.log(winner)
//Какое значение получит переменная winner?
//answer: "Valera"