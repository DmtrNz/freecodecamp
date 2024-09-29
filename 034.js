function sumArray(arr) {
    let total = 0; // Локальная переменная
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total; // Возврат значения
}

let myArr = [1, 2, 3, 4, 5];
console.log(sumArray(myArr)); // Вывод: 15