//Variable declarations
let output = document.querySelector(`.screen`);
let operator = document.querySelectorAll(`.operator`);
let number = document.querySelectorAll(`.number-btn`);
let period = document.querySelector(`.period-btn`);
let reset = document.querySelector(`.ac-btn`);
let equals = document.querySelector(`.equal-btn`);

let currentNumber = ``;
let currentTotal = 0;
let currentOperator = ``;
let newNumber = false;
let errorState = false;

//Numbers

number.forEach(button => {
    button.addEventListener(`click`, () => {
        if (newNumber) {
            currentNumber = ``;
            newNumber = false;
            errorState = false;
        }
        currentNumber += button.textContent;
        output.textContent = currentNumber;
    })
});

//Operators

operator.forEach(button => {
    button.addEventListener(`click`, () => {
        if (currentOperator) {
            calculate();
        } else if (currentTotal === 0 && currentNumber !== ``) {
            currentTotal = Number(currentNumber);
            console.log(currentTotal);
        }
        currentOperator = button.textContent;
        newNumber = true;
    });
});

//Equals

equals.addEventListener(`click`, () => {
    calculate();
    output.textContent = currentTotal;
    currentOperator = ``;
});

//Calculate

function calculate() {
    let inputNumber = Number(currentNumber);
    if (currentOperator === '+') {
        currentTotal += inputNumber;
        currentTotal = Math.round(currentTotal*100)/100;
    } else if (currentOperator === '-') {
        currentTotal -= inputNumber;
        currentTotal = Math.round(currentTotal*100)/100;
    } else if (currentOperator === 'x') {
        currentTotal *= inputNumber;
        currentTotal = Math.round(currentTotal*100)/100;
    }else if (currentOperator === '/') {
        if (inputNumber === 0) {
            output.textContent = "Error"; 
            errorState = true;            
            currentTotal = 0;             
            currentNumber = ``;           
            return;                       
        } else {
            currentTotal /= inputNumber;
            currentTotal = Math.round(currentTotal*100)/100;
        }
    }

    output.textContent = currentTotal;
    currentNumber = ``;
    currentOperator = ``;
    console.log(currentTotal);
}

//Reset

reset.addEventListener(`click`, () => {
    currentNumber = ``;
    currentTotal = 0;
    currentOperator = ``;
    output.textContent = ``;
    errorState = false;
});