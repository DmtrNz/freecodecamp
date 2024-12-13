// Пример битового присваивания
let a = 5; // 0101 в двоичной системе
let b = 3; // 0011 в двоичной системе

// Битовое И
let andResult = a & b; // 0001 в двоичной системе
console.log(`a & b = ${andResult}`); // 1

// Битовое ИЛИ
let orResult = a | b; // 0111 в двоичной системе
console.log(`a | b = ${orResult}`); // 7

// Битовое ИСКЛЮЧАЮЩЕЕ ИЛИ
let xorResult = a ^ b; // 0110 в двоичной системе
console.log(`a ^ b = ${xorResult}`); // 6

// Битовое НЕ
let notResult = ~a; // 111111111111111111111111111110100 в двоичной системе (для 32-битных чисел)
console.log(`~a = ${notResult}`); // -6

// Битовый сдвиг влево
let leftShiftResult = a << 1; // 1010 в двоичной системе
console.log(`a << 1 = ${leftShiftResult}`); // 10

// Битовый сдвиг вправо
let rightShiftResult = a >> 1; // 0010 в двоичной системе
console.log(`a >> 1 = ${rightShiftResult}`); // 2

// Битовый сдвиг вправо с заполнением нулями
let zeroFillRightShiftResult = a >>> 1; // 0010 в двоичной системе
console.log(`a >>> 1 = ${zeroFillRightShiftResult}`); // 2

// Пример битового присваивания
a &= b; // a = a & b
console.log(`a &= b; a = ${a}`); // a = 1

a |= b; // a = a | b
console.log(`a |= b; a = ${a}`); // a = 3

a ^= b; // a = a ^ b
console.log(`a ^= b; a = ${a}`); // a = 0

a <<= 1; // a = a << 1
console.log(`a <<= 1; a = ${a}`); // a = 0

a >>= 1; // a = a >> 1
console.log(`a >>= 1; a = ${a}`); // a = 0

a >>>= 1; // a = a >>> 1
console.log(`a >>>= 1; a = ${a}`); // a = 0
