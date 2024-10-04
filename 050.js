const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Создаем массив для хранения элементов списка
    const failureItems = []; // Инициализируем массив вне цикла
  
    // Проходим по каждому элементу переданного массива
    for (let i = 0; i < arr.length; i++) {
      // Добавляем элемент в массив с помощью push
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
  
    // Возвращаем все элементы списка, объединенные в строку
    console.log( failureItems); // Объединяем все элементы списка в строку
  }
  
  const failuresList = makeList(result.failure);