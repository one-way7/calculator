const numbersButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.input');
const arithmeticOperatorBtns = document.querySelectorAll('.arithmeticOperator');
const equalSign = document.querySelector('.equal');
const allClearBtn = document.querySelector('.allClear');
const clearBtn = document.querySelector('.clear');

let firstNumber = null;
let secondNumber = null;
let resultValue = false;
let operator = null; 
let displayValue;

numbersButtons.forEach(btn => btn.addEventListener('click', e => showNumberOnDisplay(e, firstNumber, secondNumber, operator)));
arithmeticOperatorBtns.forEach(btn => btn.addEventListener('click', e => calculate(e, firstNumber, secondNumber, operator)));
equalSign.addEventListener('click', () => operate(firstNumber, secondNumber, operator));
allClearBtn.addEventListener('click', allClear);
clearBtn.addEventListener('click', clear);
document.addEventListener('keydown', e => {
    if (e.key === 'Backspace') clear();

    if (e.key === 'Escape') allClear();
})
document.addEventListener('keypress', e => {
    if (/[0-9.]/.test(e.key)) {
        showNumberOnDisplay(e, firstNumber, secondNumber, operator)
    }

    if (e.key === '=' || e.key === 'Enter') {
        operate(firstNumber, secondNumber, operator);
        return;
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') calculate(e, firstNumber, secondNumber, operator);

})

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
    if (e.key === undefined) {
        if (e.target.textContent === '.' && resultValue || e.target.textContent === '.' && firstOperand === null ) return;
        if (displayValue?.toString().includes('.') && e.target.textContent === '.') return;
    
        if (!mathOperator && resultValue) {
            mathOperator = null;
            firstOperand = null;
            resultValue = false;
        };
        
        if (mathOperator === null || firstOperand === 0) {
            if (firstOperand === null || (displayValue === '0' && e.target.textContent !== '.') ) { 
                
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
    } else {
        if (e.key === '.' && resultValue || e.key === '.' && firstOperand === null ) return;
        if (displayValue?.toString().includes('.') && e.key === '.') return;
    
        if (!mathOperator && resultValue) {
            mathOperator = null;
            firstOperand = null;
            resultValue = false;
        };
        
        if (mathOperator === null || firstOperand === 0) {
            if (firstOperand === null || (displayValue === '0' && e.key !== '.') ) { 
                
                displayValue = e.key;
                firstNumber = +displayValue;
            } else { 
                
                if (displayValue.length > 8) return;
            
                displayValue += e.key;
                firstNumber = +displayValue;
            }
            
            display.textContent = displayValue;
        } else {
            
            if (secondOperand === null) {
                
                displayValue = e.key;

                secondNumber = +displayValue;
            } else {

                if (displayValue.length > 8) return;
                displayValue += e.key;

                secondNumber = +displayValue;
            }
        
            display.textContent = displayValue;
        }
    }
}

function calculate(e, firstOperand, secondOperand, mathOperator) {
    if (firstOperand === null) return;
    if (e.key === undefined) {
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
                firstNumber = +displayValue;
                secondNumber = null;
                operator = e.target.textContent;
                break;
            case '-': 
                displayValue = subtract(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = operator = e.target.textContent;
                break;
            case '*': 
                displayValue = multiply(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = operator = e.target.textContent;
                break;
            case '/':
                displayValue = divide(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 10)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = operator = e.target.textContent;
                break;
            case '%': 
                displayValue = divideWithRemainder(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = operator = e.target.textContent;
                break;
        }
    } else {
        if (secondOperand === null) {
            operator = e.key;
            return;
        }
        
        switch (mathOperator) {
            case '+': 
                displayValue = add(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = e.key;
                break;
            case '-': 
                displayValue = subtract(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = e.key;
                break;
            case '*': 
                displayValue = multiply(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = e.key;
                break;
            case '/':
                displayValue = divide(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 10)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = e.key;
                break;
            case '%': 
                displayValue = divideWithRemainder(firstOperand, secondOperand);
                if (displayValue.toString().length > 9) {
                    displayValue = displayValue.toString().slice(0, 9)
                }
                display.textContent = displayValue;
                firstNumber = +displayValue;
                secondNumber = null;
                operator = e.key;
                break;
        }
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
            firstNumber = +displayValue;
            resultValue = true;
            secondNumber = null;
            operator = null;
            break;
        case '-':
            if (secondOperand === null) return;

            displayValue = subtract(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9);
            }
            display.textContent = displayValue;
            firstNumber = +displayValue;
            resultValue = true;
            operator = null;
            secondNumber = null;
            break;
        case '*': 
            if (secondOperand === null) return;

            displayValue = multiply(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9);
            }
            display.textContent = displayValue;
            firstNumber = +displayValue;
            resultValue = true;
            operator = null;
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
            firstNumber = +displayValue;
            resultValue = true;
            operator = null;
            secondNumber = null;
            break;
        case '%':
            if (secondOperand === null) return;

            displayValue = divideWithRemainder(firstOperand, secondOperand);
            if (displayValue.toString().length > 9) {
                displayValue = displayValue.toString().slice(0, 9)
            }
            display.textContent = displayValue;
            firstNumber = +displayValue;
            resultValue = true;
            operator = null;
            secondNumber = null;
            break;
    }
}

function allClear() {
    firstNumber = null;
    secondNumber = null;
    operator = null; 
    resultValue = false;
    displayValue;
    display.textContent = '';
}

function clear() {
    if (resultValue) return;
    if (displayValue === undefined) return;

    let res = displayValue.toString().slice(0, -1);
    if (res.length === 0) {
        displayValue = '';
        display.textContent = '';
        return;
    };
    
    if (!operator && !secondNumber) {
        displayValue = res;
        display.textContent = displayValue;
        firstNumber = +displayValue;
    } else if (operator && !resultValue) {
        
        displayValue = res;
        display.textContent = displayValue;
        secondNumber = +displayValue;
    }
}