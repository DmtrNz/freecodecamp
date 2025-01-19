/* Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" */


function whatday(num) {
    let dayName;

    switch (num) {
        case 1:
            dayName = "Sunday";
            break;

        case 2:
            dayName = "Monday";
            break;

        case 3:
            dayName = "Tuesday";
            break;

        case 4:
            dayName = "Wednesday";
            break;

        case 5:
            dayName = "Thursday";
            break;

        case 6:
            dayName = "Friday";
            break;

        case 7:
            dayName = "Saturday";
            break;

        default:
            dayName = 'Wrong, please enter a number between 1 and 7'
    }
    return dayName;
}

console.log(whatday(0));