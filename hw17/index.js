let arr = [
{ name: "User1", age: 25},
{ name: "User2", age: 30},
{ name: "User3", age: 28}
];

let sortByAge = arr => arr.sort((a, b) => a.age - b.age)

console.log(sortByAge(arr))

