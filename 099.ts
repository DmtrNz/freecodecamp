// Определим интерфейс для ассоциативного массива
interface AssociativeArray {
    [key: string]: string; // Ключи - строки, значения - строки
}

// Создадим ассоциативный массив
const associativeArray: AssociativeArray = {
    firstName: "John",
    lastName: "Doe",
    age: "30",
    city: "New York"
};

// Используем Object.keys() для получения массива ключей
const keys: string[] = Object.keys(associativeArray);
console.log("Ключи:", keys);

// Используем Object.values() для получения массива значений
const values: string[] = Object.values(associativeArray);
console.log("Значения:", values);

// Пример перебора ключей и значений
console.log("Ключи и значения:");
for (const key of keys) {
    console.log(`${key}: ${associativeArray[key]}`);
}