function question3() {
    try {
        let x = 4;
        if (true) {
            console.log("x_let:", x);
            let x = 5;
        }
    } catch (err) {
        console.log("x_let:error", err);
    }

    try {
        const y = 4;
        if (true) {
            const y = 5;
            console.log("y_const_1:", y);
        }
        console.log("y_const_2:", y);
    } catch (err) {
        console.log("y_const_1:error");
    }
}
question3()