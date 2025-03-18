/* Задача: Банковская система с методами call, apply и bind

У вас есть объект bank, который представляет банк с методами для работы с клиентами.Также есть объект client, который представляет клиента банка.Вам нужно использовать методы call, apply и bind, чтобы правильно взаимодействовать с методами банка.


Задания:
Используйте метод call, чтобы добавить client1 в банк bank.
Используйте метод apply, чтобы добавить client2 в банк bank.
Создайте новую функцию getClientInfoBound, используя метод bind, чтобы привязать контекст bank к методу getClientInfo. Затем вызовите getClientInfoBound для получения информации о client1.
Используйте метод call, чтобы получить информацию о client2 через метод getClientInfo.

Ожидаемый:
Клиент Alice добавлен в банк SuperBank
Клиент Bob добавлен в банк SuperBank
Информация о клиенте: Alice, баланс: 1000
Информация о клиенте: Bob, баланс: 500
*/

const bank = {
    bankName: "SuperBank",
    clients: [],
    addClient(client) {
        this.clients.push(client);
        console.log(`Клиент ${client.name} добавлен в банк ${this.bankName}`);
    },
    getClientInfo(clientId) {
        const client = this.clients.find(c => c.id === clientId);
        if (client) {
            console.log(`Информация о клиенте: ${client.name}, баланс: ${client.balance}`);
        } else {
            console.log("Клиент не найден.");
        }
    },
};

const client1 = {
    id: 1,
    name: "Alice",
    balance: 1000,
};

const client2 = {
    id: 2,
    name: "Bob",
    balance: 500,
};

bank.addClient.call(bank, client1) //bank указавает контекст выполнения функции addClient
bank.addClient.apply(bank, [client2]) 

const getClientInfoBound = bank.getClientInfo.bind(bank)
getClientInfoBound(client1.id)

bank.getClientInfo.call(bank, client2.id)