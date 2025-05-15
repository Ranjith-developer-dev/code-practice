const arr = [
    [1, 3, 4, 6],
    [4, 5, 2, 8],
    [7, 3, 8, 3, 9],
];

// Array.prototype.myFlat = () => {
//     let Arr = [];

//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].length; j++) {
//             Arr.push(arr[i][j]);
//         }
//     }
//     return Arr;
// };

// // const newArray = arr.flat()
// // console.log("🚀 ~ newArray:", newArray)

// console.log(arr.myFlat());

const uniq = [1, 2, 3, 4, 1, 1, 2, 3, 4, 2, 1];

// function findOccurrence(arr) {
//     const countMap = new Map();

//     for (const a of arr) {
//         countMap.set(a, countMap.get(a) + 1 || 1);
//     }

//     return countMap;
// }

// function usingReduce(arr) {
//     return arr.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1;

//         return acc;
//     }, {});
// }

// console.log(findOccurrence(uniq));

// console.log(usingReduce(uniq));

function findTheOccurence(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});
}

console.log(findTheOccurence(uniq));
