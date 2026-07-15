// Print all Divisors

function getDivisors(num) {

    for (let i = 1; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            console.log(i)

            if ((num / i) != i) {
                console.log(num / i)
            }
        }
    }
}

// getDivisors(9)
// getDivisors(12)
// getDivisors(19)
getDivisors(36)
// getDivisors(40)