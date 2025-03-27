

function countVowles(str) {
    let vowlesCount = 0;
    const vowles = ['a', 'e', 'i', 'o', 'u']
    for (let s of str) {
        if (vowles.includes(s.toLowerCase())) {
            vowlesCount++;
        }
    }
    return vowlesCount;
}

const count = countVowles('Ranjith')
console.log("🚀 ~ count:", count)
