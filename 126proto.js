// Создаем конструктор для объектов User
function User(name, age) {
  this.name = name;
  this.age = age;
}

// Добавляем метод greet в прототип User
User.prototype.greet = function(message) {
  console.log(`${message}, ${this.name}!`);
};

// Создаем экземпляр user
const user = new User("Alice", 25);

// Вызываем методы с разными контекстами
user.greet("Hello");  // Hello, Alice!

// Используем call и apply с другими объектами
const anotherUser = { name: "Bob" };
user.greet.call(anotherUser, "Hi");      // Hi, Bob!
user.greet.apply(anotherUser, ["Hey"]);  // Hey, Bob!

// Создаем привязанную функцию
const boundGreet = user.greet.bind(user);
boundGreet("Welcome");  // Welcome, Alice!