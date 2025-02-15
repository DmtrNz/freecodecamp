// todo в каком порядке будут выведены консоли и что в них будет?
console.log('script start'); // ? 1) синхронно, script start


setTimeout(function () {
    console.log('setTimeout'); // ? 5) макрозадача, setTimeout
}, 0);


Promise
    .resolve()
    .then(function () {
        console.log('promise1'); // ? 3) микрозадача, promise1
    })
    .then(function () {
        console.log('promise2'); // ? 4) микрозадача, promise2
    });


console.log('script end'); // ? 2) синхронно, 
// script end//script start / script end / promise1 / promise2 / setTimeout