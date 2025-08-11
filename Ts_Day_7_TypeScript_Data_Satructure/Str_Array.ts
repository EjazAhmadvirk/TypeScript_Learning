let fruits: string[] = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);


/*
These are the methods of the Array class:
push(value: T): number
pop(): T | undefined
shift(): T | undefined
unshift(value: T): number
splice(start: number, deleteCount?: number, ...items: T[]): T[]
slice(start: number, end?: number): T[]
concat(...arrays: T[][]): T[]
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void
*/

fruits.pop(); // remove the last element
console.log(fruits);
fruits.shift(); // remove the first element
console.log(fruits);
fruits.unshift("apple"); // add an element to the beginning
console.log(fruits);
fruits.splice(1, 1); // remove an element from the array
console.log(fruits);
fruits.slice(1, 2); // return a new array with the elements from the start to the end
console.log(fruits);
fruits.concat(["orange", "mango"]); // return a new array with the elements of the two arrays
console.log(fruits);





