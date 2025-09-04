// Function with typed parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

// Default parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}

// Arrow function with type inference
const divide = (a: number, b: number): number => a / b;
