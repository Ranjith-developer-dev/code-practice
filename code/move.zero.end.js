const moveZeroes = (arr) => {
    let c = 0;
    let n = arr.length;

    for (i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[c]] = [arr[c], arr[i]];
            c++;
        }
    }
    return arr;
};

const check = moveZeroes([0, 0, 3, 45, 5]);
console.log("🚀 ~ check:", check);

const arr = [1, 0, 2, 5, 0, 1, 0, 4, 0, 2];

//Need to move zero at last

let result = [];
let zeroCount = 0;

for (const a of arr) {
    if (a === 0) {
        zeroCount++;
    } else {
        result.push(a);
    }
}

while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
}

console.log(result);


