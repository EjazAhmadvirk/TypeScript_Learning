// TypeScript supports types for variables to prevent errors
let username: string = "Ejaz"; // string type
let age: number = 25;          // number type
let isActive: boolean = true;  // boolean type
let hobbies: string[] = ["Coding", "Reading"]; // array of strings

// Tuple: fixed-length array with specified types
let address: [string, number] = ["Street 123", 101];

// Enum: set of named constants
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let userRole: Role = Role.Admin;

// Any type (avoid if possible)
let randomValue: any = 10;
randomValue = "Now a string"; // allowed
