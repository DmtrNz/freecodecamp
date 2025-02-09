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
/* const sequentialDelay = (delays) => {
    const executeDelays = (i) => {
        if (i >= delays.length) {
            return Promise.resolve(); // Все задержки выполнены
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Delay ${delays[i]} ms completed`);
                resolve();
            }, delays[i]);
        }).then(() => executeDelays(i + 1)); // Переходим к следующей задержке
    };
    return executeDelays(0); // Начинаем с первой задержки
};
sequentialDelay([100, 333, 777, 1000, 3333, 7777, 10000])
    .then(() => {
        console.log('All delays are completed!');
    }); */


//Task 3: Реализуйте функцию delayWithError(ms, errorMessage), которая возвращает промис, переходящий в состояние rejected через ms миллисекунд с сообщением об ошибке errorMessage.
/* const delayWithError = (ms, errorMessage) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            reject(errorMessage)
        }, ms)
    );
};
delayWithError(3000, "Error")
    .then(() => {
        console.log("This will not be logged because the promise is rejected");
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    }); */


//Task 4: Напишите функцию parallelDelay(ms1, ms2), которая возвращает промис, переходящий в состояние resolved, когда обе задержки ms1 и ms2 завершатся.
/* function parallelDelay(ms1, ms2) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve()
        }, ms1 >= ms2 
            ? ms1
            : ms2)
    })
}
parallelDelay(10, 7000)
    .then(() => {
        console.log(`done!`)
    })

// function parallelDelay(ms1, ms2) {
//     const delay1 = new Promise((resolve) => setTimeout(resolve, ms1));
//     const delay2 = new Promise((resolve) => setTimeout(resolve, ms2));

//     return Promise.all([delay1, delay2]);
// }
// parallelDelay(10, 7000)
//     .then(() => {
//         console.log('Both delays are done!');
//     }); */


//Task 5: Создайте функцию raceDelay(ms1, ms2), которая возвращает промис, переходящий в состояние resolved, когда первая из задержек ms1 или ms2 завершится.
/* function parallelDelay(ms1, ms2) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve()
        }, ms1 >= ms2 
            ? ms2
            : ms1)
    })
}
parallelDelay(10, 7000)
    .then(() => {
        console.log(`done!`)
    })

// function raceDelay(ms1, ms2) {
//     const delay1 = new Promise((resolve) => setTimeout(resolve, ms1));
//     const delay2 = new Promise((resolve) => setTimeout(resolve, ms2));
//     return Promise.race([delay1, delay2]);
//     }
// raceDelay(10, 7000)
//     .then(() => {
//         console.log('First delay completed!');
//     }); */