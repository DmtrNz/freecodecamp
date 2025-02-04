function sumSalaries(obj) {
    let sum = 0;

    function recursiveSum(current) {
        // Если текущий элемент является объектом, обходим его свойства
        if (typeof current === 'object' && current !== null) {
            for (let key in current) {
                if (key === 'salary') {
                    // Если ключ равен 'salary', добавляем значение к сумме
                    sum = sum + current[key];
                } else {
                    // Рекурсивно обходим вложенные объекты
                    recursiveSum(current[key]);
                }
            }
        }
    }

    // Начинаем рекурсию с переданного объекта
    recursiveSum(obj);
    return sum;
}

// Пример использования
const company = {
    department1: {
        manager: { salary: 5000 },
        employee1: { salary: 2999 },
        employee2: { salary: 2500 },
    },
    department2: {
        director: { salary: 8000 },
        employee3: { salary: 2000 },
        team: {
            lead: { salary: 4000 },
            intern1: { salary: 1000 },
            intern2: { salary: 1 }
        },
    }
};

console.log(sumSalaries(company)); // Вывод: 25500