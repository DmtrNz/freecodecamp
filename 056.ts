function sumOfDigits(n: number): number {
    // Преобразуем число в строку
    let str: string = n.toString();
    // Разделяем строку на массив строк
    let digStr: string[] = str.split('');
    // Преобразуем каждую строку в число
    let numbers: number[] = digStr.map(e => parseInt(e, 10));
    // Найдем сумму этих чисел
    let sum: number = numbers.reduce((acc: number, x: number) => acc + x, 0);
    // Повторяем процесс до тех пор, пока сумма не станет однозначным числом
    while (sum.toString().length > 1) {
        str = sum.toString();
        digStr = str.split('');
        numbers = digStr.map(e => parseInt(e, 10));
        sum = numbers.reduce((acc: number, x: number) => acc + x, 0);
    }
    return sum;
}

console.log(sumOfDigits(169));

/*
 Метод .toString( ) вызывается на объекте и возвращает строковое представление этого объекта,

 Метод split( ) разбивает строку на массив подстрок, используя указанный разделитель.
 */