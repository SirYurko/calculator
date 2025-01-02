const buttons = {
    num1: document.getElementById('button1'),
    num2: document.getElementById('button2'),
    num3: document.getElementById('button3'),
    num4: document.getElementById('button4'),
    num5: document.getElementById('button5'),
    num6: document.getElementById('button6'),
    num7: document.getElementById('button7'),
    num8: document.getElementById('button8'),
    num9: document.getElementById('button9'),
    num0: document.getElementById('button0'),
    multiply: document.getElementById('button*'),
    divide: document.getElementById('button/'),
    plus: document.getElementById('button+'),
    minus: document.getElementById('button-'),
    equals: document.getElementById('button='),
    clear: document.getElementById('buttonC')
};
/* Кнопки змінні
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button0 = document.getElementById('button0');
*/
/* Кнопки операторів
let buttonMultiply = document.getElementById('button*');
let buttonDivide = document.getElementById('button/');
let buttonPlus = document.getElementById('button+');
let buttonMinus = document.getElementById('button-');
let buttonEquals = document.getElementById('button=');
let buttonClear = document.getElementById('buttonC')
*/

const resultSpace = document.getElementById('result')
let isCalculated = false;

function clearDisplay() {
    console.log("Clear button clicked");
    resultSpace.textContent = '0';
}

function handleButtonClick(event){
    if(isCalculated){
        resultSpace.textContent = event.target.textContent;
        isCalculated = false;
    }else if (resultSpace.textContent === '0' || resultSpace.textContent === "Error"){
        resultSpace.textContent = event.target.textContent;
    }else {
        resultSpace.textContent += event.target.textContent;
    }
}

function isValidExpression(expression) {
    return /^[0-9+\-*/. ]+$/.test(expression);
}

function calculateResult(){
    let expression = resultSpace.textContent;
    expression = expression.replace('=', '');

    if(!isValidExpression(expression)){
        resultSpace.textContent = "Error";
        return;
    }

    try{
        let result = eval(expression);
        resultSpace.textContent = result;
        isCalculated = true;
    }catch (error){
        resultSpace.textContent = "Error";
        console.error('Invalid expression:', expression);
    }
}

Object.values(buttons).forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

buttons.equals.addEventListener('click', calculateResult);

buttons.clear.addEventListener('click', clearDispay);