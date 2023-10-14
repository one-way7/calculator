const numbersButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.input');
const arithmeticOperatorBtns = document.querySelectorAll('.arithmeticOperator');
const equalSign = document.querySelector('.equal');

let firstNumber = null;
let secondNumber = null;
let operator; 
let displayValue = 0;
let resultValue = 0;

numbersButtons.forEach(btn => btn.addEventListener('click', displayNumber))
arithmeticOperatorBtns.forEach(btn => btn.addEventListener('click', e => {
    if (secondNumber === null) {
        operator = e.target.textContent;
        return;
    }

    switch (operator) {
        case '+': 
            resultValue = add(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '-': 
            resultValue = subtract(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '*': 
            resultValue = multiply(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '/': 
            resultValue = divide(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 10)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '%': 
            resultValue = divideWithRemainder(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
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
            if (secondNumber === null) return;
           
            resultValue = add(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
        case '-':
            if (secondNumber === null) return;

            resultValue = subtract(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
        case '*': 
            if (secondNumber === null) return;

            resultValue = multiply(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
        case '/':
            if (secondNumber === null) return;

            resultValue = divide(firstNumber, secondNumber);

            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 10)
            }
            
            display.textContent = resultValue;
            break;
        case '%':
            if (secondNumber === null) return;

            resultValue = divideWithRemainder(firstNumber, secondNumber);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
    }
}

function displayNumber(e) {
    if (operator === undefined) {

        if (firstNumber === null) {
            displayValue = e.target.textContent;

            firstNumber = +displayValue;
        } else {
            if (firstNumber.toString().length > 8) return;
           
            displayValue += e.target.textContent;

            firstNumber = +displayValue;
        }
    
        display.textContent = displayValue;
    } else {
        
        if (secondNumber === null) {
            displayValue = e.target.textContent;

            secondNumber = +displayValue;
        } else {
            if (secondNumber.toString().length > 8) return;
            displayValue += e.target.textContent;

            secondNumber = +displayValue;
        }
    
        display.textContent = displayValue;
    }
}