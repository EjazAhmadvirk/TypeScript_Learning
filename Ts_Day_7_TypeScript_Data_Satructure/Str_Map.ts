let myMap: Map<string, string> = new Map();
myMap.set("name", "Ejaz"); // key, value        
myMap.set("country", "Pakistan");
console.log(myMap); // print the map
console.log(myMap.get("name")); // get the value of the key

// Iterate over the map
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Iterate over the map using forEach


/*
These are the methods of the Map class:
set(key: K, value: V): this
get(key: K): V | undefined
delete(key: K): boolean
clear(): void
size: number
keys(): IterableIterator<K>
values(): IterableIterator<V>
entries(): IterableIterator<[K, V]>
*/

myMap.delete("country"); // delete the key
console.log(myMap);     //output: Map(1) { 'name' => 'Ejaz' }
myMap.clear(); // clear the map
console.log(myMap);     //output: Map(0) {}
myMap.set("name", "Ejaz"); // set the key
console.log(myMap);     //output: Map(1) { 'name' => 'Ejaz' }
myMap.set("country", "Pakistan"); // set the key
console.log(myMap);     //output: Map(2) { 'name' => 'Ejaz', 'country' => 'Pakistan' }
myMap.set("city", "Karachi"); // set the key
console.log(myMap);     //output: Map(3) { 'name' => 'Ejaz', 'country' => 'Pakistan', 'city' => 'Karachi' }





