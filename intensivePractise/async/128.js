async function complexAsyncTask() {
    try {
        let x = 4;
        if (true) {
            console.log("x_let_before_await:", x);
            await new Promise(resolve => setTimeout(resolve, 1000));
            let x = 5;
            console.log("hello");

            // Вложенная асинхронная операция
            setTimeout(() => {
                console.log("x_let_nested_timeout:", x);
            }, 500);

            setImmediate(() => {
                console.log("x_let_setImmediate:", x);
            });
        }
    } catch (err) {
        console.log("x_let:error", err); // 1)
    } finally {
        console.log("x_let_finally"); // 2)

        try {
            const y = 4;
            if (true) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const y = 5;
                console.log("y_const_1:", y); // 3)

                // Вложенная асинхронная операция
                setTimeout(() => {
                    console.log("y_const_nested_timeout:", y);
                }, 500);

                setTimeout(() => {
                    console.log("y_const_setImmediate:", y);
                });
            }
            console.log("y_const_2:", y);
        } catch (err) {
            console.log("y_const_1:error", err);
        } finally {
            console.log("y_const_finally");
        }
    }
}

complexAsyncTask();
//x_let:error
// x_let_finally
//y_const_1: 5
//y_const_2: 4
//y_const_finally
//y_const_setImmediate: 5
//y_const_nested_timeout: 5







