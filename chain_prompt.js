function toKebabCase(str) {
    return str
        .split(' ')
        .join('-')
        .toLowerCase();
}

// Test cases
console.log(toKebabCase('Hello World')); // hello-world
console.log(toKebabCase('JavaScript Programming Language')); // javascript-programming-language
console.log(toKebabCase('convert this to kebab case')); // convert-this-to-kebab-case
console.log(toKebabCase('single')); // single
console.log(toKebabCase('Multiple   Spaces')); // multiple-spaces