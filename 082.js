// const user = {
//     name: "Vladimir",
//     age: 54
// }
// const copyUser = user


// user.age = 91

// console.log(copyUser.age)
// /*Чему равно значение copyUser.age после выполнения этого кода?*/

// const customer = {
//     name: "Andrey",
//     age: 36
// }
// const copyCustomer = {...customer}
// customer.name = "Leo"

// console.log(copyCustomer.name)
// /*Чему равно copyCustomer.name после выполнения этого кода?*/

// const student = {
//     name: "Nikita"
// }
// const newStudent = student
// const myFriend = {
//     ...newStudent
// }
// const newUser = {
//     name: "Elizaveta"
// }
// const myFriendName = student.name !== myFriend.name
//     ? newUser.name
//     : student.name

//     console.log(myFriendName)
// /*Какое значение получит переменная "myFriendName"?*/

const student = {
    name: "William",
    age: 44,
    friends: ["Marina", "Michail", "Liza"]
}
const updatedStudent = {...student}
updatedStudent.friends.push("Leonid")
console.log(student.friends[3])
/*Какое значение будет выведено в консоль?*/