   
function fibonacci_recursive (num) {
    if ( num <= 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2);
    }
}
         
const button = document.getElementById('button');
var listNumbers = ''

const state = 
{
    inputNumber: 0,
    msg: null
}
button.addEventListener('click', function (e) { 
    const number = document.getElementById('number');
    const answer = fibonacci_recursive(number.value);
    if(answer === 1) {   
        state.msg = `Result: ${'poo poo pee pee'}`;
    }
    result.innerText = state.msg;
});


function handleUnder0(numberValue){
    listNumbers += fibonacci_recursive(numberValue);
}

function answer (numberValue) {
    let count = 1;
    
    if(numberValue <= 0) {
        handleUnder0(listNumbers)
    } else if(numberValue == 1) {
        listNumbers += fibonacci_recursive(numberValue);
    } else {
        while(count <= numberValue) {
            listNumbers += fibonacci_recursive(count) + ',' + ' ';
        }
    }
    
    return log(listNumbers);
} 

function writeMessage(res) {
    return 'Result: ' + res;
}

function log(listNumbers) {
    state.msg        = writeMessage(listNumbers);
    const result = document.getElementById('result');
    result.innerText = state.msg;
}

