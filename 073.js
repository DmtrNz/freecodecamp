// Пример использования Optional Chaining (?.) и Nullish Coalescing (??)
const user = {
    name: 'Alice',
    address: {
        city: 'Wonderland'
    }
};

// Optional Chaining
const city = user.address?.city; // 'Wonderland'
const street = user.address?.street; // undefined

// Nullish Coalescing
const defaultCity = user.address?.city ?? 'Default City'; // 'Wonderland'
const defaultStreet = user.address?.street ?? 'Default Street'; // 'Default Street'

console.log(city); // 'Wonderland'
console.log(street); // undefined
console.log(defaultCity); // 'Wonderland'
console.log(defaultStreet); // 'Default Street'

// Пример использования BigInt
const bigIntNumber = 1234567890123456789012345678901234567890n;
console.log(bigIntNumber); // 1234567890123456789012345678901234567890n

// Пример использования Dynamic Import
async function loadModule() {
    const module = await import('./myModule.js');
    module.myFunction();
}

loadModule();

// Пример использования Promise.allSettled
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2, 'bar'];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));
// Output:
// 'fulfilled'
// 'rejected'
// 'fulfilled'