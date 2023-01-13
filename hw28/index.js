let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys())

// Error: keys.push is not a function
// Помилка: keys.push - це не функція
keys.push("more");