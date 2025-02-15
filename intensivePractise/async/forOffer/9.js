console.log('start') //1

Promise.resolve(1).then((res) => {
    console.log(res)
})

Promise.resolve(2).then((res) => {
    console.log(res)
})

console.log('end')

//start end 1 2 
//В JavaScript микрозадачи выполняются после завершения текущего синхронного кода, но до выполнения макрозадач (например, таймеров).