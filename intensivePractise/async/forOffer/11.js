console.log('start')//1

setTimeout(() => {
    console.log('setTimeout')
})

Promise.resolve().then(() => {
    console.log('resolve')
})

console.log('end')//2

//start, end, resolve, setTimeout