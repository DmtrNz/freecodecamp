//info
/* Метод splice( ) изменяет содержимое массива, добавляя или удаляя элементы. Он принимает три параметра:
1. start - индекс, с которого начинается изменение массива.
2. deleteCount - количество удаляемых элементов.
3. item1, item2, ... - элементы, которые будут добавлены на место удалённых (опционально). */

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

//task1: Удалите первую задачу из списка tasks[todolistId1].
// tasks.todolistId1.splice(0,1)
// console.log(tasks)

//task2: Удалите последнюю задачу из списка tasks[todolistId2].
// tasks.todolistId2.splice((tasks.todolistId2.length-1), 1)
// console.log(tasks)

//task3: Удалите задачи с title 'GraphQL' из списка tasks[todolistId2].
// tasks.todolistId2.splice(1,2)
// console.log(tasks)

//task4: Удалите все задачи, которые не выполнены (isDone: false), из списка tasks[todolistId1].
// tasks.todolistId1 = tasks.todolistId1.filter(task => task.isDone)
// console.log(tasks)

// //task5: Удалите все задачи, которые выполнены (isDone: true), из списка tasks[todolistId2].
// tasks.todolistId2 = tasks.todolistId2.filter(t=> !t.isDone)
// console.log(tasks)

//task6: Удалите задачу с индексом 1 из списка tasks[todolistId1]. 
// tasks.todolistId1.splice(1, 1)
// console.log(tasks)

//task7: Удалите задачу с индексом 2 из списка tasks[todolistId2].
// tasks.todolistId2.splice(2,1)
// console.log(tasks)

//task8:  Удалите все задачи из списка tasks[todolistId1].
// tasks.todolistId1.splice(0)
// /console.log(tasks)

//task9:  Удалите все задачи из списка tasks[todolistId2].
// tasks.todolistId2.splice(0)
// console.log(tasks)

//task10: Удалите задачу с title 'JS' из списка tasks[todolistId1].
// tasks.todolistId1=tasks.todolistId1.filter(t=>t.title!=="JS")
// console.log(tasks)

//task11: Удалите задачу с title 'GraphQL' из списка tasks[todolistId2].
// tasks.todolistId2 = tasks.todolistId2.filter(t=>t.title !== "GraphQL")
// console.log(tasks)

//task12: Удалите все задачи, которые выполнены (isDone: true), из списка tasks 
// tasks.todolistId1 = tasks.todolistId1.filter(t=>!t.isDone)
// tasks.todolistId2 = tasks.todolistId2.filter(t=>!t.isDone)
// console.log(tasks)

//task13: Оптимизация tasks12: удалите все задачи, которые выполнены (isDone: true), из списка tasks 
// for(let key in tasks) {
//     tasks[key]=tasks[key].filter(t=>t.isDone)
// }
// console.log(tasks);

//tasks14: Оптимизация tasks12: удалите все задачи, которые выполнены (isDone: true), из списка tasks 
// for(let key in tasks) {
//     tasks[key]=tasks[key].filter(t=>!t.isDone)
// }
// console.log(tasks);








