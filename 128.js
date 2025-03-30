/*
Задача: Система управления задачами с методами call, apply и bind

У вас есть объект taskManager, который представляет менеджер задач. Также есть объект task, который представляет задачу. Вам нужно использовать методы call, apply и bind, чтобы правильно взаимодействовать с методами менеджера задач.

Задания:
Используйте метод call, чтобы добавить task1 в менеджер задач taskManager.
Используйте метод apply, чтобы добавить task2 в менеджер задач taskManager.
Создайте новую функцию completeTaskBound, используя метод bind, чтобы привязать контекст taskManager к методу completeTask. Затем вызовите completeTaskBound для выполнения task1.
Используйте метод call, чтобы получить информацию о task2 через метод getTaskInfo.

Ожидаемый вывод:

Задача "Купить молоко" добавлена.
Задача "Позвонить другу" добавлена.
Задача "Купить молоко" выполнена.
Информация о задаче: Позвонить другу, статус: не выполнена
 */

const taskManager = {
  tasks: [],
  addTask(task) {
    this.tasks.push(task);
    console.log(`Задача "${task.title}" добавлена.`);
  },
  completeTask(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Задача "${task.title}" выполнена.`);
    } else {
      console.log("Задача не найдена.");
    }
  },
  getTaskInfo(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      console.log(`Информация о задаче: ${task.title}, статус: ${task.completed ? "выполнена" : "не выполнена"}`);
    } else {
      console.log("Задача не найдена.");
    }
  },
};

const task1 = {
  id: 1,
  title: "Купить молоко",
  completed: false,
};

const task2 = {
  id: 2,
  title: "Позвонить другу",
  completed: false,
};

taskManager.addTask.call(taskManager, task1)
taskManager.addTask.apply(taskManager, [task2])
const completeTaskBound = taskManager.completeTask.bind(taskManager)
completeTaskBound(task1.id)

taskManager.getTaskInfo.call(taskManager, task2.id)