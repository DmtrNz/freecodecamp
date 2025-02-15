let a;

let p4 = new Promise(function (resolve) {
    console.log('TEST A1', a); // 1) синхронно, a = undefined
    a = 25;
    setTimeout(() => {
        console.log('TEST A2', a); // 3) асинхронно, a = 25
        resolve(a);
    }, 100);
});

setTimeout(function timeout() {
    a = 10;
    console.log('TEST A3', a); // 5) асинхронно, a = 10
}, 100);

p4.then(function (b) {
    console.log('TEST A4', a); // 4) асинхронно, a = 25
});

console.log('TEST A5', a); // 2) синхронно, a = 25
//TEST A1 undefined
//TEST A5 25
//TEST A2 25
//TEST A4 25
// TEST A3 10
