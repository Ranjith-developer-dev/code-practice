function removeDuplicates(array) {
    return [...new Set(array)]
}
function removeDup(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (tempArr.indexOf(arr[i]) < 0) {
            tempArr.push(arr[i])
        }
    }
    console.log(tempArr)
}
removeDup([1, 3, 4, 1, 6, 7, 3])

// const remove = removeDuplicates([1, 3, 4, 1, 6, 7, 3])
// console.log("🚀 ~ remove:", remove)
