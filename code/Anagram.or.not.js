const str1 = 'Sandip'
const str2 = 'pidnaS'
const st1 = str1.split('')
const st2 = str2.split('')
const item = st1.filter((v) => !st2.includes(v))
const result = item.length === 0 ? 'Anagram' : 'Not anagram' + ' Difference - ' + item;
console.log(result)