function getDayName(dayIndex) {
    let dayName;

    switch (dayIndex) {
        case 0:
            dayName = "Воскресенье";
            break;
        case 1:
            dayName = "Понедельник";
            break;
        case 2:
            dayName = "Вторник";
            break;
        case 3:
            dayName = "Среда";
            break;
        case 4:
            dayName = "Четверг";
            break;
        case 5:
            dayName = "Пятница";
            break;
        case 6:
            dayName = "Суббота";
            break;
        default:
            dayName = "Некорректный индекс дня";
    }

    return dayName;
}

// Пример использования:
const dayIndex = 3; // Среда
console.log(getDayName(dayIndex)); // Вывод: Среда
