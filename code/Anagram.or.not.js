function isAnagram(str1, str2) {
    const normalize = (str) => str.toLowerCase().split("").sort().join("");

    const sortedStr1 = normalize(str1);
    const sortedStr2 = normalize(str2);

    if (sortedStr1 === sortedStr2) {
        return "Anagram";
    } else {
        return `Not anagram. Difference - ${sortedStr1} vs ${sortedStr2}`;
    }
}

const result = isAnagram("Sandip", "pidnaS");
console.log(result);



