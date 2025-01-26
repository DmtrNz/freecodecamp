// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
    let result
    (old<=13 
        ? result="drink toddy" 
        : old<=17
            ? result="drink coke"
            : old<21
                ? result="drink beer"
                : old>=21
                    ? result="drink whisky"
                    : result="")
    return result
};

console.log(peopleWithAgeDrink(10));
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(14));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(21));
console.log(peopleWithAgeDrink(33));