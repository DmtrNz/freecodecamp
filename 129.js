/*
Задача: 
Система управления библиотекой с методами call, apply и bind
У вас есть объект library, который представляет библиотеку с методами для работы с книгами. Также есть объект book, который представляет книгу. Вам нужно использовать методы call, apply и bind, чтобы правильно взаимодействовать с методами библиотеки.

Задания:
Используйте метод call, чтобы добавить book1 в библиотеку library.
Используйте метод apply, чтобы добавить book2 в библиотеку library.
Создайте новую функцию borrowBookBound, используя метод bind, чтобы привязать контекст library к методу borrowBook. Затем вызовите borrowBookBound для взятия book1.
Используйте метод call, чтобы вернуть book1 через метод returnBook.
Используйте метод apply, чтобы получить информацию о book2 через метод getBookInfo.

Ожидаемый вывод:
Книга "1984" добавлена в библиотеку.
Книга "Мастер и Маргарита" добавлена в библиотеку.
Книга "1984" взята на чтение.
Книга "1984" возвращена.
Информация о книге: Мастер и Маргарита, статус: в библиотеке
 */

const library = {
    books: [],
    addBook(book) {
        this.books.push(book);
        console.log(`Книга "${book.title}" добавлена в библиотеку.`);
    },
    borrowBook(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            if (!book.borrowed) {
                book.borrowed = true;
                console.log(`Книга "${book.title}" взята на чтение.`);
            } else {
                console.log(`Книга "${book.title}" уже взята.`);
            }
        } else {
            console.log("Книга не найдена.");
        }
    },
    returnBook(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            if (book.borrowed) {
                book.borrowed = false;
                console.log(`Книга "${book.title}" возвращена.`);
            } else {
                console.log(`Книга "${book.title}" уже в библиотеке.`);
            }
        } else {
            console.log("Книга не найдена.");
        }
    },
    getBookInfo(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            console.log(`Информация о книге: ${book.title}, статус: ${book.borrowed ? "взята" : "в библиотеке"}`);
        } else {
            console.log("Книга не найдена.");
        }
    },
};

const book1 = {
    id: 1,
    title: "1984",
    borrowed: false,
};

const book2 = {
    id: 2,
    title: "Мастер и Маргарита",
    borrowed: false,
};

// taskManager.addTask.call(taskManager, task1)
// taskManager.addTask.apply(taskManager, [task2])
// const completeTaskBound = taskManager.completeTask.bind(taskManager)
// completeTaskBound(task1.id)

// taskManager.getTaskInfo.call(taskManager, task2.id)

library.addBook.call(library, book1)
library.addBook.apply(library, [book2])
const borrowBookBound = library.borrowBook.bind(library)
borrowBookBound(book1.id)
library.returnBook.call(library, book1.id)
library.getBookInfo.apply(library, [book2.id])
