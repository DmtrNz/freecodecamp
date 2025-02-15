console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('resolved');
});

promise1.then(value => {
    console.log(value); // Это выполнится асинхронно, после 'end'
});

console.log('end');

//start, 1, end, resolved