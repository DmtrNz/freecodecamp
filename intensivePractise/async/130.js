async function complexAsyncTask() {
    try {
        let x = 4;
        console.log("x_let_before_await:", x); // 1)

        await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            let x = 5;
            console.log("x_let_after_await:", x); // 2)

            // Вложенная асинхронная операция
            setTimeout(() => {
                console.log("x_let_nested_timeout:", x); // 4)
            }, 500);

            setImmediate(() => {
                console.log("x_let_setImmediate:", x); // 3)
            });
        });
        console.log("XXXXXX");

        await new Promise(resolve => setTimeout(resolve, 500)).then(() => {
            let x = 6;
            console.log("x_let_second_await:", x); // 5)

            // Вложенная асинхронная операция
            setTimeout(() => {
                console.log("x_let_second_nested_timeout:", x); // 9)
            }, 300);

            setImmediate(() => {
                console.log("x_let_second_setImmediate:", x); // 8)
            });
        });
    } catch (err) {
        console.log("x_let:error", err);
    } finally {
        console.log("x_let_finally"); // 6)
        try {
            const y = 4;
            console.log("y_const_before_await:", y); // 7)

            // Используем Promise.all для параллельного выполнения промисов
            await Promise.all([
                console.log("XXX"),
                new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
                    const y = 5;
                    console.log("y_const_1:", y); // 10)

                    // Вложенная асинхронная операция
                    setTimeout(() => {
                        console.log("y_const_nested_timeout:", y); // 15)
                    }, 500);

                    setImmediate(() => {
                        console.log("y_const_setImmediate:", y); // 11)
                    });
                }),
                new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
                    const y = 6;
                    console.log("y_const_2:", y); // 12)

                    // Вложенная асинхронная операция
                    setTimeout(() => {
                        console.log("y_const_second_nested_timeout:", y); // 17)
                    }, 300);

                    setImmediate(() => {
                        console.log("y_const_second_setImmediate:", y); // 16)
                    });
                })
            ]);

            console.log("y_const_after_all:", y); // 13)
        } catch (err) {
            console.log("y_const:error", err);
        } finally {
            console.log("y_const_finally");  // 14)
        }
    }
}

complexAsyncTask();
