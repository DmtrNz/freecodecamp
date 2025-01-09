function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepCopy(obj[i]);
        }
        return arrCopy;
    }

    const objCopy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepCopy(obj[key]);
        }
    }
    return objCopy;
}

// Исходный объект
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zipcode: '10001'
    },
    hobbies: ['reading', 'traveling'],
    greet: function () {
        console.log('Hello!');
    }
};

// Глубокое копирование объекта
const deepCopyObject = deepCopy(originalObject);

// Проверка
console.log(deepCopyObject);
console.log(deepCopyObject === originalObject); // false
console.log(deepCopyObject.address === originalObject.address); // false
console.log(deepCopyObject.greet === originalObject.greet); // true
