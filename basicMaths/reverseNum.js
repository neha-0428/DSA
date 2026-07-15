// Reverse a number

function reverse(num) {
    let reverseNum = 0

    while (num > 0) {
        let digit = num % 10;

        reverseNum = (reverseNum * 10) + digit

        num = Math.trunc(num / 10)
    }

    return reverseNum

}

console.log(reverse(10284))
console.log(reverse(1028))
console.log(reverse(102))
console.log(reverse(1))