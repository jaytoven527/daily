


function fibonacci_loop (num) {
    
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


    var input, submit, result, msg, i, inputValue;
    i = 1;
    msg = '';
    input = document.getElementById('input');
    submit = document.getElementById('submit');
    result = '';

    function resultReturned () {
     inputValue = input.value;
         while (i <= inputValue) {
             msg += fibonacci_loop(i) + ',' + ' ';
             i++;
             }
        
            
    var el = document.getElementById('result');
    result = 'Result: ' + msg;
    el.innerHTML = result;
    console.log(msg)
               
}






