const student = {
    name: "Lev",
    age: 10,
    friends: ["Liza", "Leonid", "Margo"]
}
const newFriend = "Artur"
const friends = [
    ...student.friends, 
    newFriend
]

const updatedStudent = { 
    ...student, 
    friends: friends 
}

/*Выполнено преобразование объекта: добавлен новый друг в список.
Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?*/

