const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("resolve1");
    }, 1000);
});
promise1
    .catch((t) => t + "catch1")
    .catch((t) => t + "catch2")
    .then((t) => t + "then1")
    .finally((t) => t + "finally")
    .then((t) => console.log(t)); 

//console: resolve1then1