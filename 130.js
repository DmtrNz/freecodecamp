/* 
Задача: 
Система управления заказами с методами call, apply и bind
У вас есть объект orderManager, который представляет менеджер заказов с методами для работы с заказами. Также есть объект order, который представляет заказ. Вам нужно использовать методы call, apply и bind, чтобы правильно взаимодействовать с методами менеджера заказов.

Задания:
Используйте метод call, чтобы добавить order1 в менеджер заказов orderManager.
Используйте метод apply, чтобы добавить order2 в менеджер заказов orderManager.
Создайте новую функцию processOrderBound, используя метод bind, чтобы привязать контекст orderManager к методу processOrder. Затем вызовите processOrderBound для обработки order1.
Используйте метод call, чтобы отменить order2 через метод cancelOrder.
Используйте метод apply, чтобы получить информацию о order1 через метод getOrderInfo

Ожидаемый вывод:
Заказ #1 добавлен.
Заказ #2 добавлен.
Заказ #1 обработан.
Заказ #2 отменен.
Информация о заказе #1: статус - обработан, не отменен
*/

const orderManager = {
    orders: [],
    addOrder(order) {
        this.orders.push(order);
        console.log(`Заказ #${order.id} добавлен.`);
    },
    processOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            if (!order.processed) {
                order.processed = true;
                console.log(`Заказ #${order.id} обработан.`);
            } else {
                console.log(`Заказ #${order.id} уже обработан.`);
            }
        } else {
            console.log("Заказ не найден.");
        }
    },
    cancelOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            if (!order.canceled) {
                order.canceled = true;
                console.log(`Заказ #${order.id} отменен.`);
            } else {
                console.log(`Заказ #${order.id} уже отменен.`);
            }
        } else {
            console.log("Заказ не найден.");
        }
    },
    getOrderInfo(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            console.log(`Информация о заказе #${order.id}: статус - ${order.processed ? "обработан" : "не обработан"}, ${order.canceled ? "отменен" : "не отменен"}`);
        } else {
            console.log("Заказ не найден.");
        }
    },
};

const order1 = {
    id: 1,
    processed: false,
    canceled: false,
}

const order2 = {
    id: 2,
    processed: false,
    canceled: false,
};

orderManager.addOrder.call(orderManager, order1)
orderManager.addOrder.apply(orderManager, [order2])
const processOrderBound = orderManager.processOrder.bind(orderManager)
processOrderBound(order1.id)
orderManager.cancelOrder.call(orderManager, order2.id)
orderManager.getOrderInfo.apply(orderManager, [order1.id])