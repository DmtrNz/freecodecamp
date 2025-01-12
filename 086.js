const user = {
    name: "Artur",
    age: 93,
    friends: ["Masha", "Valera", "Eva"]
}
const firstUpdatedUser = {
    ...user,
    friends: user.friends
}
const secondUpdatedUser = {
    ...user,
    friends: [...user.friends]
}

console.log(`Is user.friends === firstUpdatedUser.friends? ${user.friends === firstUpdatedUser.friends}`)
console.log(`Is user.friends === secondUpdatedUser.friends? ${user.friends === secondUpdatedUser.friends}`)



