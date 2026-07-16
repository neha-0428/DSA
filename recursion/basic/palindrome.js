
function palindrome(i, str) {

    if (i >= Math.floor(str.length / 2)) {
        return true
    }

    if (str[i] !== str[str.length - i - 1]) {
        return false
    }

    return palindrome(i + 1, str)
}

console.log(palindrome(0, "madam"))
console.log(palindrome(0, "neha"))
console.log(palindrome(0, "dadar"))
console.log(palindrome(0, "radar"))