const numbersButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.input');
const arithmeticOperatorBtns = document.querySelectorAll('.arithmeticOperator');
const equalSign = document.querySelector('.equal');

let firstNumber = null;
let secondNumber = null;
let operator = null; 
let displayValue;
let resultValue;

numbersButtons.forEach(btn => btn.addEventListener('click', e => showNumberOnDisplay(e, firstNumber, secondNumber, operator)))
arithmeticOperatorBtns.forEach(btn => btn.addEventListener('click', e => calculate(e, firstNumber, secondNumber, operator)));
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

function operate(firstOperand, secondOperand, mathOperator) {
    switch (mathOperator) {
        case '+':
            if (secondOperand === null) return;
           
            resultValue = add(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
        case '-':
            if (secondOperand === null) return;

            resultValue = subtract(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
        case '*': 
            if (secondOperand === null) return;

            resultValue = multiply(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
        case '/':
            if (secondOperand === null) return;
            if (secondOperand === 0) {
                display.textContent = 'Error';
                return;
            }
            
            resultValue = divide(firstOperand, secondOperand);

            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 10)
            }
            
            display.textContent = resultValue;
            break;
        case '%':
            if (secondOperand === null) return;

            resultValue = divideWithRemainder(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            break;
    }
}

function showNumberOnDisplay(e, firstOperand, secondOperand, mathOperator) {
    if (mathOperator === null) {
        
        if (firstOperand === null) { 
            displayValue = e.target.textContent;

            firstNumber = +displayValue;
        } else {
            if (firstNumber.toString().length > 8) return;
           
            displayValue += e.target.textContent;

            firstNumber = +displayValue;
        }
    
        display.textContent = displayValue;
    } else {
        
        if (secondOperand === null) {
            
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

function calculate(e, firstOperand, secondOperand, mathOperator) {
    if (secondOperand === null) {
        operator = e.target.textContent;
        return;
    }

    switch (mathOperator) {
        case '+': 
            resultValue = add(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = e.target.textContent;
            break;
        case '-': 
            resultValue = subtract(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '*': 
            resultValue = multiply(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '/':
            console.log(123);
            resultValue = divide(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 10)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
        case '%': 
            resultValue = divideWithRemainder(firstOperand, secondOperand);
            if (resultValue.toString().length > 9) {
                resultValue = resultValue.toString().slice(0, 9)
            }
            display.textContent = resultValue;
            firstNumber = resultValue;
            secondNumber = null;
            operator = operator = e.target.textContent;
            break;
    }
}

