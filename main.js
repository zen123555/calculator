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

function clearDisplay(){
    calcDisplay.innerHTML = '';
    testVal = 0;
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

/*
might  not be needed...
*/
function setOpValue(op){

    for(var i=0; i<ops.length; i++){
        if(op === ops[i]){
            calcDisplay.innerHTML += op;
            testOp = op;
        }
    } 
}

function setNumValue(selection){

    for(var i=0; i<nums.length; i++){
        if(selection==nums[i]){
            calcDisplay.innerHTML += selection;
            /*
            testVal is constantly initialized to reflect 
            what is in calcDisplay, saved as a string.
            Using regex and string functions may be the key
            to getting calculator to work
            */
            testVal = calcDisplay.innerHTML; 
        }
    }
    
}



const nums = [0,1,2,3,4,5,6,7,8,9];
const ops = ['+', '-', '/', '*', '.'];

var testVal = 0;

const calcDisplay = document.querySelector('.calc-output');

/*
might not be needed...

const numbersGrid = document.querySelector('.numbers-grid');

*/
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

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => setNumValue(0));

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => clearDisplay());

const addOp = document.querySelector('.add-op');
addOp.addEventListener('click', () => setOpValue('+'));

const decimal =  document.querySelector('.decimal');
decimal.addEventListener('click', () => setOpValue('.'));

const equalOp = document.querySelector('.equal-op');
equalOp.addEventListener('click', () => setOpValue('='));

