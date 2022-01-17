
function fib_loop (num) {
    var numA = 1;
    var numB = 0;

    let outputNum;
    let stopTracker = num;
    while (stopTracker > 0) {
        outputNum = numA;
        var result, previous;
       
        result = numA + numB;

        previous     = numA;
        numB         = previous;
        numA         = result;
        stopTracker--;

    }
    return outputNum;
}


function fib_recursive (num) {
    if ( num <= 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return fib_recursive(num - 1) + fib_recursive(num - 2);
    }
}

const number = document.getElementById('number');
const form   = document.getElementById('form');
var listNumbers = '';


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let msg = '';
    listNumbers = '';
    answer();

    msg += 'Result: ' + listNumbers;
    const result = document.getElementById('result');
    result.innerText = msg
    console.log(msg)    
})


function answer (val) {
    
var numberValue = Number(number.value);
    val = numberValue;
    if(val <= 0){
        listNumbers += 0
        return;
    }
    if(val == 1) {
        listNumbers += 1
        return;
    }
let i = 1;
    while(i <= numberValue) {
    listNumbers += fib_recursive(i) + ',' + ' ';
     i++;
    }    
}
    
