
function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i + ' ')
        }
        console.log();
    }
}

pattern(4)


function pattern1(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            process.stdout.write('* ')
        }
        console.log();
    }
}

pattern1(4)

function pattern2(n) {
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j +' ')
        }
        console.log();
    }
}

pattern2(4)


//Time Complexity = approx O(N2)
// Space Complexity = O(1)