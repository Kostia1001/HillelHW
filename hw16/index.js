let obj = {
    width: 200,
    height: 300,
    title: "My menu"
};
let multiplyNumeric = obj => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') obj[key] += obj[key]
    }
}
multiplyNumeric(obj)

console.log(obj)