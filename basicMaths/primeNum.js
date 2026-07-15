// Check for Prime Number

function isPrime(num) {
    let isPrimeDivisor = false;

    for (let i = 1; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            if (i !== 1 && i !== num) {
                return false
            }
        }
    }

    return true

}

console.log(isPrime(9))
console.log(isPrime(19))
console.log(isPrime(91))