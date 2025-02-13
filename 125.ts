class Box<T> {
    private item: T | undefined;

    setItem(item: T): void {
        this.item = item;
    }

    getItem(): T | undefined {
        return this.item;
    }
}

// Пример использования
const numberBox = new Box<number>();
numberBox.setItem(42);
console.log(numberBox.getItem()); // 42

const stringBox = new Box<string>();
stringBox.setItem("Hello, Generics!");
console.log(stringBox.getItem()); // "Hello, Generics!"

