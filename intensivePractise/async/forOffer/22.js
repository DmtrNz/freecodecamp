function questionAsync() {
    let x = 5
    if(true) {
        console.log("x_let_before_await:", x);
        x = 2
        console.log("x_let_after_await:", x);
    }
}
questionAsync()

