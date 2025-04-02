// Конструктор объекта "Person"
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Добавление метода в прототип
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Создание экземпляра
const john = new Person("John", 30);
john.greet(); // "Hello, my name is John and I'm 30 years old."

// Родительский конструктор
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

// Дочерний конструктор (наследование)
function Dog(name, breed) {
  Animal.call(this, name); // Вызов родительского конструктора
  this.breed = breed;
}

// Настройка цепочки прототипов (Dog → Animal → Object)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Возвращаем правильный constructor

// Добавляем метод в Dog
Dog.prototype.bark = function() {
  console.log(`${this.name} (${this.breed}) barks: Woof!`);
};

// Создаём экземпляр Dog
const rex = new Dog("Rex", "German Shepherd");
rex.speak(); // "Rex makes a sound." (унаследовано от Animal)
rex.bark();  // "Rex (German Shepherd) barks: Woof!"