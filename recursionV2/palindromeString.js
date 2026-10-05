
function palindrome(str, i) {
    let midIndex = (str.length / 2) | 0
    if (i >= midIndex) return true

    if (str[i] !== str[str.length - i - 1]) return false
    
    return palindrome(str, i+1)
}

console.log(palindrome('abba', 0))
console.log(palindrome('abb', 0))
console.log(palindrome('madam', 0))