//@ts-ignore
const value = [0, [1, 0]][1][0] //1
let quantity

switch (value) {
    case 0:
        quantity = 44
        break
    case 1:
        quantity = 79
        break
    default:
        quantity = 32
        break
}

// Какое значение получит переменная quantity?
//answer: 79