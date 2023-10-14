const numbersButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.input');
const arithmeticOperatorBtns = document.querySelectorAll('.arithmeticOperator');
const equalSign = document.querySelector('.equal');
const allClearBtn = document.querySelector('.allClear');
const clearBtn = document.querySelector('.clear');

let firstNumber = null;
let secondNumber = null;
let operator = null; 
let displayValue;

numbersButtons.forEach(btn => btn.addEventListener('click', e => showNumberOnDisplay(e, firstNumber, secondNumber, operator)));
arithmeticOperatorBtns.forEach(btn => btn.addEventListener('click', e => calculate(e, firstNumber, secondNumber, operator)));
equalSign.addEventListener('click', () => operate(firstNumber, secondNumber, operator));
allClearBtn.addEventListener('click', allClear);
clearBtn.addEventListener('click', clear);

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

function showNumberOnDisplay(e, firstOperand, secondOperand, mathOperator) {
    if (mathOperator === null) {
        
        if (firstOperand === null) { 
            displayValue = e.target.textContent;

            firstNumber = +displayValue;
        } else { 
            
            if (displayValue.length > 8) return;
           
            displayValue += e.target.textContent;

            firstNumber = +displayValue;
        }
        
        display.textContent = displayValue;
    } else {
        
        if (secondOperand === null) {
            
            displayValue = e.target.textContent;

            secondNumber = +displayValue;
        } else {

            if (displayValue.length > 8) return;
            displayValue += e.target.textContent;

            secondNumber = +displayValue;
        }
    
        display.textContent = displayValue;
    }
}

function calculate(e, firstOperand, secondOperand, mathOperator) {
    if (secondOperand === null) {
        operator = e.target.textContent;
        return;
    }
    
    switch (mathOperator) {
        case '+': 
            displayValue = add(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9)
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            operator = e.target.textContent;
            break;
        case '-': 
            displayValue = subtract(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9)
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '*': 
            displayValue = multiply(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9)
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '/':
            displayValue = divide(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 10)
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '%': 
            displayValue = divideWithRemainder(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9)
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
    }
}

function operate(firstOperand, secondOperand, mathOperator) {
    switch (mathOperator) {
        case '+':
            if (secondOperand === null) return;
           
            displayValue = add(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9);
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            break;
        case '-':
            if (secondOperand === null) return;

            displayValue = subtract(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9);
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            break;
        case '*': 
            if (secondOperand === null) return;

            displayValue = multiply(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9);
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            break;
        case '/':
            if (secondOperand === null) return;
            if (secondOperand === 0) {
                display.textContent = 'Error';
                clear();
                return;
            }
            
            displayValue = divide(firstOperand, secondOperand);

            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 10);
            }
            
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            break;
        case '%':
            if (secondOperand === null) return;

            displayValue = divideWithRemainder(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9)
            }
            display.textContent = displayValue;
            firstNumber = displayValue;
            secondNumber = null;
            break;
    }
}

function allClear() {
    firstNumber = null;
    secondNumber = null;
    operator = null; 
    displayValue;
    displayValue;
    display.textContent = '';
}

