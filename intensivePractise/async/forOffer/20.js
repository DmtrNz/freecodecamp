function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, x);
    });
}

async function add2(x) {
    console.log('add2 Hello'); // 1)
    const p_a = resolveAfter2Seconds(200);
    const p_b = resolveAfter2Seconds(300);
    const p_c = resolveAfter2Seconds(100);
    const p_d = resolveAfter2Seconds(999);
    console.log('add2 Bye'); // 2)
    
    // Ждем завершения всех промисов
    return x + await p_a + await p_b + await p_c + await p_d;
}

add2(400).then(console.log);
//add2 Hello, add2 Bye, 1999