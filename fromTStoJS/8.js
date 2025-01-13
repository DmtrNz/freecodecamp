// Пример 1: Приведение типов с использованием 'as'
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength); // Вывод: 16
// Пример 2: Приведение типов в функции
function getLength(value) {
    return value.length;
}
console.log(getLength("Hello, TypeScript!")); // Вывод: 18
// Пример 3: Приведение типов в массиве
var arr = ["apple", "banana", "cherry"];
var fruitLengths = arr.map(function (fruit) { return fruit.length; });
console.log(fruitLengths); // Вывод: [5, 6, 6]
var person = { name: "Alice", age: 30 };
var personName = person.name;
console.log(personName); // Вывод: Alice
