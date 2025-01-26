var calculateAge = (b, c) => {
    r = c - b;
    switch (true) {
        case (r > 1): 
            return "You are " + r + " years old."; 
        case (r === 1): 
            return "You are 1 year old."; 
        case (r === 0): 
            return "You were born this very year!"; 
        case (r === -1): 
            return "You will be born in 1 year."; 
        case (r < -1): 
            return "You will be born in " + (-r) + " years."; 
    }
}

console.log(calculateAge(2001,2003))
