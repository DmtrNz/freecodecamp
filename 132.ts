function mapArray<T, V>(arg: T[], func: (item: T) => V): V[] {
    return arg.map(func)
}

// function mapArray (arg: number[], func: (item: number)=>string):string[]{
//   return arg.map(func)
// }

// function mapArray (arg: string[], func: (item: string)=>number):number[]{
//   return arg.map(func)
// }

// Пример 1: Преобразование чисел в строки
const numbers = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`
console.log(mapArray(numbers, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]

// Пример 2: Преобразование строк в их длины
const words = ['hello', 'world', 'typescript']
const getLength = (word: string) => word.length
console.log(mapArray(words, getLength)) // [5, 5, 10]

// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
    { name: 'Agnes', age: 25 },
    { name: 'Robert', age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`

console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]