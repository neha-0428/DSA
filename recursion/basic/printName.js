
// Understand recursion by print something N times

function printName(i, n) {

    if (i === n) {
        return
    }

    console.log("Neha")

    return printName(i+1, n)
}

console.log(printName(0, 5))