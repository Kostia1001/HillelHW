const arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => arr.filter((item) => item >= a && item <= b)

const filtered = filterRange(arr, 1, 5)
alert(filtered)
alert(arr)