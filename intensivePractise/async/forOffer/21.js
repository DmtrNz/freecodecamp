async function questionAsync() {
    try {
        let x = 4;
        if (true) {
            await new Promise(resolve => setTimeout(resolve, 6000));
            console.log("x_let_before_await:", x);
            x = 5; 
            console.log("x_let_after_await:", x);
        }
    } catch (err) {
        console.log("x_let:error", err);
    }
}
questionAsync();

//x_let_before_await: 4, x_let_after_await: 5