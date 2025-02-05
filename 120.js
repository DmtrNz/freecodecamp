// Асинхронная функция для получения данных с сервера
async function fetchData(url) {
    try {
        // Отправляем GET-запрос на указанный URL
        const response = await fetch(url);

        // Проверяем, успешен ли ответ
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        // Парсим ответ в формате JSON
        const data = await response.json();

        // Выводим полученные данные в консоль
        console.log(data);
    } catch (error) {
        // Обработка ошибок
        console.error('Произошла ошибка при получении данных:', error);
    }
}

// Пример использования функции
const url = 'https://jsonplaceholder.typicode.com/posts'; // Пример URL для тестирования
fetchData(url);
