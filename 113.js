// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
    // Массив букв алфавита
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // Преобразуем текст в нижний регистр и разбиваем его на массив символов
    let textArray = text.toLowerCase().split('');
    // Массив для хранения позиций букв
    let positions = [];
    // Проходим по каждому символу в тексте
    textArray.forEach(char => {
        // Находим индекс символа в алфавите
        let index = alphabetArray.indexOf(char);
        // Если символ является буквой, добавляем его позицию + 1 в массив позиций
        if (index !== -1) {
            positions.push(index + 1);
        }
    });
    // Преобразуем массив позиций в строку, разделенную пробелами
    return positions.join(' ');
}

// Примеры использования
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log(alphabetPosition("The narwhal bacons at midnight."));
// Output: "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

