let a;

let p4 =  Promise.resolve().then(function (resolve) {
    console.log('TEST A1', a); // 2)
    a = 25;
    setTimeout(() => {
        console.log('TEST A2', a); 
    }, 100);
});

setTimeout(function timeout() {
    a = 11;
    console.log('TEST A3', a); 
}, 1000);

console.log('TEST A5', a); // 1)

// TEST A5 undefined, TEST A1 undefined, TEST A2 25, TEST A3 11
