function isPalindrome (x) {
    let originalNum = x;

    let reverse = 0;

    while (originalNum > 0) {
        let digit = Math.trunc(originalNum % 10)
        reverse = (reverse * 10) + digit
        originalNum = Math.trunc(originalNum / 10)
    }

    if (reverse === x) {
        return true
    }

    return false
    
};

console.log(isPalindrome(121));
