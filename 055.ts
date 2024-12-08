const toKebabCase = (str: string) => {
    let words: string[] = str.split(/[_\s]/);
    let kebabWords: string[] = words.map(w => w.toLowerCase());
    return kebabWords.join('-');
}
console.log(toKebabCase("hello_from   incubator from Minsk"));
