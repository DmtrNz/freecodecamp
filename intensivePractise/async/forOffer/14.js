console.log('start');//1

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');//3
    const timer2 = setTimeout(() => {
        console.log('timer2')//6
    }, 0)
});

const timer1 = setTimeout(() => {
    console.log('timer1')//5
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')//5
    })
}, 0)

console.log('end');//2

//синхронный код: start, end
//асинхронный код:  promise1, timer1, promise2, timer2