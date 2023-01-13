function unique(arr) {
    const set = new Set(arr)
    let uniqueArr = []
    set.forEach(e => {uniqueArr.push(e)})
    return uniqueArr
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O