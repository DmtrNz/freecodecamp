function removeFirstTwo(list) {
    const [,, ...arr]=list;
    return arr;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  /*Используйте деструктурирующее присваивание с синтаксисом остатка, чтобы 
  эмулировать поведение Array.prototype.slice(). Функция removeFirstTwo() должна 
  возвращать подмассив исходного списка массива с опущенными первыми двумя элементами.*/