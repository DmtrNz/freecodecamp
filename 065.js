// Пример использования async/await для асинхронного программирования
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Пример использования деструктуризации и spread оператора
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const { name, age, address: { city } } = user;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

const updatedUser = {
    ...user,
    age: 31,
    address: {
        ...user.address,
        country: 'Canada'
    }
};

console.log(updatedUser);

// Пример использования классов и наследования
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Buddy');
myDog.speak();

// Пример использования Promise.all для параллельного выполнения промисов
const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

Promise.all(urls.map(url => fetchData(url)))
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Пример использования Optional Chaining и Nullish Coalescing
const userSettings = {
    theme: 'dark',
    notifications: {
        email: true,
        push: false
    }
};

const emailNotifications = userSettings.notifications?.email ?? false;
console.log(`Email notifications: ${emailNotifications}`);
