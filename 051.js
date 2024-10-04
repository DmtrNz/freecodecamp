function squareSum(numbers) {
    const par =[...numbers];
    let total = 0; // Инициализация total с нулевым значением
    for (let i = 0; i < par.length; i++) { // Использование let для объявления i
        total += par[i] ** 2; // Суммируем квадраты чисел
    }
    return total; // Возвращаем итоговую сумму
}
console.log(squareSum([11, 9], [2], 30)); 
/*Complete the square sum function so that it squares each number passed into it and then sums the results
together. For example, for [1, 2, 2] it should return 9 because */