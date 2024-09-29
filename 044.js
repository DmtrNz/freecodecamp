function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum) {
      return [startNum]; /*Базовый случай. Здесь мы проверяем, равны ли startNum и endNum. 
      Если они равны, это означает, что мы достигли конца диапазона. В этом случае 
      мы возвращаем массив, содержащий только одно число: startNum. */
    } else {
      let arr = rangeOfNumbers(startNum, endNum-1);
      arr.push(endNum);
      return arr; /*Рекурсивный случай.  Если startNum не равен endNum, выполняются следующие шаги:
         Функция вызывает саму себя (рекурсия) с endNum уменьшенным на 1: rangeOfNumbers(startNum, endNum - 1). 
      Это позволяет постепенно уменьшать значение endNum до тех пор, пока оно не станет равным startNum.
        Результат вызова рекурсивной функции (массив) сохраняется в переменной arr.
        В конец этого массива arr добавляется текущее значение endNum при помощи метода push().
        Наконец, функция возвращает обновленный массив arr.*/
    }
  };
  
  /*The function should return an array of integers which begins with a number 
  represented by the startNum parameter and ends with a number represented by the 
  endNum parameter. The starting number will always be less than or equal to the 
  ending number. Your function must use recursion by calling itself and not use 
  loops of any kind. It should also work for cases where both startNum and endNum 
  are the same. */