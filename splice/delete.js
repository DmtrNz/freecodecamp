//data
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

// 1. Удалите свойство isDone у первой задачи в списке tasks[todolistId1].
// delete tasks.todolistId1[0].isDone
// console.log(tasks)

// 2. Удалите свойство isDone у последней задачи в списке tasks[todolistId2].
// delete tasks.todolistId2[tasks.todolistId2.length-1].isDone
// console.log(tasks)

// 3. Удалите свойство title у задачи с title 'ReactJS' в списке tasks[todolistId1].
// const removeTitle= tasks.todolistId1.findIndex(e=>e.title==="ReactJS")
// delete tasks.todolistId1[removeTitle].title
// console.log(tasks)

// 4. Удалите свойства title у задач с title 'GraphQL' в tasks.
// for(let key in tasks) {
//     delete tasks[key].findIndex(e=>e.title==="GraphQL")
// }
// console.log(tasks)

// // 5. Удалите свойство id у первой задачи в списке tasks[todolistId1].
// delete tasks.todolistId1[0].id
// console.log(tasks)

// 6. Удалите свойство id у последней задачи в списке tasks[todolistId2].
delete tasks.todolistId2[tasks.todolistId2.length-1].id
console.log(tasks)

// 7. Удалите свойство isDone у задачи с title 'JS' в списке tasks[todolistId1].

// console.log(tasks)

// 8. Удалите свойство isDone у задачи с title 'GraphQL' в списке tasks[todolistId2].

// console.log(tasks)

// 9. Удалите свойство title у первой задачи в списке tasks[todolistId1].

// console.log(tasks)

// 10. Удалите свойство title у последней задачи в списке tasks[todolistId2].


