let a;

let p4 = new Promise(function (resolve) {
    console.log('TEST A1', a); // 1) TEST A1 undefined
    a = 25;
    setTimeout(() => {
        console.log('TEST A2', a); // 3)TEST A2 25
    }, 100);
});

setTimeout(function timeout() {
    a = 11;
    console.log('TEST A3', a); // 4) TEST A3  11
}, 100);

console.log('TEST A5', a); // 2) TEST A5 25



//Базово таймер относится к макрозадачам, которые попадают в Call Stack последними и выполняются в последнюю очередь. Поскольку в этой задаче он находится внутри promise — микрозадачи, которая выполняется раньше, — в вывод он попадёт третьим