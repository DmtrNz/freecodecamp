const p = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
})
    .catch((error) => console.log('1-я', error.message))
    .catch((error) => console.log('2-я', error.message));

const p2 = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
});

p2.catch((error) => console.log('3-я', error.message));
p2.catch((error) => console.log('4-я', error.message));

const p3 = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
})
    .then((error) => console.log('5-я', error.message)) 
    .catch((error) => console.log('6-я', error.message)); 

//1-я Всё сломалось :(
//3-я Всё сломалось :(
//4-я Всё сломалось :(
//6-я Всё сломалось :(

