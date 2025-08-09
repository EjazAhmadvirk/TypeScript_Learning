let str: string = "TypeScript";

// Length of string
console.log(str.length); // 10

// Convert to uppercase & lowercase
console.log(str.toUpperCase()); // "TYPESCRIPT"
console.log(str.toLowerCase()); // "typescript"

// Access character by index
console.log(str[0]); // "T"

// Substring & Slice
console.log(str.substring(0, 4)); // "Type"
console.log(str.slice(4)); // "Script"

// Replace
console.log(str.replace("Type", "Java")); // "JavaScript"

// Includes
console.log(str.includes("Script")); // true

// Split into array
console.log(str.split("")); // ["T","y","p","e","S","c","r","i","p","t"]

// Trim spaces
let spaced = "   Hello   ";
console.log(spaced.trim()); // "Hello"
