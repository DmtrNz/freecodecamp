function randomWholeNum() {
    return Math.floor(Math.random()*10);
  }
/* Чтобы сгенерировать случайные целые числа с помощью JavaScript, вы 
можете использовать метод Math.random(), который генерирует случайные десятичные
числа. Если вам нужно получить случайное целое число, вы можете использовать 
следующий процесс для получения случайного целого числа в диапазоне от 0 до 9:
Используйте Math.random(), чтобы сгенерировать случайное десятичное число.
Умножьте сгенерированное случайное десятичное число на 10.
Примените Math.floor(), чтобы округлить это число вниз до ближайшего целого.
Имейте в виду, что Math.random() никогда не возвращает 1, поэтому вы никогда
не получите 10, так как при округлении с помощью Math.floor() число всегда 
будет округляться вниз.*/

