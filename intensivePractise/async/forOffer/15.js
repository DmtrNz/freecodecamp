console.log('start');//1

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');//
    const timer2 = setTimeout(() => {
        console.log('timer2')//
    }, 500)
});

const timer1 = setTimeout(() => {
    console.log('timer1')//
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')//
    })
}, 1000)

console.log('end');//2

//start, end, promise1, timer2, timer1, promise2