/*Метод find( ) возвращает первый элемент массива array, который удовлетворяет условию, заданному в функции обратного вызова. Если ни один элемент не удовлетворяет условию, возвращается undefined. Метод не изменяет исходный массив.
- currentValue: текущий элемент массива, который
обрабатывается.
- index (необязательный): индекс текущего
элемента в массиве.*/

let tasks = {
    "todolistId1": [
        { id: 11, title: 'HTML&CSS', isDone: true },
        { id: 12, title: 'JS', isDone: true },
        { id: 13, title: 'ReactJS', isDone: false },
    ],
    "todolistId2": [
        { id: 21, title: 'Rest API', isDone: true },
        { id: 22, title: 'GraphQL', isDone: false },
        { id: 23, title: 'GraphQL', isDone: false },
    ],
}

// 1. Найдите id задачи с title 'ReactJS' в списке tasks[todolistId1].
// const element = tasks.todolistId1.find(e=>e.title === "ReactJS")
// console.log(element.id)

// 2. Найдите id задачи с title 'HTML&CSS' в списке tasks[todolistId1].
// const element = tasks.todolistId1.find(e=>e.title === "HTML&CSS")
// console.log(element.id)

// 3. Найдите id задачи с title 'GraphQL' в списке tasks[todolistId2].
// const element = tasks.todolistId2.find(e=>e.title === "GraphQL")
// console.log(element.id)

// 4. Найдите id задачи первой невыполненной задачи (isDone: false) в списке tasks[todolistId1].
// const element = tasks.todolistId1.find(e=>!e.isDone)
// console.log(element.id)

// 5. Найдите первую выполненную задачу (isDone: true) в списке tasks[todolistId2].
// const element = tasks.todolistId1.find(e=>e.isDone)
// console.log(element.title)

// 6. Найдите задачу с title 'JS' в списке tasks[todolistId1].
// const element = tasks.todolistId1.find(e=>e.title==="JS")
// console.log(element)

// 7. Найдите задачу с title 'GraphQL' в списке tasks[todolistId2].
// const element = tasks.todolistId2.find(e=>e.title==="GraphQL")
// console.log(element)

// 8. Найдите последнюю задачу в списке tasks[todolistId1].
// const element = tasks.todolistId1[tasks.todolistId1.length-1]
// console.log(element)


// 9. Найдите последнюю задачу в списке tasks[todolistId2].
// const element = tasks.todolistId2[tasks.todolistId2.length-1]
// console.log(element)

// 10. Найдите задачу с title 'Rest API' в списке tasks[todolistId2]
// const element = tasks.todolistId2.find(t=>t.title === "Rest API")
// console.log(element)
