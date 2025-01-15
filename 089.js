// Пример массива
const numbers = [1, 2, 3, 4, 5];

// Использование forEach для вывода каждого элемента в консоль
numbers.forEach(function (number) {
    console.log(number);
});

// Или с использованием стрелочной функции
numbers.forEach(number => {
    console.log(number);
});

// Пример с объектами
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 21 }
];

// Использование forEach для вывода имени каждого студента
students.forEach(student => {
    console.log(student.name);
});

// Пример с изменением элементов массива
const prices = [10, 20, 30, 40, 50];

// Увеличиваем каждую цену на 10%
prices.forEach((price, index, array) => {
    array[index] = price * 1.1;
});

console.log(prices); // [11, 22, 33, 44, 55]
