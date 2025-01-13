// Пример 1: Приведение типов с использованием 'as'
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength); // Вывод: 16

// Пример 2: Приведение типов в функции
function getLength(value: any): number {
    return (value as string).length;
}

console.log(getLength("Hello, TypeScript!")); // Вывод: 18

// Пример 3: Приведение типов в массиве
let arr: any[] = ["apple", "banana", "cherry"];
let fruitLengths: number[] = arr.map(fruit => (fruit as string).length);

console.log(fruitLengths); // Вывод: [5, 6, 6]

// Пример 4: Приведение типов в объекте
interface Person {
    name: string;
    age: number;
}

let person: any = { name: "Alice", age: 30 };
let personName: string = (person as Person).name;

console.log(personName); // Вывод: Alice

//tsc fromTStoJS/8.ts