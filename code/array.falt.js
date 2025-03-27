const arr = [[1, 3, 4, 6], [4, 5, 2, 8], [7, 3, 8, 3, 9]];
Array.prototype.myflat = () => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j])
        }
    }
    return newArr
}

// const newArray = arr.flat()

// console.log(">>>>>>>>>>>>>", newArray);
console.log(arr.myflat());
