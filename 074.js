// Пример использования String.prototype.matchAll
const text = 'The rain in SPAIN stays mainly in the plain';
const regex = /ain/g;
const matches = [...text.matchAll(regex)];

matches.forEach(match => {
    console.log(match);
});
// Output:
// [ 'ain', index: 7, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
// [ 'ain', index: 17, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
// [ 'ain', index: 29, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
// [ 'ain', index: 43, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]

// Пример использования globalThis
console.log(globalThis); // глобальный объект (window в браузере, global в Node.js)

// Пример использования import.meta
console.log(import.meta); // метаинформация о текущем модуле

// Пример использования WeakRefs и FinalizationRegistry
class MyResource {
    constructor(data) {
        this.data = data;
    }

    use() {
        console.log(`Using resource with data: ${this.data}`);
    }
}

const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Cleaning up resource with data: ${heldValue}`);
});

const resource = new MyResource('important data');
const weakRef = new WeakRef(resource);

registry.register(resource, resource.data, resource);

resource.use(); // Using resource with data: important data

// Пример использования Logical Assignment Operators
let a = 1;
let b = 0;

a &&= 2; // эквивалентно a = a && 2
b ||= 2; // эквивалентно b = b || 2

console.log(a); // 2
console.log(b); // 2
