
function max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    console.log(max)
}
max([2, 5, 3, 1, 8, 4])

const array = [2, 5, 3, 1, 8, 4]

const min = array.reduce((cur, acc) => {

    return cur < acc ? cur : acc;
});
console.log("🚀 ~ min ~ min:", min)


const max1 = array.reduce((cur, acc) => {

    return cur > acc ? cur : acc;
});

console.log("🚀 ~ max1 ~ max1:", max1)
