//Example: 
/* const delay = (ms) => {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve()
        }, ms)
)}
delay(1000)
    .then(() => {
        console.log("Hello!")
    }) */

//Task 1: Напишите функцию delayWithMessage(ms, message), которая возвращает промис, переходящий в состояние resolved через ms миллисекунд и выводит сообщение message в консоль.
/* const delayWithMessage = (ms, message) => {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(message);
        }, ms) // Закрывающая скобка для setTimeout
    );
}
delayWithMessage(9000, "Task 2 is done")
    .then((message) => console.log(`Received message: ${message}`)) */

// Task 2: Создайте функцию sequentialDelay(delays), которая принимает массив задержек (в миллисекундах) и выполняет их последовательно, выводя сообщение после каждой задержки.
const sequentialDelay = (delays) => {
    return new Promise((resolve) => {
        let currentDelay 
        for (let i = 0; i < delays.length; i++) {
            currentDelay = delays[i]
        }
        setTimeout(() => {
            console.log(currentDelay)
            resolve(currentDelay);
        }, currentDelay)
    })
}
sequentialDelay([1, 333, 777, 1000, 3333, 7777, 10000])
    .then(currentDelay => console.log(`current delay is: ${currentDelay}`)
    )

//Task 3: Реализуйте функцию delayWithError(ms, errorMessage), которая возвращает промис, переходящий в состояние rejected через ms миллисекунд с сообщением об ошибке errorMessage.


//Task 4: Напишите функцию parallelDelay(ms1, ms2), которая возвращает промис, переходящий в состояние resolved, когда обе задержки ms1 и ms2 завершатся.


//Task 5: Создайте функцию raceDelay(ms1, ms2), которая возвращает промис, переходящий в состояние resolved, когда первая из задержек ms1 или ms2 завершится.
