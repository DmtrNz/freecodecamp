function getEvenNumbersPlusTen(numbers) {
    // Фильтруем четные числа и увеличиваем их на 10
    return numbers
        .filter(num => num % 2 === 0) // Оставляем только четные числа
        .map(num => num + 10); // Увеличиваем каждое четное число на 10
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = getEvenNumbersPlusTen(inputArray);

console.log(result);