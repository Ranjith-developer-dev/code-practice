function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = ' '.repeat(rows - i);
        str += '*'.repeat(2 * i - 1);
        console.log(str);
    }
}

// Example usage:
const rows = 20;
printPyramid(rows);