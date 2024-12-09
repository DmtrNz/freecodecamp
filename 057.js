function hello(name = "") {
    if (name.length === 0) {
        return "Hello, World!";
    }

    const rightName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${rightName}!`;
}

//const hello = s =>
//    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;