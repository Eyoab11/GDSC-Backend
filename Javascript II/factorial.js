
function factorial(x) {
    if (x == 1) {
        return 1
    }
    else if (x == 2) {
        return 2
    }
    else{
        return x * factorial(x - 1)
    }

}

console.log(factorial(10));  // change x to whatever you want