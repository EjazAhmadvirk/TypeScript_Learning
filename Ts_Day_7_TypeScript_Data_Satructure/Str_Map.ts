let myMap: Map<string, string> = new Map();
myMap.set("name", "Ejaz"); // key, value        
myMap.set("country", "Pakistan");
console.log(myMap);
console.log(myMap.get("name")); // get the value of the key

// Iterate over the map
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Iterate over the map using forEach