/* 
Условие:
У вас есть объект user, который представляет пользователя с именем и возрастом. Также есть функция greet, которая выводит приветствие с использованием имени пользователя. Однако функция greet не привязана к объекту user, и вам нужно использовать методы call, apply и bind, чтобы правильно вывести приветствие.

Задания:
Используйте метод call, чтобы вызвать функцию greet с контекстом user и передать сообщение "Hello".
Используйте метод apply, чтобы вызвать функцию greet с контекстом user и передать сообщение "Hi".
Создайте новую функцию boundGreet, используя метод bind, чтобы привязать контекст user к функции greet. Затем вызовите boundGreet с сообщением "Welcome".

Ожидаемый вывод:
Hello, Alice!
Hi, Alice!
Welcome, Alice!
*/

const user = {
  name: "Alice",
  age: 25,
};

function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

greet.call(user, "Hello")
greet.apply(user, ["Hi"])

const boundGreet = greet.bind(user)
boundGreet("Welcome")