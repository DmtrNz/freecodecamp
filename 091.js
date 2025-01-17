// Правила для действительного пароля следующие:
// Должен быть хотя бы 1 заглавная буква. +
// Там должна быть хотя бы 1 строная буква. +
// Там должно быть хотя бы 1 число. +
// Пароль должен содержать не менее 8 символов. +
// Вам разрешено использовать любые методы для проверки пароля.

export function password(str) {
    
    const trimmedStr = str.trim()
    // Проверяем длину строки
    const lengthCheck = trimmedStr.length > 7
    // Проверяем наличие хотя бы одной заглавной буквы
    const upperCaseCheck = /[A-Z]/.test(trimmedStr)
    // Проверяем наличие хотя бы одной строчной буквы
    const lowerCaseCheck = /[a-z]/.test(trimmedStr)
    // Проверяем наличие хотя бы одного числа
    const numberCheck = /\d/.test(trimmedStr)

    // Все условия должны быть выполнены
    return lengthCheck && upperCaseCheck && lowerCaseCheck && numberCheck;
    // return str.trim().length > 7 && str.test(/\d+/g) && str.test(/[a-z]/g) && str.test(/[A-Z]/g)
}

console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"))