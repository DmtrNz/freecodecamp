//Task: 1/1

/* console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
})

console.log('end'); */

/* answer: 
start
1 
end */




//Task: 1/2

/* console.log('start');

const promise2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('resolved');
});

promise2.then(value => {
    console.log(value); // Это выполнится асинхронно, после 'end'
});

console.log('end'); */


/* answer: 
start
1 
end
resolved
*/


//Task: 1/3

const p = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
})
    .catch((error) => console.log('1-я', error.message))
    .catch((error) => console.log('2-я', error.message));

/* answer: 
1-я Всё сломалось :(
*/