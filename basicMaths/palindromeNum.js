// Palindrome Number

function palindrome(num) {
    let inputNum = num
    let reverseNum = 0

    while (num > 0) {
        let digit = num % 10;

        reverseNum = (reverseNum * 10) + digit

        num = Math.trunc(num / 10)
    }

    if (inputNum === reverseNum) {
        return true
    }

    return false


}

console.log(palindrome(12521))
console.log(palindrome(4852))
console.log(palindrome(6606))