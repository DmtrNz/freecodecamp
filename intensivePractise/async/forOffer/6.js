console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
})

promise1.then(res => {
    console.log(res)
})

console.log('end');

//start, 1, 3, end, 2
//метод resolve не прерывает выполнение функции. Код, стоящий за ним, по-прежнему будет выполняться