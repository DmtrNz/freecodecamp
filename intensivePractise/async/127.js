async function questionAsync() {
    try {
        let x = 4;
        if (true) {
            console.log('x'); // 1)
            console.log("x_let_after_await:", x); //после ошибки сразу падаем в блок catch 
            await new Promise(resolve => setTimeout(resolve, 1000));
            let x = 5;
            console.log('xy');
        }
    } catch (err) {
        console.log("x_let:error", err); // 2)
    } finally {
        console.log("x_let_finally");// 3)

        try {
            const y = 4;
            if (true) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const y = 5;
                console.log("y_const_1:", y);// 4)
            }
            console.log("y_const_2:", y);
        } catch (err) {
            console.log("y_const_1:error", err)
        } finally {
            console.log("y_const_finally");// 5)
        }
    }
}

questionAsync()
//x
// x_let:error
// x_let_finally
//y_const_1: 5
// y_const_2: 4
//y_const_finally