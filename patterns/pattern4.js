
function pattern(n) {
    for (let i = 0; i < n; i++) {

        // Space
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
            // process.stdout.write('   ')
        }

        // *
        for (let j = 1; j <= (2 * i) + 1; j++) {
            process.stdout.write('*')
        }

        console.log()
    }
}

pattern(5)


function pattern1(n) {
    for (let i = 0; i < n; i++) {

        // space
        for (let j = 0; j < i; j++) {
            process.stdout.write(' ')
        }

        // *
        for (let j = (2 * n) - i - 1; j > i; j--) {
            process.stdout.write('*')
        }

        console.log();
        
    }
}

pattern1(5)



// Time Complexity = O(N2) (from both outer and inner loop)
// Space Complexity = O(1)