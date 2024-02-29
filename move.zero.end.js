const moveZeroes = (arr) => {
    let c = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[c]] = [arr[c], arr[i]];
            c++;
        }
    }
    return arr;
};

const check = moveZeroes([0, 0, 3, 45, 5])
console.log("🚀 ~ check:", check)
