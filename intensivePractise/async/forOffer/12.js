const promise = new Promise((resolve, reject) => {
    console.log(1);//1
    setTimeout(() => {
        console.log("timerStart");//4
        resolve("success");
        console.log("timerEnd");//5
    }, 0);
    console.log(2);//2
});

promise.then((res) => {
    console.log(res);//6
});

console.log(4);//3

//1, 2, 4, timerStart, timerEnd, success