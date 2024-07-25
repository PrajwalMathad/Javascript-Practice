class Calculator {
    constructor(operatorDisplay, resultDisplay) {
        this.operatorDisplay = operatorDisplay;
        this.resultDisplay = resultDisplay;
        this.clear();
    }

    clear() {
        this.currentOperator = '';
        this.currentResult = '';
        this.operation = undefined;
    }

    delete() {
        this.currentResult = this.currentResult.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentResult.includes(".")) return;
        this.currentResult = this.currentResult.toString() + number.toString();
    }

    selectOperation(operation) {
        if (this.currentResult === '') return;
        if (this.currentOperator !== '') {
            this.compute();
        }
        this.operation = operation;
        this.currentOperator = this.currentResult;
        this.currentResult = '';
    }

    updateDisplay() {
        this.resultDisplay.innerText = this.currentResult;
        if(this.operation) {
            this.operatorDisplay.innerText = this.currentOperator + this.operation;
        } else {
            this.operatorDisplay.innerText = '';
        }        
    }

    compute() {
        let result;
        let firstOperator = parseInt(this.currentOperator);
        let secondOperator = parseInt(this.currentResult);
        if (isNaN(firstOperator) || isNaN(secondOperator)) return;
        switch (this.operation) {
            case '+':
                result = firstOperator + secondOperator;
                break;
            case '-':
                result = firstOperator - secondOperator;
                break;
            case '*':
                result = firstOperator * secondOperator;
                break;
            case '/':
                result = firstOperator / secondOperator;
                break;
            default:
                break;
        }
        this.currentResult = result;
        this.operation = undefined;
        this.currentOperator = '';
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButtons = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const operatorDisplay = document.querySelector("[data-operator-display]");
const resultDisplay = document.querySelector("[data-result-display]");
console.log(numberButtons);

const calculator = new Calculator(operatorDisplay, resultDisplay);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        calculator.selectOperation(operator.innerText);
        calculator.updateDisplay();
    })
})

equalsButtons.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})