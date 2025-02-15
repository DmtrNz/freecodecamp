async function complexAsyncTask() {
    try {
        let x = 4;
        console.log("x_let_before_await:", x); //1

        await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            let x = 5;
            console.log("x_let_after_await:", x); //2

            // Вложенная асинхронная операция
            setTimeout(() => {
                console.log("x_let_nested_timeout:", x); //7
            }, 500);

            setImmediate(() => {
                console.log("x_let_setImmediate:", x); //6
            });
        });
    } catch (err) {
        console.log("x_let:error", err);
    } finally {
        console.log("x_let_finally"); //3

        try {
            const y = 4;
            new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
                const y = 5;
                console.log("y_const_1:", y); //8

                // Вложенная асинхронная операция
                setTimeout(() => {
                    console.log("y_const_nested_timeout:", y); //10
                }, 500);

                setImmediate(() => {
                    console.log("y_const_setImmediate:", y); //9
                });
            });

            console.log("y_const_2:", y); //4
        } catch (err) {
            console.log("y_const_1:error", err);
        } finally {
            console.log("y_const_finally"); //5
        }
    }
}

complexAsyncTask();
