const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
   
  
  
  lookUpProfile("Akira", "likes"); /*Когда вызывается lookUpProfile("Akira", "likes"), функция выполняет следующее:
  Ищет в contacts контакт с firstName, равным "Akira".
  Находит его и проверяет, есть ли свойство "likes".
  Находит свойство "likes" и возвращает его значение: ["Pizza", "Coding", "Brownie Points"].
  Таким образом, вызов lookUpProfile("Akira", "likes") вернёт массив, содержащий увлечения контакта "Akira".
  Если вы попытаетесь вызвать функцию с именем, которого нет в массиве, например, lookUpProfile("John", "likes"), 
  вы получите "No such contact". А если вы спросите существующий контакт, 
  но укажите несуществующее свойство, например, lookUpProfile("Akira", "age"), вы получите "No such property".*/