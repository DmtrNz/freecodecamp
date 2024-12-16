// Пример использования модулей ES6
import { v4 as uuidv4 } from 'uuid';

// Пример использования Template Literals
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

greet('Alice');

// Пример использования Default Parameters
const multiply = (a, b = 1) => {
    return a * b;
};

console.log(multiply(5)); // 5
console.log(multiply(5, 3)); // 15

// Пример использования Map и Set
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

console.log(map.get('name')); // Alice
console.log(map.has('age')); // true

const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Дубликаты игнорируются

console.log(set.size); // 2
console.log(set.has(1)); // true

// Пример использования For...Of loop
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log(value);
}

// Пример использования Generator Functions
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const generator = idGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// Пример использования Proxy
const handler = {
    get: (obj, prop) => {
        if (prop in obj) {
            return obj[prop];
        } else {
            return 'Property does not exist';
        }
    }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = 2;

console.log(p.a); // 1
console.log(p.c); // Property does not exist

// Пример использования Dynamic Import
const loadModule = async () => {
    const module = await import('./module.js');
    module.doSomething();
};

loadModule();

// Пример использования BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// Пример использования WeakMap и WeakSet
const weakMap = new WeakMap();
const obj1 = {};
const obj2 = {};

weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

console.log(weakMap.get(obj1)); // value1

const weakSet = new WeakSet();
const obj3 = {};
const obj4 = {};

weakSet.add(obj3);
weakSet.add(obj4);

console.log(weakSet.has(obj3)); // true

// Пример использования Symbol
const sym = Symbol('description');
const obj = {
    [sym]: 'value'
};

console.log(obj[sym]); // value

// Пример использования Reflect API
const obj5 = {
    a: 1,
    b: 2
};

console.log(Reflect.get(obj5, 'a')); // 1
Reflect.set(obj5, 'c', 3);
console.log(obj5.c); // 3