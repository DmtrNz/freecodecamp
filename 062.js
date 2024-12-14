function longestWord(stringOfWords) {
    let words = stringOfWords.split(/\s+/); // Разделяем строку на слова
    let theLongestWord = ''; // Инициализируем переменную для самого длинного слова

    words.forEach((word) => {
        if (word.length >= theLongestWord.length) {
            theLongestWord = word; // Обновляем самое длинное слово, если текущее слово длиннее или такой же длины
        }
    });

    return theLongestWord; // Возвращаем самое длинное слово
}

// Примеры использования
console.log(longestWord("red white blue")); // "white"
console.log(longestWord("red blue gold")); // "gold"

//let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);