

//every function returns true/false;

function isPalindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}


const count = isPalindrome('madam')
console.log("🚀 ~ count:", count)
