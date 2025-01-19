// const customer = {
//     name: "Valera",
//     age: 11,
//     scores: [89.78, 4.59, 22.01]
// }

// const [first, second, third = 80.37] = customer.scores

// switch(third){
//     case 80.37:
//         console.log("Nicaragua")
//         break;
//    case 4.59:
//         console.log("Kenya")
//         break;
//    default:
//         console.log("Vanuatu");
//   } 
// /*Какую строку мы увидим в консоли?*/

// const member = {
//     name: "Artur",
//     age: 65,
//     scores: [67.94, 61.18, 67.84]
// }

// const {name, age, scores} = member

// console.log(member.scores === scores && age)


/*Какое значение мы увидим в консоли?*/


// const customer = {
//     name: "Ivan",
//     age: 59,
//     friends: ["Ivan", "Anastasiya", "Liza", "Max"]
// }

// const [age, age, cash] = customer.friends

// const result = age
// console.log(result)
// /*Какое значение получит переменная result?*/

const customer = {
    name: "Ivan",
    age: 59,
    friends: ["Ivan", "Anastasiya", "Liza", "Max"]
    }
    const [age, name, cash] = customer.friends
    const result = cash
    //Какое значение получит переменная result?/
    console.log(result)