function resolveAfter2Seconds(x) {
    console.log(`Какой Х пришёл -> ${x}`); // 2) Какой Х пришёл -> 20
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x); // 5000 мс задержка, чтобы вернуть x
        }, 2000); // Задержка в 2 секунды
    });
}

async function add1(x) {
    console.log('add1 Hello'); // 1) add1 Hello
    const a = await resolveAfter2Seconds(20); // 2) Задержка 2 секунды, затем a = 20
    const b = await resolveAfter2Seconds(30); // 3) Задержка 2 секунды, затем b = 30
    console.log('add1 Bye'); // 4) add1 Bye
    return x + a + b; // 10 + 20 + 30 = 60
}

add1(10).then(console.log); // 5) 60



//add1 Hello

//Какой Х пришёл -> 20
//Какой Х пришёл -> 30

//add1 Bye

//60

//Функция async позволяет работать с асинхронным кодом так, будто он синхронный. Синхронный код не работает с асинхронным, но в пределах функции async возможно сделать вид, что так можно. Для этой задачи важно отметить, что любая async-функция сразу же возвращает promise. В паре с async идёт ключевое слово await, которое буквально означает «дождись». Сама по себе async-функция, как и promise — не является асинхронной.