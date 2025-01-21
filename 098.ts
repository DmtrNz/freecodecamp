// Имитация API, который возвращает данные
const fetchDataFromApi1 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Данные из API 1");
        }, 1000);
    });
};

const fetchDataFromApi2 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Данные из API 2");
        }, 1500);
    });
};

const fetchDataFromApi3 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Симуляция ошибки
            reject(new Error("Ошибка при загрузке данных из API 3"));
        }, 2000);
    });
};

// Главная асинхронная функция для загрузки данных
const loadData = async () => {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetchDataFromApi1(),
            fetchDataFromApi2(),
            fetchDataFromApi3(),
        ]);
        
        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Произошла ошибка:", error.message);
        } else {
            console.error("Неизвестная ошибка:", error);
        }
    }
};

// Запуск функции загрузки данных
loadData();