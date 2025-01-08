export function getUniqueNumbers(arr) {
    // Используем Set для удаления дубликатов
    let uniqueSet = new Set(arr);

    // Преобразуем Set обратно в массив
    let uniqueArray = [...uniqueSet];

    return uniqueArray;
}

// Пример использования
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers); // Вывод: [1, 2, 3, 4, 5]