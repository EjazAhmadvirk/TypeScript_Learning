let age: number = 25;
let name: string = "Ejaz";
let isActive: boolean = true;
let items: number[] = [1, 2, 3];
let user: { name: string; age: number } = { name: "Ejaz", age: 21 };


console.log(`User: ${user.name}, Age: ${user.age}, Active: ${isActive}`);
console.log(name, age, items);
console.log(`Items: ${items.join(", ")}`);
console.log(`Is Active: ${isActive}`);