
function print1(i, n) {
    if (i < 1) return

    console.log(i);
    print1(i-1, n)
}

print1(5, 5)

function print2(n) {
    if (n < 1) return 

    console.log(n);
    print2(n-1)
    
}

print2(5)

// Time Complexity = O(N)
// Space Complexity = O(N)