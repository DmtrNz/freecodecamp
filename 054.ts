const toSnakeCase = (str: string): string => {
    // Разделяем строку на массив слов
    let words = str.split(/[-\s]/);

    // Преобразуем слова в змеиный регистр
    let snakeCaseWords = words.map(word => word.toLowerCase());

    // Объединяем слова обратно в строку с подчеркиваниями
    return snakeCaseWords.join('_');
} 

console.log(toSnakeCase("the-Stealth-warrior"));

 /*
 Метод split( ) разбивает строку на массив подстрок, используя указанный разделитель. Здесь разделитель - шаблонный
литерал со значениями:
- дифис
- любой пробел

 Метод join( ) объединяет все элементы массива в строку, используя указанный разделитель.
 */