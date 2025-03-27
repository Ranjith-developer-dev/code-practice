function capitalize(str) {
    return str
        .split(' ')
        .map(word => {
            console.log(">>>>>>>>>", word);
            word[0].toUpperCase() + word.slice(1)} ).join(' ');
}

const cap = capitalize("check the word")
console.log("🚀 ~ cap:", cap)
