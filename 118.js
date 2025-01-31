// const sqe = (num) => num * 2;

// const memoize = (sqe) => {
//     let lastResult = 1; 
//     return (num) => {
//         const result = func(num) * lastResult;
//         lastResult = result; 
//         return result;
//     };
// };

// const memoizedSqr = memoize(sqe);

// console.log(memoizedSqr(5)); 
// console.log(memoizedSqr(5)); 
// console.log(memoizedSqr(6)); 
// console.log(memoizedSqr(5)); 

// const sqe = (num) => {
//     return num * 2
// }
//
//
// memoizedSqr = memoize(sqe);
//
//
// console.log(memoizedSqr(5)) //calculation
// console.log(memoizedSqr(5)) // from cache
// console.log(memoizedSqr(6)) calculation
// console.log(memoizedSqr(5)) // from cache


const sqe = (num) => {
    return num * 2
}

memoizedSqr = memoize(sqe);
function memoize(func) {
    let memo = {};
    const newFunc = (num) => {
        if (!memo[num]) {
            memo[num] = func(num);
        } 
        return memo[num];
    }
    return newFunc;
}

console.log(memoizedSqr(5)) //calculation
console.log(memoizedSqr(5)) // from cache
console.log(memoizedSqr(6)) //calculation
console.log(memoizedSqr(5)) // from cache