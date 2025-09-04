// Traditional function
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function (more concise)
const addArrow = (a: number, b: number): number => {
    return a + b;
}

// If function body is a single expression, you can omit braces and return
const addShort = (a: number, b: number): number => a + b;

console.log(addArrow(5, 3));  // 8
console.log(addShort(10, 2)); // 12
