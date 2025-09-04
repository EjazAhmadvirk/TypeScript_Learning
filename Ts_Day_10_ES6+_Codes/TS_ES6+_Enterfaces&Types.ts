// Interface defines the structure of an object
interface User {
    id: number;
    name: string;
    email?: string; // optional property
    role: Role;
}

// Function using interface as parameter type
function printUser(user: User): void {
    console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
}

// Type alias
type ID = number | string;
let userId: ID = 123;
