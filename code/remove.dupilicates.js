function removeDuplicates(array) {
    return [...new Set(array)];
}

const remove1 = removeDuplicates([1, 3, 4, 1, 6, 7, 3]);
console.log("🚀 ~ remove1:", remove1);

function removeDup(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (tempArr.indexOf(arr[i]) < 0) {
            tempArr.push(arr[i]);
        }
    }
    console.log(tempArr);
}

function removeDup1(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!tempArr.includes(arr[i])) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
removeDup([1, 3, 4, 1, 6, 7, 3]);

// const remove = removeDuplicates([1, 3, 4, 1, 6, 7, 3])
// console.log("🚀 ~ remove:", remove)

const remove = removeDup1([1, 3, 4, 1, 6, 7, 3]);
console.log("🚀 ~ remove:", remove);
