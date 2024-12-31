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

let buttonMultiply = document.getElementById('button*');
let buttonDivide = document.getElementById('button/');
let buttonPlus = document.getElementById('button+');
let buttonMinus = document.getElementById('button-');
let buttonEquals = document.getElementById('button=');
let buttonClear = document.getElementById('buttonC')
let resultSpace = document.getElementById('result')


//створює масив кнопок, за допомогою селекторів <button>
let buttons = document.querySelectorAll('button') 


// функція яка перебирає масив buttons і для кожного створює функцію яка
// дозволяє вводити значення в resultSpace
buttons.forEach(function(button){ 
    button.addEventListener('click', function(){

        if(resultSpace.textContent === '0'){
            resultSpace.textContent = this.textContent;    
        }else{
            resultSpace.textContent += this.textContent;
        }
    });
});

// функція для кнопки очищення
function clear(){
    buttonClear.addEventListener('click', function(){
        resultSpace.textContent = '0';
    })
}

clear()