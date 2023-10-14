const numbersButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.input');
const arithmeticOperatorBtns = document.querySelectorAll('.arithmeticOperator');
const equalSign = document.querySelector('.equal');

let firstNumber = 0;
let secondNumber = 0;
let operator; 
let displayValue = 0;
let resultValue = 0;

numbersButtons.forEach(btn => btn.addEventListener('click', displayNumber))
arithmeticOperatorBtns.forEach(btn => btn.addEventListener('click', e => {
    if (secondNumber === 0) {
        operator = e.target.textContent;
        return;
    }

    switch (operator) {
        case '+': 
            resultValue = add(firstNumber, secondNumber);
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = 0;
            operator = operator = e.target.textContent;
            break;
        case '-': 
            resultValue = subtract(firstNumber, secondNumber);
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = 0;
            operator = operator = e.target.textContent;
            break;
        case '*': 
            resultValue = multiply(firstNumber, secondNumber);
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = 0;
            operator = operator = e.target.textContent;
            break;
        case '/': 
            resultValue = divide(firstNumber, secondNumber);
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = 0;
            operator = operator = e.target.textContent;
            break;
        case '%': 
            resultValue = divideWithRemainder(firstNumber, secondNumber);
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = 0;
            operator = operator = e.target.textContent;
            break;
    }
    
}));
equalSign.addEventListener('click', () => operate(firstNumber, secondNumber, operator))

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function divideWithRemainder(a, b) {
    return a % b;
}

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            if (secondNumber === 0) return;
           
            display.textContent = add(firstNumber, secondNumber);
            
            break;
        case '-':
            if (secondNumber === 0) return;

            display.textContent = subtract(firstNumber, secondNumber);
            
            break;
        case '*': 
            if (secondNumber === 0) return;

            display.textContent = multiply(firstNumber, secondNumber);
            
            break;
        case '/':
            if (secondNumber === 0) return;

            display.textContent = divide(firstNumber, secondNumber);
            
            break;
        case '%':
            if (secondNumber === 0) return;

            display.textContent = divideWithRemainder(firstNumber, secondNumber);
            
            break;
    }
}

function displayNumber(e) {
    if (operator === undefined) {

        if (firstNumber === 0) {
            displayValue = e.target.textContent;

            firstNumber = +displayValue;
        } else {
            displayValue += e.target.textContent;

            firstNumber = +displayValue;
        }
    
        display.textContent = displayValue;
    } else {
        
        if (secondNumber === 0) {
            displayValue = e.target.textContent;

            secondNumber = +displayValue;
        } else {
            displayValue += e.target.textContent;

            secondNumber = +displayValue;
        }
    
        display.textContent = displayValue;
    }
}

