let nums: Set<number> = new Set([1, 2, 3]);
nums.add(4);
console.log(nums);

/*
These are the methods of the Set class:
add(value: T): void
delete(value: T): boolean
has(value: T): boolean
clear(): void
size: number
values(): IterableIterator<T>
keys(): IterableIterator<T>
entries(): IterableIterator<[T, T]>
*/

nums.delete(2); 
console.log(nums);
nums.clear();
console.log(nums);
nums.add(1);
console.log(nums);