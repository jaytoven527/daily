const assert = require('assert');

function fibonacci_loop(num){
    var numA, numB;
        numA = 1;
        numB = 0;
        
    var outputNum;
    let stopTracker = num;
    while(stopTracker > 0) {
        var previousNum, nextNum;
        
        nextNum     = numA + numB;
        
        previousNum = numA;
        numB        = previousNum;
        numA        = nextNum;
        outputNum   = numA;
        
        stopTracker--;
    }
    return outputNum;
}


assert(fibonacci_loop(1) === 1);
assert(fibonacci_loop(2) === 1);
assert(fibonacci_loop(3) === 2);
assert(fibonacci_loop(4) === 3);
assert(fibonacci_loop(5) === 5);
assert(fibonacci_loop(6) === 8);
assert(fibonacci_loop(7) === 13);