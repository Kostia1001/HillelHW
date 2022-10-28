const min = (a, b) => {
    if (a < b) return a;
    if (a > b) return b; 
    return a;
    
//    return a < b ? a : b < a ? b : a ;   
}
console.log(min(4, 4))

