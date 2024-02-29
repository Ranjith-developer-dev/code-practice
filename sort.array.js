console.log(sortingAsc([5, 9, 2, 6, 0, 12, 4, 88]))
//ascending
function sortingAsc(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
//descending
console.log(sortingDesc([5, 9, 2, 6, 0, 12, 4, 88]))
function sortingDesc(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

// can we do like this 

const array = [5, 9, 2, 6, 0, 12, 4, 88];

const sortAsc = array.sort((a, b) => { return a - b })
console.log("🚀 ~ sortAsc:", sortAsc)

const sortDesc = array.sort((a, b) => { return b - a })
console.log("🚀 ~ sortDesc:", sortDesc)
