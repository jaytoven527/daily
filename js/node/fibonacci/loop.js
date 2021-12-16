const assert = require('assert');

function fibonacci_loop(num){
    var current = 1, previous = 0;

    let outputNum;
    let stopTracker = num;
    while (stopTracker > 0) {
        outputNum = current;
        var next, nextPrevious;
        next         = current + previous;
        nextPrevious = current;
        previous = nextPrevious;
        current  = next;
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
