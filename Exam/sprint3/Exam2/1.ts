let number = 39

if (number > 0) {
    let number = 57
    number++
}

const getNumber = (number: any) => {
    number *= 10
    return number
}

const bigValue= getNumber("number") || number

//Какое значение получит переменная bigValue?
//answer: 39

