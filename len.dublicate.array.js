let array = [1, 3, 5, 2, 1, 6, 5];

// check uniquearray
const uniqueArray = [...new Set(array)]

let dublicate = uniqueArray.map((value) => [value, array.filter(str => str === value).length])

console.log("🚀 ~ dublicate:", dublicate)
