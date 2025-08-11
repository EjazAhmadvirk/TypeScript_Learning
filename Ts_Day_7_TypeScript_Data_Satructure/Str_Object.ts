interface Student {
    name: string;
    age: number;
}
let student: Student = { name: "Ejaz", age: 21 };
console.log(student); // print the object       

console.log(student.name); // print the name
console.log(student.age); // print the age


/*
These are the methods of the Object class:
keys(): string[]
values(): any[]
entries(): [string, any][]
assign(target: Object, ...sources: Object[]): Object
create(proto: Object | null, propertiesObject?: PropertyDescriptorMap): Object
freeze(obj: Object): Readonly<T>
getOwnPropertyDescriptor(obj: Object, prop: string): PropertyDescriptor | undefined
getOwnPropertyNames(obj: Object): string[]
getOwnPropertySymbols(obj: Object): symbol[]
getPrototypeOf(obj: Object): Object | null
is(value1: any, value2: any): boolean
isExtensible(obj: Object): boolean
isFrozen(obj: Object): boolean
isSealed(obj: Object): boolean
*/
student.name = "Ali"; // change the name
console.log(student); // print the object
student.age = 22; // change the age
console.log(student); // print the object
student.name = "Ahmed"; // change the name
console.log(student); // print the object
student.age = 23; // change the age
console.log(student); // print the object

