function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operate(op, x, y){
    switch(op){
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y); 
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);               
    }
}

function setNumValue(selection){
    for(var i=0; i<10; i++){
        if(i==selection){
            buttonVal = i
            calcDisplay.innerHTML = buttonVal;
        }
    }
}

var buttonVal = 0;

const calcDisplay = document.querySelector('.calc-output');

const numbersGrid = document.querySelector('.numbers-grid');

const one =  document.querySelector('.one');
one.addEventListener('click', () => setNumValue(1));

const two =  document.querySelector('.two');
two.addEventListener('click', () => setNumValue(2));

const three =  document.querySelector('.three');
three.addEventListener('click', () => setNumValue(3));

const four =  document.querySelector('.four');
four.addEventListener('click', () => setNumValue(4));

const five =  document.querySelector('.five');
five.addEventListener('click', () => setNumValue(5));

const six =  document.querySelector('.six');
six.addEventListener('click', () => setNumValue(6));

const seven =  document.querySelector('.seven');
seven.addEventListener('click', () => setNumValue(7));

const eight =  document.querySelector('.eight');
eight.addEventListener('click', () => setNumValue(8));

const nine =  document.querySelector('.nine');
nine.addEventListener('click', () => setNumValue(9));

const zero =  document.querySelector('.zero');
zero.addEventListener('click', () => setNumValue(0));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => setNumValue(0));

const addOp =  document.querySelector('.ad-op');

const decimal =  document.querySelector('.decimal');

const equalOp = document.querySelector('.equal-op');


