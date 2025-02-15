console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
})

promise1.then(res => {
    console.log(2)
})

console.log('end');
//start, 1, end

//В этом коде метод resolve никогда не вызывался, поэтому promise1 всегда находится в состоянии ожидания (pending). Так что promise1.then(…) никогда не выполнялся. 2 не выводится в консоли.