function covertToCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage
console.log(covertToCamelCase("sum sum soo")); // sumSumSoo