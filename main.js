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
            runningTotal += add(x,y);
            break;
        case '-':
            runningTotal -= subtract(x,y); 
            break;
        case '*':
            runningTotal *= multiply(x,y);
            break;
        case '/':
            runningTotal /= divide(x,y);               
    }
    calcResult.innerHTML = runningTotal;
}

function clearDisplay(){
    runningTotal = 0;
    numVal1 = 0;
    numVal2 = 0;
    calcOutput.innerHTML = '';
    calcResult.innerHTML= '';
    opFlag = false;
}

function setDispVal(x){
    calcOutput.innerHTML += x;
}

function setOpVal(x){
    opVal = x;
    numVal1 = calcOutput.innerHTML;
}


var numVal1 ='';
var numVal2 ='';
var opVal = '';
var opFlag = false;

const calcOutput = document.querySelector('.calc-output');
const calcResult = document.querySelector('.calc-result');

var runningTotal = 0;

const one =  document.querySelector('.one');
one.addEventListener('click', () => setDispVal('1'));

const two =  document.querySelector('.two');
two.addEventListener('click', () => setDispVal('2'));

const addOp = document.querySelector('.add-op');
addOp.addEventListener('click', () => setOpVal('+'));

const equalOp = document.querySelector('.equal-op');
equalOp.addEventListener('click', () => operate(opVal, Number(numVal1), Number(numVal2)));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => clearDisplay());

/*

const two =  document.querySelector('.two');
two.addEventListener('click', () => returnNumVal(2));

const three =  document.querySelector('.three');
three.addEventListener('click', () => returnNumVal(3));

const four =  document.querySelector('.four');
four.addEventListener('click', () => returnNumVal(4));

const five =  document.querySelector('.five');
five.addEventListener('click', () => returnNumVal(5));

const six =  document.querySelector('.six');
six.addEventListener('click', () => returnNumVal(6));

const seven =  document.querySelector('.seven');
seven.addEventListener('click', () => returnNumVal(7));

const eight =  document.querySelector('.eight');
eight.addEventListener('click', () => returnNumVal(8));

const nine =  document.querySelector('.nine');
nine.addEventListener('click', () => returnNumVal(9));

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => returnNumVal(0));




const decimal =  document.querySelector('.decimal');
decimal.addEventListener('click', () => switchNumVal('.'));

const equalOp = document.querySelector('.equal-op');
equalOp.addEventListener('click', () => switchNumVal('='));
*/




