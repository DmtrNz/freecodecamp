// Функция, имитирующая асинхронный запрос
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
        }, 2000); // Имитируем задержку в 2 секунды
    });
}

// Асинхронная функция, которая использует await для получения данных
async function getUserData() {
    try {
        console.log('Запрос данных...');
        const userData = await fetchData();
        console.log('Данные получены:', userData);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Вызов функции
getUserData();
