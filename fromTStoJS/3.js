"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friends = exports.students = void 0;
exports.students = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 23 },
    { id: 3, name: "Ann", age: 25 },
    { id: 4, name: "Charley", age: 20 },
];
exports.friends = {
    1: ["Jack", "Oliver", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Lewis", "Michael"],
    4: ["Oscar", "Thomas", "William",],
};
console.log(students[1])
//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Имеют ли студенты students[1] и students[3] общих друзей?
//Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.
