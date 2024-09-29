// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  /*Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array. */
  function updateRecords(records, id, prop, value) {
    const album = records[id]; //извлекаем альбом из коллекции records по идентификатору id.
    if (value === "") {
      delete album[prop]; /*Если значение value является пустой строкой (""), 
       это означает, что свойство должно быть удалено из альбома.
       Мы используем оператор delete, чтобы удалить указанное свойство.*/
    } else if (prop !== "tracks") {
      album[prop] = value; /*Если свойство не равно "tracks", 
      мы устанавливаем его в новое значение value.*/
    } else {
      album["tracks"] = album["tracks"] || [];
      album["tracks"].push(value); /*Если свойство prop равно "tracks", мы сначала 
      проверяем, существует ли уже массив tracks. Если он не существует, инициализируем 
      его пустым массивом. Затем добавляем новое значение  value в массив tracks с 
      помощью метода push. */
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');