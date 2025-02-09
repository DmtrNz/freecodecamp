/* Метод findIndex( ) возвращает индекс первого элемента в массиве array, который удовлетворяет предоставленной функции. Если ни один элемент
не удовлетворяет условию, возвращается -1.
- currentValue текущий элемент массива, который
проверяется.
- index (необязательный): индекс текущего
элемента в массиве. */

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


// 1. Найдите индекс задачи с title 'HTML&CSS' в списке tasks[todolistId1].
// const index = tasks.todolistId1.findIndex(task => task.title === "HTML&CSS")
// console.log(index)

// 2. Найдите индекс задачи с title 'Rest API' в списке tasks[todolistId2].
// const index = tasks.todolistId2.findIndex(t=>t.title==="Rest API")
// console.log(index)

// 3. Найдите индекс задачи с title 'ReactJS' в списке tasks[todolistId1].
// const index = tasks.todolistId1.findIndex(t=>t.title==="ReactJS")
// console.log(index)

// 4. Найдите индекс задачи с title 'GraphQL' в списке tasks[todolistId2].
// const index = tasks.todolistId2.findIndex(t=>t.title==="GraphQL")
// console.log(index)

// 5. Найдите индекс первой невыполненной задачи (isDone: false) в списке tasks[todolistId1].
// const index = tasks.todolistId1.findIndex(t=>!t.isDone)
// console.log(index)

// 6. Найдите индекс первой выполненной задачи (isDone: true) в списке tasks[todolistId2].
// const index = tasks.todolistId2.findIndex(t=>t.isDone)
// console.log(index)

// 7. Найдите индекс задачи с title 'JS' в списке tasks[todolistId1].
// const index = tasks.todolistId1.findIndex(t=>t.title==="JS")
// console.log(index)

// 8. Найдите индекс задачи с title 'GraphQL' в списке tasks[todolistId2].
// const index = tasks.todolistId2.findIndex(t=>t.title==="GraphQL")
// console.log(index)

// 9. Найдите индекс последней задачи в списке tasks[todolistId1].
// const index = tasks.todolistId1.length-1
// console.log(index)

// 10. Найдите индекс последней задачи в списке tasks[todolistId2].
// const index = tasks.todolistId2.length-1
// console.log(index)
