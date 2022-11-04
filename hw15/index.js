const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

const sumItem = objSum => Object.values(objSum).reduce((accum, elem) => objSum !== {} ? sum = accum + elem : 0)
sumItem(salaries)

console.log(sum)

//   });
// if(salaries !== {}) {
//     for (let key in salaries) { 
//         sum += salaries[key]
//     }    
// }