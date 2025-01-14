// Функция для преобразования строки в число с плавающей запятой
function convertToFloat(value) {
    return parseFloat(value);
}

// Пример использования функции
let stringValue = "123.45";
let floatValue = convertToFloat(stringValue);

console.log(floatValue); // Выведет: 123.45
console.log(typeof floatValue); // Выведет: number