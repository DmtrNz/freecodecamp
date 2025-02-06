function sumObjectProperties(obj) {
    let sum = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'number') {
                sum += value; // Если свойство - число, добавляем его к сумме
            } else if (typeof value === 'object' && value !== null) {
                sum += sumObjectProperties(value); // Рекурсивно вызываем функцию для вложенного объекта
            }
        }
    }

    return sum;
}

// Пример использования:
const exampleObj = {
    a: 10,
    b: {
        c: 20,
        d: {
            e: 30,
        },
        f: 5,
    },
    g: 'text',
    h: null,
    i: 15,
};

const result = sumObjectProperties(exampleObj);
console.log(result); // Вывод: 80 (10 + 20 + 30 + 5 + 15)
