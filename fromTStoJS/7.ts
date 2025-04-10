type StudentType = {
    id: number
    name: string
}
type FriendsType = {
    [key: string]: Array<string>
}
export const students: Array<StudentType> = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Charley" },
]
export const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}
console.log(friends[3][1])
//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут:  friends[3][1]?